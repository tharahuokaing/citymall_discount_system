# citymall_discount_system
# Huokaingthara Bank × City Mall Discount System

A modern, responsive web application featuring a promotional discount store co-branded with **Huokaingthara Bank** and **City Mall**. Users can browse categorized items, enjoy an automatic **50% discount** applied through Huokaingthara Bank payment authorization, and complete orders using an interactive **KHQR code payment interface**.

## 🌟 Key Features

* **50% Bank Discount Engine:** Real-time automatic deduction applied to all selected items when checking out via Huokaingthara Bank.
* **Interactive KHQR Payment:** Custom payment modal featuring dynamic QR code generation based on exact cart totals, countdown timer, transaction reference IDs, and payment status verification.
* **Dynamic Item Selection:** Storefront equipped with category filters (All, Electronics, Fashion, Dining, Lifestyle), item search, and interactive shopping cart operations.
* **Responsive City Mall UI:** Mobile-first, high-contrast design styled with modern UI components and smooth modal animations.

## 📂 Project Structure

```text
├── index.html       # Storefront UI, shopping cart drawer, and KHQR payment modal
├── styles.css       # Custom styling, animations, colors, and layout overrides
└── app.js          # Cart logic, discount calculations, and QR payment engine

## 🛠️ Setup & Installation

### Option 1: Direct Local Execution

1. Clone or download the repository:
```bash
git clone [https://github.com/your-username/huokaingthara-bank-citymall.git](https://github.com/your-username/huokaingthara-bank-citymall.git)
cd huokaingthara-bank-citymall

2. Open `index.html` directly in any web browser.

### Option 2: Deploy to GitHub Pages

1. Push the files to your main branch on GitHub.
2. Go to **Settings** > **Pages** in your repository.
3. Select `main` branch as the source and click **Save**.
4. Access your live site at `https://<your-username>.github.io/<repository-name>/`.

## 💳 Payment Flow Architecture

1. **Item Selection:** Users add products to the cart and view original prices.
2. **50% Promo Applied:** The cart automatically calculates the subtotal and applies the **Huokaingthara 50% Off** discount.
3. **KHQR Generation:** Clicking **"Pay with KHQR"** opens the bank modal, generating a unique QR code with the discounted total amount.
4. **Verification:** Simulated real-time payment confirmation updates order status to completed.

## 🧰 Built With

* **HTML5 & CSS3** – Structured semantic layout with custom CSS properties.
* **JavaScript (ES6+)** – Client-side dynamic state management and event handling.
* **FontAwesome** – Vector iconography.
* **QRCode.js** – Client-side QR generation engine.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
