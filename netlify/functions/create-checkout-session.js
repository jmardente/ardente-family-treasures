const Stripe = require("stripe");
const products = require("../../products.js");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed." }) };
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Stripe is not configured yet.");
    }

    const { items = [] } = JSON.parse(event.body || "{}");
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("Your cart is empty.");
    }

    const productMap = new Map(products.map((product) => [product.id, product]));
    const line_items = items.map(({ id, quantity }) => {
      const product = productMap.get(id);
      if (!product || product.status !== "available") {
        throw new Error(`Product is unavailable: ${id}`);
      }

      const normalizedQuantity = Math.max(1, Math.min(20, Number(quantity) || 1));
      const configuredPrice = product.stripePriceEnv ? process.env[product.stripePriceEnv] : null;

      if (configuredPrice) {
        return { price: configuredPrice, quantity: normalizedQuantity };
      }

      if (Number.isFinite(product.price)) {
        return {
          price_data: {
            currency: "usd",
            product_data: { name: product.name },
            unit_amount: Math.round(product.price * 100)
          },
          quantity: normalizedQuantity
        };
      }

      throw new Error(`Stripe Price ID is not configured for ${product.name}.`);
    });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const siteUrl = process.env.URL || "http://localhost:8888";
    const shippingRateId = process.env.STRIPE_SHIPPING_RATE_STANDARD || null;

    const sessionConfig = {
      mode: "payment",
      line_items,
      success_url: `${siteUrl}/?checkout=success`,
      cancel_url: `${siteUrl}/?checkout=cancelled`,
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["US"] },
      allow_promotion_codes: true
    };

    if (shippingRateId) {
      sessionConfig.shipping_options = [{ shipping_rate: shippingRateId }];
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
  } catch (error) {
    return { statusCode: 400, body: JSON.stringify({ error: error.message }) };
  }
};
