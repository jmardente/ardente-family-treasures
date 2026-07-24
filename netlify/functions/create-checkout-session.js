const Stripe = require("stripe");

const PRODUCT_PRICE_ENV = {
  "coral-reef": "STRIPE_PRICE_CORAL_REEF"
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed." }) };
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Stripe is not configured yet.");
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { items = [] } = JSON.parse(event.body || "{}");

    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("Your cart is empty.");
    }

    const line_items = items.map(({ id, quantity }) => {
      const envName = PRODUCT_PRICE_ENV[id];
      const price = envName && process.env[envName];
      if (!price) throw new Error(`Stripe Price ID is missing for ${id}.`);
      return {
        price,
        quantity: Math.max(1, Math.min(20, Number(quantity) || 1))
      };
    });

    const siteUrl = process.env.URL || "http://localhost:8888";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${siteUrl}/?checkout=success`,
      cancel_url: `${siteUrl}/?checkout=cancelled`,
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["US"] }
    });

    return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
  } catch (error) {
    return { statusCode: 400, body: JSON.stringify({ error: error.message }) };
  }
};
