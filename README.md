# Ardente Family Treasures — Version 2.0

## Upload to GitHub
Upload every file and folder in this project to the top level of your GitHub repository.

## Netlify
Connect the repository to Netlify. Netlify will publish the site automatically.

## Current Stripe setup
The available signed book uses the existing Stripe Payment Link:
https://buy.stripe.com/bJeeV50JO9qnbxfbXJcAo00

The Buy Now button and the single-product cart checkout work with that link.

In Stripe, enable adjustable quantity on that Payment Link so customers can confirm how many books they want.

## Future multi-product checkout
A secure Netlify Function is included for a true combined Stripe cart.

In Netlify, add these environment variables:
- STRIPE_SECRET_KEY
- STRIPE_PRICE_CORAL_REEF

For each future product:
1. Create the product and price in Stripe.
2. Add a new product to products.js.
3. Add its product ID and environment-variable name to netlify/functions/create-checkout-session.js.
4. Add the matching Stripe Price ID as a Netlify environment variable.

Never put the Stripe secret key in GitHub, index.html, products.js, or script.js.

## Forms
The newsletter and contact forms use Netlify Forms and will appear in the Netlify dashboard after deployment.
