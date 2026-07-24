ARDENTE FAMILY TREASURES — ONE-PAGE GITHUB WEBSITE

Upload every file and the complete assets folder to the root of your GitHub repository.

This version has:
- One website page only (index.html)
- Built-in Books & Treasured Gifts shop section
- Slide-out shopping cart
- Stripe checkout button
- Signed Cora and the Coral Reef product at $20.00
- Your Stripe Payment Link connected to checkout

IMPORTANT ABOUT STRIPE:
The current Stripe Payment Link is for Cora and the Coral Reef. The cart can hold repeated copies, but the customer should select the final quantity on Stripe checkout. In Stripe Dashboard, open this Payment Link and enable “Let customers adjust quantity.”

To sell different gifts together in one single cart checkout, those products need Stripe Price IDs plus a Stripe Checkout Session created by a small serverless function. A plain GitHub Pages site cannot safely store Stripe secret keys. Do not place any Stripe secret key in these files.
