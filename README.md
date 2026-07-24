# Ardente Family Treasures — GitHub Pages Website

This package reproduces the supplied homepage artwork exactly by using the approved image as the responsive page design, with clickable links placed over the visible navigation and buttons.

## 1. Add your real links

Open `site-config.js` and replace:

- `PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE` with your Stripe Payment Link
- the Facebook URL with your page URL
- the Amazon URL with the book listing URL
- `YOUR-EMAIL@example.com` with your email address

A Stripe Payment Link normally begins with:

`https://buy.stripe.com/`

## 2. Upload to GitHub

1. Create or open your GitHub repository.
2. Choose **Add file → Upload files**.
3. Open this website folder on your computer.
4. Upload all files and the `assets` folder. Do not upload only the ZIP file.
5. Click **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select the `main` branch and `/ (root)` folder.
9. Click **Save**.

GitHub will display the live website address after deployment.

## 3. Test clickable areas

Add `?debug=1` to the end of the live URL to show all clickable hotspot boxes. Example:

`https://YOUR-NAME.github.io/YOUR-REPOSITORY/?debug=1`

Remove `?debug=1` after testing.

## Files

- `index.html` — page structure and clickable areas
- `styles.css` — responsive sizing and hotspot positions
- `site-config.js` — Stripe, Facebook, Amazon, and email links
- `script.js` — link behavior and setup warnings
- `assets/ardente-homepage.png` — approved homepage artwork
