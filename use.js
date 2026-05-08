    // ── DATA ──
    const products = [
      {
        id: 1, name: "Charcoal Detox Bar", tagline: "Deep cleanse & pore clarity",
        price: 18, badge: "bestseller",
        skin: ["oily", "acne"], scent: "earthy", purpose: "detox",
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80",
        imgs: [
          "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
        ],
        rating: 4.9, reviews: 312,
        benefits: ["Unclogs pores deeply", "Controls excess oil", "Brightens dull skin", "Fights acne-causing bacteria"],
        ingredients: "Activated charcoal, olive oil, coconut oil, shea butter, castor oil, tea tree essential oil.",
        usage: "Lather between hands or with a loofah. Apply to damp skin, massage gently for 60 seconds, rinse thoroughly.",
        stock: "Only 8 left",
        tags: ["Oily Skin", "Detox", "Acne"],
        reviewList: [
          { name: "Amara N.", stars: 5, text: "Cleared my pores in 2 weeks. Absolutely love it!" },
          { name: "Jude O.", stars: 5, text: "Best charcoal soap I've ever used. The lather is incredible." },
        ]
      },
      {
        id: 2, name: "Rose & Honey Glow Bar", tagline: "Radiance boosting, all day glow",
        price: 22, badge: "new",
        skin: ["dry", "normal"], scent: "floral", purpose: "glow",
        img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500&q=80",
        imgs: [
          "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
          "https://images.unsplash.com/photo-1617220325048-ece3b8a0aa5e?w=600&q=80",
          "https://images.unsplash.com/photo-1607006483224-34d55f53d9f8?w=600&q=80",
        ],
        rating: 4.8, reviews: 198,
        benefits: ["Boosts natural radiance", "Deeply moisturises dry patches", "Gentle enough for daily use", "Fades uneven skin tone"],
        ingredients: "Rosa damascena (rose) extract, raw honey, glycerin, sweet almond oil, palm-free coconut oil.",
        usage: "Use morning and evening for best results. Suitable for face and body.",
        stock: "Selling fast",
        tags: ["Dry Skin", "Glow", "Brightening"],
        reviewList: [
          { name: "Fatima M.", stars: 5, text: "My skin glows! Got three compliments in one week." },
          { name: "Nadia R.", stars: 4, text: "Smells divine. Very gentle, won't irritate sensitive areas." },
        ]
      },
      {
        id: 3, name: "Peppermint Fresh Bar", tagline: "Invigorating daily refresh",
        price: 16, badge: null,
        skin: ["oily", "normal"], scent: "minty", purpose: "refresh",
        img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80",
        imgs: [
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
          "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
        ],
        rating: 4.7, reviews: 145,
        benefits: ["Wakes up tired skin", "Antibacterial protection", "Refreshing cooling sensation", "Long-lasting freshness"],
        ingredients: "Peppermint essential oil, spearmint, eucalyptus oil, aloe vera, vegetable glycerin.",
        usage: "Perfect for morning showers to energise. Also great after exercise.",
        stock: null,
        tags: ["Oily Skin", "Refresh", "Minty"],
        reviewList: [
          { name: "Daniel K.", stars: 5, text: "My morning shower game has never been better. 10/10." },
          { name: "Lydia S.", stars: 4, text: "Love the cooling effect. Great for summer!" },
        ]
      },
      {
        id: 4, name: "Lavender Calm Bar", tagline: "Soothe, relax & restore",
        price: 20, badge: null,
        skin: ["sensitive", "dry"], scent: "floral", purpose: "soothe",
        img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&q=80",
        imgs: [
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80",
          "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
        ],
        rating: 4.9, reviews: 267,
        benefits: ["Calms skin irritation", "Reduces redness & inflammation", "Perfect pre-bed ritual", "Gentle for sensitive skin"],
        ingredients: "Lavandula angustifolia oil, oat extract, chamomile, shea butter, vitamin E.",
        usage: "Best used in the evening. Let the lather sit for 30 seconds before rinsing.",
        stock: null,
        tags: ["Sensitive", "Calming", "Floral"],
        reviewList: [
          { name: "Grace A.", stars: 5, text: "My eczema-prone skin LOVES this. So gentle and calming." },
          { name: "Sara M.", stars: 5, text: "The lavender scent is so real and grounding. Incredible." },
        ]
      },
      {
        id: 5, name: "Turmeric Bright Bar", tagline: "Even tone & natural radiance",
        price: 24, badge: "bestseller",
        skin: ["all", "normal"], scent: "earthy", purpose: "glow",
        img: "https://images.unsplash.com/photo-1607006483224-34d55f53d9f8?w=500&q=80",
        imgs: [
          "https://images.unsplash.com/photo-1607006483224-34d55f53d9f8?w=600&q=80",
          "https://images.unsplash.com/photo-1617220325048-ece3b8a0aa5e?w=600&q=80",
        ],
        rating: 4.8, reviews: 389,
        benefits: ["Fades dark spots naturally", "Evens skin tone", "Anti-inflammatory properties", "Brightens over time"],
        ingredients: "Raw turmeric extract, sandalwood powder, kojic acid (natural), coconut milk, palm-free soap base.",
        usage: "Use 3–4 times weekly for best brightening results. Follow with moisturiser.",
        stock: "Only 5 left",
        tags: ["All Skin", "Brightening", "Anti-Dark Spots"],
        reviewList: [
          { name: "Kezia D.", stars: 5, text: "My dark spots have visibly faded. This is the real deal!" },
          { name: "Tunde F.", stars: 5, text: "Can't believe how much brighter my skin looks after 4 weeks." },
        ]
      },
      {
        id: 6, name: "Oat & Shea Gentle Bar", tagline: "Ultra-gentle daily nourishment",
        price: 19, badge: null,
        skin: ["sensitive", "dry"], scent: "neutral", purpose: "soothe",
        img: "https://images.unsplash.com/photo-1617220325048-ece3b8a0aa5e?w=500&q=80",
        imgs: [
          "https://images.unsplash.com/photo-1617220325048-ece3b8a0aa5e?w=600&q=80",
          "https://images.unsplash.com/photo-1607006483224-34d55f53d9f8?w=600&q=80",
        ],
        rating: 4.8, reviews: 172,
        benefits: ["Ideal for baby skin too", "Zero fragrance formula", "Extreme moisturisation", "Hypoallergenic formula"],
        ingredients: "Colloidal oatmeal, unrefined shea butter, jojoba oil, pure beeswax, distilled water.",
        usage: "Suitable for infants and adults alike. No need to follow with moisturiser.",
        stock: null,
        tags: ["Sensitive", "Fragrance-Free", "Dry Skin"],
        reviewList: [
          { name: "Priya S.", stars: 5, text: "I use this on my toddler. Zero reactions, works beautifully." },
          { name: "Helen O.", stars: 4, text: "The gentlest soap I've found for my sensitive skin." },
        ]
      },
    ];

    const filters = [
      { label: "All", value: "all" },
      { label: "Oily Skin", value: "oily" },
      { label: "Dry Skin", value: "dry" },
      { label: "Sensitive", value: "sensitive" },
      { label: "Glow", value: "glow" },
      { label: "Detox", value: "detox" },
      { label: "Calm", value: "soothe" },
    ];

    let cart = JSON.parse(localStorage.getItem('masa_cart') || '[]');
    let activeFilter = 'all';
    let modalQty = 1;
    let currentProduct = null;

    // ── MARQUEE ──
    function buildMarquee() {
      const items = ["Free Shipping Over $50", "100% Natural", "Small Batch Crafted", "Vegan & Cruelty-Free", "Dermatologically Tested", "Plant-Based Formulas", "Zero Sulphates", "Eco Packaging"];
      const track = document.getElementById('marqueeTrack');
      const html = [...items, ...items].map(i => `<span class="marquee-item"><span class="marquee-dot"></span>${i}</span>`).join('');
      track.innerHTML = html + html;
    }

    // ── FILTER PILLS ──
    function buildFilters() {
      const el = document.getElementById('filterPills');
      el.innerHTML = filters.map(f => `<button class="pill ${f.value === activeFilter ? 'active' : ''}" onclick="setFilter('${f.value}')">${f.label}</button>`).join('');
    }

    function setFilter(v) {
      activeFilter = v;
      buildFilters();
      filterProducts();
    }

    // ── PRODUCTS ──
    function filterProducts() {
      const q = document.getElementById('searchInput').value.toLowerCase();
      const filtered = products.filter(p => {
        const matchFilter = activeFilter === 'all' || p.skin.includes(activeFilter) || p.purpose === activeFilter;
        const matchSearch = !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q));
        return matchFilter && matchSearch;
      });
      renderProducts(filtered);
    }

    function renderProducts(list) {
      const grid = document.getElementById('productsGrid');
      if (!list.length) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--warm-gray);font-size:15px;font-weight:300;">No soaps found. Try a different filter.</div>`;
        return;
      }
      grid.innerHTML = list.map(p => {
        const badgeHtml = p.badge ? `<span class="card-badge badge-${p.badge}">${p.badge === 'bestseller' ? 'Best Seller' : p.badge === 'limited' ? 'Limited' : 'New'}</span>` : '';
        const stockHtml = p.stock ? `<div style="font-size:11px;color:var(--gold);letter-spacing:0.06em;margin-top:6px;">⚡ ${p.stock}</div>` : '';
        const starsHtml = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
        return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="card-img-wrap">
        ${badgeHtml}
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <button class="card-quick-add" onclick="event.stopPropagation();addToCart(${p.id},1)">+ Add to Cart</button>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-tagline">${p.tagline}</div>
        <div class="card-bottom">
          <div class="card-price">$${p.price}</div>
          <div class="card-rating"><span class="stars">${starsHtml}</span><span class="rating-count">(${p.reviews})</span></div>
        </div>
        ${stockHtml}
        <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      </div>
    </div>`;
      }).join('');
    }

    // ── MODAL ──
    function openModal(id) {
      currentProduct = products.find(p => p.id === id);
      if (!currentProduct) return;
      modalQty = 1;
      renderModal();
      document.getElementById('modalOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    function handleModalOverlayClick(e) {
      if (e.target === document.getElementById('modalOverlay')) closeModal();
    }

    function setModalImg(src) {
      document.getElementById('modalMainImg').src = src;
      document.querySelectorAll('.modal-thumb').forEach(t => {
        t.classList.toggle('active', t.src === src || t.dataset.src === src);
      });
    }

    function renderModal() {
      const p = currentProduct;
      const stars = '★'.repeat(Math.round(p.rating));
      const badgeHtml = p.badge ? `<span class="modal-badge">${p.badge === 'bestseller' ? '🏆 Best Seller' : p.badge === 'new' ? '✨ New Arrival' : '⚡ Limited'}</span>` : '';
      const stockHtml = p.stock ? `<div style="color:var(--gold);font-size:13px;margin-bottom:16px;font-weight:500;">⚡ ${p.stock} — order soon</div>` : '';

      document.getElementById('modalLeft').innerHTML = `
    <img class="modal-img-main" id="modalMainImg" src="${p.imgs[0]}" alt="${p.name}">
    <div class="modal-thumbnails">
      ${p.imgs.map((img, i) => `<img class="modal-thumb ${i === 0 ? 'active' : ''}" src="${img}" data-src="${img}" onclick="setModalImg('${img}')" alt="view ${i + 1}">`).join('')}
    </div>
  `;

      document.getElementById('modalRight').innerHTML = `
    ${badgeHtml}
    <h2 class="modal-name">${p.name}</h2>
    <p class="modal-tagline">${p.tagline}</p>
    <div class="modal-rating">
      <span class="modal-stars">${stars}</span>
      <span class="modal-rating-text">${p.rating} · ${p.reviews} reviews</span>
    </div>
    <div class="modal-price">$${p.price}</div>
    ${stockHtml}
    <hr class="modal-divider">
    <div class="modal-benefits">
      <div class="modal-benefits-title">Skin Benefits</div>
      ${p.benefits.map(b => `<div class="modal-benefit-item"><span class="modal-benefit-dot"></span>${b}</div>`).join('')}
    </div>
    <div style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:var(--warm-gray);margin-bottom:8px;">Ingredients</div>
    <p class="modal-ingredients">${p.ingredients}</p>
    <div style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:var(--warm-gray);margin-bottom:8px;">How to Use</div>
    <p class="modal-ingredients">${p.usage}</p>
    <hr class="modal-divider">
    <div class="modal-qty-row">
      <div class="modal-qty">
        <button class="modal-qty-btn" onclick="changeModalQty(-1)">−</button>
        <span class="modal-qty-num" id="modalQtyNum">1</span>
        <button class="modal-qty-btn" onclick="changeModalQty(1)">+</button>
      </div>
      <button class="modal-add-cart" onclick="addToCart(${p.id}, modalQty); closeModal()">Add to Cart</button>
    </div>
    <button class="modal-buy-now" onclick="addToCart(${p.id}, modalQty); openCart(); closeModal()">Buy Now →</button>
    <div class="modal-trust">
      <span class="modal-trust-item">🔒 Secure checkout</span>
      <span class="modal-trust-item">↩️ 30-day returns</span>
      <span class="modal-trust-item">🚚 Free over $50</span>
    </div>
    <div class="modal-reviews">
      <div class="modal-reviews-title">Customer Reviews</div>
      ${p.reviewList.map(r => `
        <div class="modal-review-item">
          <div class="review-header">
            <span class="review-name">${r.name}</span>
            <span class="review-stars">${'★'.repeat(r.stars)}</span>
          </div>
          <div class="review-text">${r.text}</div>
        </div>`).join('')}
    </div>
  `;
    }

    function changeModalQty(delta) {
      modalQty = Math.max(1, Math.min(10, modalQty + delta));
      const el = document.getElementById('modalQtyNum');
      if (el) el.textContent = modalQty;
    }

    // ── CART ──
    function addToCart(id, qty) {
      qty = typeof qty === 'number' ? qty : 1;
      const p = products.find(p => p.id === id);
      if (!p) return;
      const existing = cart.find(c => c.id === id);
      if (existing) { existing.qty += qty; }
      else { cart.push({ id, qty }); }
      saveCart(); updateCartUI();
      showToast(`🧼 ${p.name} added to cart!`);
    }

    function removeFromCart(id) {
      cart = cart.filter(c => c.id !== id);
      saveCart(); updateCartUI(); renderCartItems();
    }

    function changeQty(id, delta) {
      const item = cart.find(c => c.id === id);
      if (!item) return;
      item.qty = Math.max(1, item.qty + delta);
      saveCart(); updateCartUI(); renderCartItems();
    }

    function saveCart() { localStorage.setItem('masa_cart', JSON.stringify(cart)); }

    function updateCartUI() {
      const total = cart.reduce((s, c) => s + c.qty, 0);
      const badge = document.getElementById('cartBadge');
      const mobileBadge = document.getElementById('mobileBadge');
      if (badge) { badge.textContent = total; badge.classList.toggle('visible', total > 0); }
      if (mobileBadge) { mobileBadge.textContent = total; mobileBadge.classList.toggle('show', total > 0); }
    }

    function openCart() {
      document.getElementById('cartOverlay').classList.add('open');
      document.getElementById('cartSidebar').classList.add('open');
      document.body.style.overflow = 'hidden';
      renderCartItems();
    }

    function closeCart() {
      document.getElementById('cartOverlay').classList.remove('open');
      document.getElementById('cartSidebar').classList.remove('open');
      document.body.style.overflow = '';
    }

    function renderCartItems() {
      const el = document.getElementById('cartItems');
      const footer = document.getElementById('cartFooter');
      if (!cart.length) {
        el.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🧼</div><div>Your cart is empty.</div><div style="margin-top:8px;font-size:13px">Add some beautiful soaps!</div></div>`;
        footer.innerHTML = '';
        return;
      }
      const subtotal = cart.reduce((s, c) => {
        const p = products.find(pr => pr.id === c.id);
        return s + (p ? p.price * c.qty : 0);
      }, 0);
      el.innerHTML = cart.map(c => {
        const p = products.find(pr => pr.id === c.id);
        if (!p) return '';
        return `<div class="cart-item">
      <img class="cart-item-img" src="${p.img}" alt="${p.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-variant">${p.tagline}</div>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
            <span class="qty-num">${c.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
          </div>
          <div class="cart-item-price">$${(p.price * c.qty).toFixed(2)}</div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${p.id})">Remove</button>
      </div>
    </div>`;
      }).join('');
      const freeShipping = subtotal >= 50;
      footer.innerHTML = `
    <div class="cart-subtotal">
      <span class="cart-subtotal-label">Subtotal</span>
      <span class="cart-subtotal-val">$${subtotal.toFixed(2)}</span>
    </div>
    <p class="cart-note">${freeShipping ? '✅ You qualify for free shipping!' : `🚚 Add $${(50 - subtotal).toFixed(2)} more for free shipping`}</p>
    <button class="checkout-btn" onclick="proceedToCheckout()">Checkout Securely →</button>
    <div class="cart-trust">
      <span class="cart-trust-item">🔒 SSL Secure</span>
      <span class="cart-trust-item">🌿 Natural</span>
      <span class="cart-trust-item">↩️ Easy Returns</span>
    </div>
  `;
    }

    function addBundleToCart() {
      [1, 2, 4].forEach(id => addToCart(id, 1));
      showToast('🎁 Starter Bundle added to cart!');
    }

    function proceedToCheckout() {
      showToast('🔒 Secure checkout coming soon! (Demo)');
    }

    // ── NEWSLETTER ──
    function subscribeNewsletter() {
      const email = document.getElementById('newsletterEmail').value;
      if (!email || !email.includes('@')) { showToast('⚠️ Please enter a valid email'); return; }
      showToast('✅ Welcome to the MASA family!');
      document.getElementById('newsletterEmail').value = '';
    }

    // ── TOAST ──
    function showToast(msg) {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `<span class="toast-icon">${msg.slice(0, 2)}</span><span>${msg.slice(2)}</span>`;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }

    // ── SCROLL REVEAL ──
    function initReveal() {
      const els = document.querySelectorAll('.reveal');
      const obs = new IntersectionObserver(entries => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      els.forEach(el => obs.observe(el));
    }

    // ── NAV SCROLL ──
    window.addEventListener('scroll', () => {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
    });

    // ── INIT ──
    buildMarquee();
    buildFilters();
    filterProducts();
    updateCartUI();
    initReveal();
