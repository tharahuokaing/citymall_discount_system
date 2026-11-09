// =================================================================
// 1. TRANSLATION DICTIONARY (Khmer & English)
// =================================================================
const translations = {
    en: {
        appTitle: "City Mall × Huokaingthara Bank 50% Off Promo",
        subHeader: "50% OFF EXCLUSIVE BANK PROMO",
        heroTitle: "Get <span class='text-amber-400'>50% OFF</span> All Payments with Huokaingthara Bank",
        heroDesc: "Shop your favorite electronics, fashion, dining, and lifestyle items at City Mall Supermarket and enjoy instant half-price savings at checkout!",
        searchPlaceholder: "Search products...",
        catAll: "All Items",
        catElectronics: "Electronics",
        catFashion: "Fashion",
        catDining: "Dining",
        catLifestyle: "Lifestyle",
        cartTitle: "Shopping Cart",
        cartEmpty: "Your cart is empty",
        subtotal: "Subtotal",
        discount: "Huokaingthara Bank Discount (50%)",
        totalPay: "Total to Pay",
        checkoutBtn: "Pay with KHQR (50% Off)",
        modalTitle: "Huokaingthara Bank KHQR Payment",
        modalTimerMsg: "Expires in:",
        paymentBtn: "Payment",
        cancelBtn: "Cancel",
        successTitle: "Payment Successful!",
        successSaved: "Total Saved (50% Promo):",
        successPaid: "Total Paid:",
        doneBtn: "Back to Shopping"
    },
    km: {
        appTitle: "កម្មវិធីប្រូម៉ូសិន ៥០% ផ្សារទំនើប City Mall × ធនាគារ ហួកាំង ថារ៉ា",
        subHeader: "បញ្ចុះតម្លៃ ៥០% ពិសេសពីធនាគារ",
        heroTitle: "ទទួលបាន <span class='text-amber-400'>បញ្ចុះតម្លៃ ៥០%</span> រាល់ការទូទាត់ជាមួយធនាគារ ហួកាំង ថារ៉ា",
        heroDesc: "ទិញទំនិញអេឡិចត្រូនិក សម្លៀកបំពាក់ ម្ហូបអាហារ និងសម្ភារៈប្រើប្រាស់នៅផ្សារទំនើប City Mall ជាមួយការបញ្ចុះតម្លៃពាក់កណ្តាលភ្លាមៗ!",
        searchPlaceholder: "ស្វែងរកទំនិញ...",
        catAll: "ទំនិញទាំងអស់",
        catElectronics: "អេឡិចត្រូនិក",
        catFashion: "សម្លៀកបំពាក់",
        catDining: "ម្ហូបអាហារ",
        catLifestyle: "ការរស់នៅ",
        cartTitle: "កន្ត្រកទំនិញ",
        cartEmpty: "កន្ត្រកទំនិញរបស់អ្នកទទេ",
        subtotal: "សរុបរង",
        discount: "ការបញ្ចុះតម្លៃ ៥០% ធនាគារ ហួកាំង ថារ៉ា",
        totalPay: "ទឹកប្រាក់ត្រូវទូទាត់",
        checkoutBtn: "ទូទាត់តាម KHQR (បញ្ចុះតម្លៃ ៥០%)",
        modalTitle: "ការទូទាត់ប្រាក់ KHQR ធនាគារ ហួកាំង ថារ៉ា",
        modalTimerMsg: "ផុតកំណត់ក្នុង៖",
        paymentBtn: "ទូទាត់ប្រាក់",
        cancelBtn: "បោះបង់",
        successTitle: "ការទូទាត់ប្រាក់ទទួលបានជោគជ័យ!",
        successSaved: "ទឹកប្រាក់បានសន្សំ (បញ្ចុះ ៥០%)៖",
        successPaid: "ទឹកប្រាក់បានទូទាត់៖",
        doneBtn: "ត្រឡប់ទៅការទិញទំនិញ"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    
    if(lang === 'km') {
        document.getElementById('btn-km').className = "px-3 py-1 text-xs font-bold rounded bg-amber-500 text-slate-950 transition-all";
        document.getElementById('btn-en').className = "px-3 py-1 text-xs font-bold rounded text-slate-400 hover:text-white transition-all";
    } else {
        document.getElementById('btn-en').className = "px-3 py-1 text-xs font-bold rounded bg-amber-500 text-slate-950 transition-all";
        document.getElementById('btn-km').className = "px-3 py-1 text-xs font-bold rounded text-slate-400 hover:text-white transition-all";
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    renderProducts();
    updateCartUI();
}

// ==========================================
// 2. PRODUCT CATALOG DATA
// ==========================================
const products = [
    { id: 1, name: "Smart 4K Ultra HD TV", category: "electronics", originalPrice: 500.00, image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Wireless Noise-Canceling Headphones", category: "electronics", originalPrice: 120.00, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Designer Urban Jacket", category: "fashion", originalPrice: 80.00, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Classic Leather Sneakers", category: "fashion", originalPrice: 90.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Premium Artisan Coffee Beans (1kg)", category: "dining", originalPrice: 30.00, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Organic Gourmet Olive Oil", category: "dining", originalPrice: 24.00, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Ergonomic Office Desk Lamp", category: "lifestyle", originalPrice: 45.00, image: "https://images.unsplash.com/photo-1534349762230-e8cadf3afbac?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Stainless Steel Insulated Tumbler", category: "lifestyle", originalPrice: 28.00, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80" }
];

let cart = [];
let activeCategory = 'all';

// ==========================================
// 3. RENDER PRODUCTS
// ==========================================
function renderProducts() {
    const grid = document.getElementById('product-grid');
    const searchInput = document.getElementById('search-input');
    const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
    
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchesCat = activeCategory === 'all' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchVal);
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 font-mono">No products found.</div>`;
        return;
    }

    filtered.forEach(p => {
        const promoPrice = (p.originalPrice * 0.5).toFixed(2);
        const card = document.createElement('div');
        card.className = "bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group hover:border-amber-500/50 transition-all shadow-xl";
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden bg-slate-950">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-lg shadow-lg">50% OFF</span>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-mono tracking-wider uppercase text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">${p.category}</span>
                    <h3 class="font-bold text-slate-100 mt-2 mb-3">${p.name}</h3>
                </div>
                <div class="flex items-end justify-between pt-3 border-t border-slate-800/80">
                    <div>
                        <span class="text-xs text-slate-500 line-through block">$${p.originalPrice.toFixed(2)}</span>
                        <span class="text-lg font-black text-amber-400">$${promoPrice}</span>
                    </div>
                    <button onclick="addToCart(${p.id})" class="bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 w-10 h-10 rounded-xl flex items-center justify-center transition-all border border-slate-700 hover:border-amber-500">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if(btn.getAttribute('data-category') === cat) {
            btn.className = "cat-btn px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 transition-all whitespace-nowrap";
        } else {
            btn.className = "cat-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all whitespace-nowrap";
        }
    });
    renderProducts();
}

function filterProducts() {
    renderProducts();
}

// ==========================================
// 4. CART OPERATIONS
// ==========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if(existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    toggleCartDrawer();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if(item) {
        item.quantity += delta;
        if(item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    const badge = document.getElementById('cart-badge');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!container || !badge || !checkoutBtn) return;

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalCount;

    container.innerHTML = '';

    if(cart.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-slate-500 font-mono text-sm" data-i18n="cartEmpty">Your cart is empty</div>`;
        document.getElementById('cart-subtotal').textContent = '$0.00';
        document.getElementById('cart-discount').textContent = '-$0.00';
        document.getElementById('cart-total').textContent = '$0.00';
        checkoutBtn.disabled = true;
        return;
    }

    checkoutBtn.disabled = false;
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.originalPrice * item.quantity;
        subtotal += itemTotal;
        const promoItemTotal = itemTotal * 0.5;

        const row = document.createElement('div');
        row.className = "flex items-center space-x-4 bg-slate-950/40 p-3 rounded-xl border border-slate-800";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
            <div class="flex-1 min-w-0">
                <h4 class="text-sm font-bold text-slate-200 truncate">${item.name}</h4>
                <div class="text-xs text-amber-400 font-bold mt-1">$${promoItemTotal.toFixed(2)} <span class="text-slate-500 line-through font-normal">$${itemTotal.toFixed(2)}</span></div>
                <div class="flex items-center space-x-2 mt-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-xs hover:bg-slate-700">-</button>
                    <span class="text-xs font-bold">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-xs hover:bg-slate-700">+</button>
                </div>
            </div>
        `;
        container.appendChild(row);
    });

    const discount = subtotal * 0.5;
    const finalTotal = subtotal * 0.5;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-discount').textContent = `-$${discount.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${finalTotal.toFixed(2)}`;
}

function toggleCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.toggle('hidden');
}

// ==========================================
// 5. KHQR PAYMENT ENGINE
// ==========================================
let timerInterval;

function openPaymentModal() {
    toggleCartDrawer();
    
    const subtotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
    const finalTotal = (subtotal * 0.5).toFixed(2);
    
    document.getElementById('modal-pay-amount').textContent = `$${finalTotal}`;
    
    const refID = 'HTB-CM-' + Math.floor(10000 + Math.random() * 90000);
    document.getElementById('txn-ref').textContent = refID;

    const qrcodeContainer = document.getElementById('qrcode');
    if (qrcodeContainer) {
        qrcodeContainer.innerHTML = '';
        const khqrPayload = `KHQR:HUOKAINGTHARA:CITYMALL:${refID}:${finalTotal}`;
        new QRCode(qrcodeContainer, {
            text: khqrPayload,
            width: 180,
            height: 180,
            colorDark: "#030712",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    startCountdown(300);
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) paymentModal.classList.remove('hidden');
}

function closePaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) paymentModal.classList.add('hidden');
    clearInterval(timerInterval);
}

function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const display = document.getElementById('countdown-timer');
    if (!display) return;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            display.textContent = "EXPIRED";
        }
    }, 1000);
}

// Initialize Application State on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    const simulateBtn = document.getElementById('simulate-pay-btn');
    if (simulateBtn) {
        simulateBtn.addEventListener('click', () => {
            const subtotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
            const saved = (subtotal * 0.5).toFixed(2);
            const paid = (subtotal * 0.5).toFixed(2);

            closePaymentModal();

            document.getElementById('success-paid-amount').textContent = `$${paid}`;
            document.getElementById('success-saved-amount').textContent = `$${saved}`;
            const successModal = document.getElementById('success-modal');
            if (successModal) successModal.classList.remove('hidden');

            cart = [];
            updateCartUI();
        });
    }

    renderProducts();
    updateCartUI();
});

function closeSuccessModal() {
    const successModal = document.getElementById('success-modal');
    if (successModal) successModal.classList.add('hidden');
}
