// ============================================
// MR. BROWN'S CAFÉ & DINER — Digital Menu
// ============================================

// ── MYWORKPAGE URL (update when deployed) ──
const MYWORKPAGE_URL = '../Restaurant/index.html';
const MYWORKPAGE_LABEL = 'LI-devops';

// ── Free Unsplash images (Unsplash License — free for commercial use) ──
const categoryImages = {
  'hot-beverages':   'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&fit=crop',
  'signature-frappes':'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80&fit=crop',
  'classic-cold-brews':'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&fit=crop',
  'fries':           'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80&fit=crop',
  'quick-bites':     'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&fit=crop',
  'maggie':          'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&q=80&fit=crop',
  'pasta-street':    'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80&fit=crop',
  'desserts':        'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80&fit=crop',
  'lime-fresh':      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&fit=crop',
  'fresh-mojitos':   'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80&fit=crop',
  'whole-wheat-wraps':'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80&fit=crop',
  'whole-wheat-sandwiches':'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80&fit=crop',
  'eggs-theory':     'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80&fit=crop',
  'protein-packed-healthy-bowls':'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&fit=crop',
};

const heroImage = 'images/hero_bg.jpg';

// ── Menu Data ──────────────────────────────
const menuData = [
  {
    id: 'hot-beverages',
    name: 'Hot Beverages',
    icon: '☕',
    items: [
      { name: "Espresso Shot",  price: "69/109", desc: "Concentrated pure coffee (30ml / 60ml)", type: "veg" },
      { name: "Americano",      price: "99",     desc: "Espresso mixed with hot water, smooth and light", type: "veg" },
      { name: "Latte",          price: "119",    desc: "Espresso with lots of milk, creamy and mild", type: "veg" },
      { name: "Cappuccino",     price: "119",    desc: "Espresso with milk and thick foam, rich and frothy", type: "veg" },
      { name: "Affogato",       price: "119",    desc: "Vanilla ice cream topped with a hot espresso shot", type: "veg", bestseller: true },
      { name: "Hot Chocolate",  price: "139",    desc: "Warm, creamy chocolate drink, rich and comforting", type: "veg" },
      { name: "Caffè Mocha",    price: "129",    desc: "Coffee mixed with chocolate and milk, smooth and rich", type: "veg" },
    ]
  },
  {
    id: 'signature-frappes',
    name: 'Signature Frappes',
    icon: '🥤',
    items: [
      { name: "Classic Cold Coffee",       price: "139", desc: "Smooth chilled coffee with a light creamy taste, perfect to refresh", type: "veg" },
      { name: "Devil's Own Cold Coffee",   price: "199", desc: "Rich iced coffee with a chocolatey crunch and smooth finish", type: "veg", bestseller: true },
      { name: "Ferrero Rocher Frappe",     price: "199", desc: "Luxurious hazelnut-chocolate frappe with a velvety, indulgent finish", type: "veg", bestseller: true },
      { name: "Java Choco Chips Frappe",   price: "149", desc: "Refreshing iced coffee with chocolate chip bites in every sip", type: "veg" },
      { name: "Caramel Popcorn Frappe",    price: "129", desc: "Sweet caramel with a tiny pinch of salt — smooth, rich, and perfectly balanced", type: "veg" },
      { name: "Snow White Vanilla Frappe", price: "119", desc: "Thick shake made with the simple taste of real vanilla in every sip", type: "veg" },
      { name: "Sweet Strawberry Frappe",   price: "119", desc: "Made with real fruit flavor — a refreshing, pink treat that tastes like summer", type: "veg" },
      { name: "Butterscotch Frappe",       price: "139", desc: "A smooth, buttery delight — sweet, golden, and full of old-school flavor", type: "veg" },
      { name: "Lotus Biscoff Frappe",      price: "139", desc: "Smooth texture with a sweet, caramelised cookie flavour from Lotus Biscoff", type: "veg" },
      { name: "KitKat Frappe",             price: "139", desc: "Blended with KitKat, layered with light crunch and a crisp wafer-chocolate hit", type: "veg" },
      { name: "Oreo Cookie Frappe",        price: "139", desc: "Velvety cream shake with crushed Oreos, balancing deep cocoa notes", type: "veg" },
      { name: "Choco Brownie Frappe",      price: "149", desc: "Decadent chocolate shake blended with fudgy brownie chunks", type: "veg" },
      { name: "Choco Hazelnut Frappe",     price: "139", desc: "Silky smooth shake infused with roasted hazelnut flavor and a luxurious finish", type: "veg" },
      { name: "Choco Peanut Butter Frappe",price: "139", desc: "Creamy shake with peanut butter, giving a rich nutty and slightly sweet taste", type: "veg" },
      { name: "Nutella Frappe",            price: "149", desc: "Smooth chocolate shake made with Nutella — rich, creamy, and full of flavor", type: "veg" },
      { name: "Holy Moly Mango Frappe",    price: "129", desc: "Creamy mango shake bursting with juicy mango flavor — sweet, thick, and refreshing", type: "veg" },
    ]
  },
  {
    id: 'classic-cold-brews',
    name: 'Classic Cold Brews',
    icon: '🧊',
    items: [
      { name: "Classic Iced Latte",   price: "119", desc: "Smooth espresso with chilled milk over ice, light and refreshing", type: "veg" },
      { name: "Iced Espresso Tonic",  price: "139", desc: "Fizzy tonic meets bold espresso for a sharp, refreshing kick", type: "veg" },
      { name: "Iced Americano",       price: "99",  desc: "Clean, strong, and refreshing black coffee over ice", type: "veg" },
      { name: "Iced Mocha",           price: "129", desc: "Rich chocolate blended with espresso and milk over ice", type: "veg" },
      { name: "Iced Frappuccino",     price: "129", desc: "Creamy iced coffee with a frothy, smooth finish", type: "veg" },
      { name: "Peach Iced Tea",       price: "99",  desc: "Refreshing peach-flavored iced tea, light and fruity", type: "veg" },
    ]
  },
  {
    id: 'fries',
    name: 'Fries',
    icon: '🍟',
    items: [
      { name: "Classic Salted Fries",        price: "89",  desc: "Crispy fries seasoned with salt, simple and perfect", type: "veg" },
      { name: "Peri Peri Fries",             price: "99",  desc: "Crispy fries tossed in spicy peri peri seasoning", type: "veg" },
      { name: "Cheesy Fries",                price: "129", desc: "Hot fries loaded with melted cheese", type: "veg", bestseller: true },
      { name: "Peri Peri Cheesy Fries",      price: "139", desc: "Spicy peri peri fries topped with smooth melted cheese", type: "veg" },
      { name: "Dirty Chicken Cheesy Fries",  price: "179", desc: "Loaded fries with juicy chicken and melted cheese, messy and full of flavor", type: "nonveg" },
    ]
  },
  {
    id: 'quick-bites',
    name: 'Quick Bites',
    icon: '🥨',
    items: [
      { name: "Onion Rings",              price: "79",  desc: "Crispy fried onion rings with a light crunchy coating", type: "veg" },
      { name: "Veg Nuggets",              price: "79",  desc: "Crispy nuggets filled with mixed vegetables, soft inside and crunchy outside", type: "veg" },
      { name: "Cheese Corn Poppers",      price: "89",  desc: "Crunchy bites with sweet corn and melted cheese inside", type: "veg" },
      { name: "Mozzarella Cheese Sticks", price: "119", desc: "Crispy sticks filled with stretchy melted mozzarella cheese", type: "veg", bestseller: true },
      { name: "Chicken Nuggets",          price: "109", desc: "Juicy chicken bites coated and fried till crispy", type: "nonveg" },
      { name: "Chicken Jalapeño Balls",   price: "119", desc: "Spicy chicken balls with a hint of jalapeño and a crispy coating", type: "nonveg" },
      { name: "Chicken Popcorns",         price: "99",  desc: "Small crispy chicken bites, crunchy and full of flavor", type: "nonveg" },
    ]
  },
  {
    id: 'maggie',
    name: 'Maggie',
    icon: '🍜',
    items: [
      { name: "Classic Masala Maggie",         price: "69",  desc: "Hot noodles cooked in classic masala, simple and tasty", type: "veg" },
      { name: "Exotic Veg Maggie",             price: "99",  desc: "Masala noodles cooked with fresh mixed vegetables", type: "veg" },
      { name: "Cheese Burst Maggie",           price: "99",  desc: "Creamy noodles loaded with melted cheese in every bite", type: "veg" },
      { name: "Dirty Chicken Cheesy Maggie",   price: "129", desc: "Masala noodles topped with juicy chicken, rich and filling", type: "nonveg", bestseller: true },
    ]
  },
  {
    id: 'pasta-street',
    name: 'Pasta Street',
    icon: '🍝',
    items: [
      { name: "Veg Alfredo Pasta",         price: "219", desc: "Soft pasta in a creamy white sauce with veggies, smooth and comforting", type: "veg" },
      { name: "Veg Arrabbiata Pasta",      price: "219", desc: "Pasta in a spicy tomato sauce with veggies, slightly tangy with a kick", type: "veg" },
      { name: "Veg Pink Sauce Pasta",      price: "219", desc: "Pasta in a light creamy tomato sauce with veggies, balanced and flavorful", type: "veg", bestseller: true },
      { name: "Chicken Alfredo Pasta",     price: "259", desc: "Creamy white sauce pasta with tender chicken, rich and filling", type: "nonveg" },
      { name: "Chicken Arrabbiata Pasta",  price: "259", desc: "Spicy tomato pasta with chicken, bold and slightly tangy", type: "nonveg" },
      { name: "Chicken Pink Sauce Pasta",  price: "259", desc: "Creamy tomato pasta with chicken, smooth and perfectly balanced", type: "nonveg" },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    items: [
      { name: "Choco Lava Cake",    price: "109", desc: "Warm chocolate cake with a gooey melted center", type: "veg", bestseller: true },
      { name: "Choco Chip Brownie", price: "89",  desc: "Chocolate brownie loaded with choco chips, soft and tasty", type: "veg" },
      { name: "Walnut Brownie",     price: "89",  desc: "Soft brownie with crunchy walnuts, rich and nutty", type: "veg" },
      { name: "Scoop of Ice Cream", price: "69",  desc: "Chilled, creamy ice cream — perfect to add on any dessert", type: "veg" },
    ]
  },
  {
    id: 'lime-fresh',
    name: 'Lime Fresh',
    icon: '🍋',
    items: [
      { name: "Fresh Lime Juice",         price: "29", desc: "Refreshing lime drink, light, tangy, and cooling", type: "veg" },
      { name: "Lemon Soda Sweet / Salt",  price: "59", desc: "Chilled soda with lemon — choose sweet or salted taste", type: "veg" },
      { name: "Blue Lime Juice",          price: "59", desc: "Cool blue drink with lime flavor, refreshing and slightly sweet", type: "veg" },
      { name: "Mint Lime",               price: "59", desc: "Lime drink with fresh mint, cool and refreshing", type: "veg" },
    ]
  },
  {
    id: 'fresh-mojitos',
    name: 'Fresh Mojitos',
    icon: '🍹',
    items: [
      { name: "Virgin Mojito",        price: "99",  desc: "Refreshing mix of mint, lime, and soda — cool and fizzy", type: "veg", bestseller: true },
      { name: "Classic Sea Blue",     price: "99",  desc: "Chilled blue drink with a sweet citrusy flavor, smooth and refreshing", type: "veg" },
      { name: "Piña Colada",          price: "119", desc: "Creamy blend of pineapple and coconut, sweet and tropical", type: "veg" },
      { name: "Kiss in the Afternoon",price: "129", desc: "Light fruity cooler with a soft sweet-tangy taste", type: "veg" },
      { name: "Beautiful Lips",       price: "129", desc: "A vibrant, fruity refresher bursting with berry sweetness", type: "veg" },
      { name: "Fruit Punch",          price: "119", desc: "Juicy mix of fruits in one refreshing drink", type: "veg" },
      { name: "Lychee Berry Mojito",  price: "119", desc: "Sweet lychee and berry mix with a refreshing minty touch", type: "veg" },
      { name: "Berry Blast",          price: "109", desc: "Bold berry flavors blended into a refreshing, fizzy drink", type: "veg" },
      { name: "Mango Haze",           price: "109", desc: "Tropical mango flavors in a smooth, refreshing haze", type: "veg" },
    ]
  },
  {
    id: 'whole-wheat-wraps',
    name: 'Whole Wheat Wraps',
    icon: '🌯',
    items: [
      { name: "Peppy Paneer Wrap",          price: "139", desc: "Paneer grilled with peri peri seasoning, green chutney, fresh veggies & multigrain tortilla", type: "veg" },
      { name: "Tandoori Paneer Tikka Wrap", price: "139", desc: "Grilled paneer tikka with green chutney, fresh veggies & multigrain tortilla", type: "veg" },
      { name: "Peppy Chicken Wrap",         price: "149", desc: "Chicken grilled with peri peri seasoning, green chutney, fresh veggies & multigrain tortilla", type: "nonveg" },
      { name: "Classic Chicken Tikka Wrap", price: "149", desc: "Grilled chicken tikka with green chutney, fresh veggies & multigrain tortilla", type: "nonveg", bestseller: true },
      { name: "Double Egg Veggies Wrap",    price: "99",  desc: "Freshly cooked omelette with veggies, lettuce, tomatoes, onions & capsicum", type: "egg" },
    ]
  },
  {
    id: 'whole-wheat-sandwiches',
    name: 'Whole Wheat Sandwiches',
    icon: '🥪',
    items: [
      { name: "Peppy Paneer Sandwich",          price: "139", desc: "Grilled paneer with peri peri seasoning, green chutney, fresh veggies & multigrain bread", type: "veg" },
      { name: "Classic Paneer Tikka Sandwich",  price: "149", desc: "Grilled paneer tikka with green chutney, fresh veggies & multigrain bread", type: "veg" },
      { name: "Peppy Chicken Sandwich",         price: "149", desc: "Grilled chicken with peri peri seasoning, green chutney, fresh veggies & multigrain bread", type: "nonveg" },
      { name: "Classic Chicken Tikka Sandwich", price: "149", desc: "Grilled chicken tikka with green chutney, fresh veggies & multigrain bread", type: "nonveg" },
      { name: "Peanut Butter Loaded Sandwich",  price: "89",  desc: "Creamy peanut butter spread generously between toasted bread — nutty and filling", type: "veg" },
      { name: "Nutella Loaded Sandwich",        price: "99",  desc: "Warm toasted breads filled with rich, melted chocolate — a sweet indulgence", type: "veg" },
    ]
  },
  {
    id: 'eggs-theory',
    name: 'Eggs Theory',
    icon: '🥚',
    items: [
      { name: "Boiled Eggs",              price: "39",  desc: "Simple, protein-rich boiled eggs", type: "egg" },
      { name: "Sunny Side Up",            price: "59",  desc: "Classic sunny side up eggs, perfectly cooked", type: "egg" },
      { name: "Exotic Veg Omelette",      price: "69",  desc: "Fluffy omelette packed with exotic mixed vegetables", type: "egg" },
      { name: "Scrambled Eggs",           price: "79",  desc: "Soft, fluffy scrambled eggs with a creamy texture", type: "egg" },
      { name: "Chicken Stuffed Omelette", price: "109", desc: "Rich omelette stuffed with seasoned chicken filling", type: "nonveg", bestseller: true },
    ]
  },
  {
    id: 'protein-packed-healthy-bowls',
    name: 'Protein Packed Healthy Bowls',
    icon: '🥗',
    items: [
      { name: "Eggs with Exotic Veggies",    price: "99",  desc: "Protein-rich eggs paired with exotic sautéed vegetables", type: "egg" },
      { name: "Chicken with Exotic Veggies", price: "159", desc: "Grilled chicken served with a medley of exotic vegetables", type: "nonveg" },
      { name: "Paneer with Exotic Veggies",  price: "159", desc: "Grilled paneer served with a medley of exotic vegetables", type: "veg" },
      { name: "Healthy Oats Bowl",           price: "119", desc: "Nutritious oats bowl — wholesome, filling, and energizing", type: "veg" },
    ]
  },
];

// ── Scroll Lock State ──────────────────────
let isManualScrolling = false;

// ── DOM Ready ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setHeroBackground();
  renderCategoryNav();
  renderMenu();
  initScrollEffects();
  initCategoryTracking();
  initScrollTopButton();
  initSmoothScroll();
  initParticles();
});

// ── Hero Background ───────────────────────
function setHeroBackground() {
  const hero = document.getElementById('hero');
  hero.style.backgroundImage = `url('${heroImage}')`;
}

// ── Category Navigation ───────────────────
function renderCategoryNav() {
  const container = document.getElementById('navContainer');
  container.innerHTML = menuData.map(cat =>
    `<button class="nav-pill" data-target="${cat.id}">
      <span class="nav-icon">${cat.icon}</span>
      <span class="nav-label">${cat.name}</span>
    </button>`
  ).join('');

  // Dynamically attach click handlers to avoid inline onclick scope issues
  container.querySelectorAll('.nav-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      scrollToCategory(targetId);
    });
  });
}

function scrollToCategory(id) {
  const el = document.getElementById(id);
  if (!el) return;
  
  isManualScrolling = true;

  // Highlight pill immediately
  const pills = document.querySelectorAll('.nav-pill');
  pills.forEach(p => p.classList.toggle('active', p.dataset.target === id));
  
  const activePill = document.querySelector(`.nav-pill[data-target="${id}"]`);
  if (activePill) {
    activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  const navHeight = document.getElementById('category-nav').offsetHeight;
  const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;
  
  window.scrollTo({ top: y, behavior: 'smooth' });

  // Reset lock state after transition ends
  setTimeout(() => {
    isManualScrolling = false;
  }, 800);
}

// ── Menu Rendering ────────────────────────
function renderMenu() {
  const main = document.getElementById('menu');
  main.innerHTML = menuData.map(cat => `
    <section class="menu-section" id="${cat.id}">
      <div class="section-header" style="background-image: url('${categoryImages[cat.id] || ''}')">
        <div class="section-header-overlay"></div>
        <div class="section-header-content">
          <span class="section-icon">${cat.icon}</span>
          <h2 class="section-title">${cat.name}</h2>
          <span class="section-count">${cat.items.length} items</span>
        </div>
      </div>
      <div class="menu-items">
        ${cat.items.map((item, idx) => renderMenuItem(item, idx)).join('')}
      </div>
    </section>
  `).join('');
}

function renderMenuItem(item, idx) {
  const typeClass = item.type === 'veg' ? 'veg' : item.type === 'egg' ? 'egg' : 'nonveg';
  const typeLabel = item.type === 'veg' ? 'VEG' : item.type === 'egg' ? 'EGG' : 'NON-VEG';
  const bestsellerBadge = item.bestseller ? '<span class="bestseller-badge">★ Bestseller</span>' : '';

  return `
    <div class="menu-item reveal" style="--delay: ${idx * 0.06}s">
      <div class="item-top">
        <div class="item-name-row">
          <span class="type-indicator ${typeClass}" title="${typeLabel}"></span>
          <h3 class="item-name">${item.name}</h3>
          ${bestsellerBadge}
        </div>
        <div class="item-price">₹${item.price}</div>
      </div>
      <p class="item-desc">${item.desc}</p>
    </div>
  `;
}

// ── Scroll Reveal Animations ──────────────
function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Section headers
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.section-header').forEach(el => sectionObserver.observe(el));
}

// ── Active Category Tracking ──────────────
let currentActiveId = '';

function initCategoryTracking() {
  const nav = document.getElementById('category-nav');
  const sections = document.querySelectorAll('.menu-section');
  const pills = document.querySelectorAll('.nav-pill');
  const heroEl = document.getElementById('hero');

  let scrollFrame;
  window.addEventListener('scroll', () => {
    if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    
    scrollFrame = window.requestAnimationFrame(() => {
      // Toggle sticky shadow class on scroll position
      const heroBottom = heroEl.getBoundingClientRect().bottom;
      nav.classList.toggle('stuck', heroBottom <= nav.offsetHeight);

      // Track active category section
      if (isManualScrolling) return;

      const navHeight = nav.offsetHeight;
      let activeSectionId = '';

      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        // A section is active if its top is near or past the sticky nav bottom
        if (rect.top <= navHeight + 40) {
          activeSectionId = sec.id;
        }
      });

      // Default to first section if scrolling near top
      if (!activeSectionId && sections.length > 0) {
        activeSectionId = sections[0].id;
      }

      if (activeSectionId && activeSectionId !== currentActiveId) {
        currentActiveId = activeSectionId;
        pills.forEach(pill => {
          const isActive = pill.dataset.target === activeSectionId;
          pill.classList.toggle('active', isActive);
          if (isActive) {
            // Smoothly align the active pill inside the horizontal nav scrollbar
            pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }
        });
      }
    });
  });
}

// ── Scroll-to-Top Button ──────────────────
function initScrollTopButton() {
  const btn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Smooth Scroll for Anchor Links ────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetAttr = anchor.getAttribute('href');
      if (targetAttr === '#menu') {
        const firstSection = menuData[0]?.id;
        if (firstSection) {
          scrollToCategory(firstSection);
        }
      } else {
        const targetId = targetAttr.substring(1);
        scrollToCategory(targetId);
      }
    });
  });
}

// ── Floating Particles (Steam Effect) ─────
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 10;
      this.size = Math.random() * 3 + 1;
      this.speedY = -(Math.random() * 0.8 + 0.2);
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.fadeRate = Math.random() * 0.003 + 0.001;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fadeRate;
      if (this.opacity <= 0 || this.y < -10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 169, 126, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 40; i++) {
    const p = new Particle();
    p.y = Math.random() * canvas.height;
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    animationId = requestAnimationFrame(animate);
  }
  animate();

  // Pause when hero is off-screen
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!animationId) animate();
    } else {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  });
  observer.observe(canvas.parentElement);
}
