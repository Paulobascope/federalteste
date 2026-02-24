// ===== DATA =====
const WHATSAPP_NUMBER = '556581135744';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de fazer um pedido na Federal Burger! 🍔';

function getWhatsappLink(item) {
  const msg = item ? 'Olá! Gostaria de pedir: ' + item : WHATSAPP_MESSAGE;
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
}

const burgers = [
  { name: "FEDERAL BURGER", description: "Pão, hambúrguer, mussarela, tomate e alface.", price: 15, image: "/assets/federal.jpg" },
  { name: "FEDERAL BACON", description: "Pão, hambúrguer, mussarela, bacon, tomate e alface.", price: 18, image: "/assets/federal.jpg" },
  { name: "FEDERAL CUPIM", description: "Pão, hambúrguer, mussarela, cupim bovino, tomate e alface.", price: 21, image: "/assets/federal.jpg" },
  { name: "FEDERAL FRANGO/CATUPIRY", description: "Pão, hambúrguer, mussarela, frango com catupiry, tomate e alface.", price: 18, image: "/assets/federal.jpg" },
  { name: "FEDERAL TWO EGGS", description: "Pão, hambúrguer, mussarela, dois ovos, alface e tomate.", price: 17, image: "/assets/federal.jpg" },
  { name: "FEDERAL 4 QUEIJOS", description: "Pão, hambúrguer, mussarela, cheddar, parmesão, catupiry, tomate e alface.", price: 19, image: "/assets/federal.jpg" },
  { name: "FEDERAL CALABRESA", description: "Pão, hambúrguer, mussarela, calabresa, tomate e alface.", price: 17, image: "/assets/federal.jpg" },
  { name: "FEDERAL DORITOS", description: "Pão, hambúrguer, mussarela, cheddar, creme de pimenta, doritos, catupiry, tomate e alface.", price: 21, image: "/assets/federal.jpg" },
  { name: "FEDERAL GRAN DUOS", description: "Pão, 2 hambúrguers, 2 mussarelas, tomate, alface, 2 sabores para escolher.", price: 25, image: "/assets/federal.jpg" },
  { name: "FEDERAL FILÉ", description: "Pão, hambúrguer, mussarela, filé mignon, tomate e alface.", price: 26, image: "/assets/federal.jpg" },
  { name: "FEDERAL PICANHA", description: "Pão, mussarela, hambúrguer, picanha, alface e tomate.", price: 27, image: "/assets/federal.jpg" },
  { name: "FEDERAL STROGONOFF", description: "Strogonoff de frango ou filé, pão, hambúrguer, mussarela, batata palha, tomate e alface.", price: 28, image: "/assets/federal.jpg" },
];

const addons = [
  { name: "Cebola Caramelizada", price: 8 },
  { name: "Cebola Roxa", price: 2 },
  { name: "Picanha", price: 18 },
  { name: "Filé", price: 16 },
  { name: "Cupim", price: 15 },
  { name: "Banana / Abacaxi", price: 5 },
  { name: "Cheddar", price: 3 },
  { name: "Catupiry", price: 5 },
  { name: "Batata Palha", price: 3 },
  { name: "Ovo", price: 2 },
  { name: "Mussarela", price: 2 },
  { name: "Calabresa Acebolada", price: 12 },
  { name: "Hambúrguer sem queijo", price: 5 },
  { name: "Salada", price: 1 },
  { name: "Porção de Batata Frita", price: 10 },
];

const drinks = [
  { name: "Refrigerante 2L", price: 10 },
  { name: "Refrigerante 1L", price: 10 },
  { name: "Refrigerante Lata", price: 6 },
  { name: "Água Mineral 500ml", price: 3 },
  { name: "Sucos", price: 10 },
];

function formatPrice(p) { return 'R$ ' + p.toFixed(2).replace('.', ','); }

// ===== RENDER =====
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp links
var defaultLink = getWhatsappLink();
document.getElementById('whatsapp-float').href = defaultLink;
document.getElementById('contato-whatsapp').href = defaultLink;

// Burgers
var burgersGrid = document.getElementById('burgers-grid');
burgers.forEach(function(b) {
  burgersGrid.innerHTML += 
    '<div class="metal-surface rounded-lg overflow-hidden card-hover flex flex-col">' +
      '<div class="relative h-48 overflow-hidden cursor-pointer" onclick="openLightbox(\'' + b.image + '\', \'' + b.name + '\')">' +
        '<img src="' + b.image + '" alt="' + b.name + '" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />' +
        '<div class="absolute top-3 right-3 bg-primary text-primary-foreground font-bold px-3 py-1 rounded-md text-sm">' + formatPrice(b.price) + '</div>' +
        '<div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg></div>' +
      '</div>' +
      '<div class="p-4 flex flex-col flex-1 gap-2">' +
        '<h3 class="font-display text-xl text-primary tracking-wider">' + b.name + '</h3>' +
        '<p class="text-muted-foreground text-sm flex-1">' + b.description + '</p>' +
        '<a href="' + getWhatsappLink(b.name) + '" target="_blank" rel="noopener noreferrer" class="mt-2 w-full text-center bg-green-600 hover:bg-green-700 text-foreground font-semibold py-2 rounded-md transition-colors text-sm block">📱 Pedir no WhatsApp</a>' +
      '</div>' +
    '</div>';
});

// Addons
var addonsGrid = document.getElementById('addons-grid');
addons.forEach(function(item, i) {
  addonsGrid.innerHTML += 
    '<div class="flex items-center justify-between px-5 py-3 border-b border-border ' + (i % 2 !== 0 ? 'bg-white/5' : '') + '">' +
      '<span class="text-foreground font-medium uppercase text-sm tracking-wide">' + item.name + '</span>' +
      '<span class="text-primary font-bold text-sm whitespace-nowrap ml-4">' + formatPrice(item.price) + '</span>' +
    '</div>';
});

// Drinks
var drinksList = document.getElementById('drinks-list');
drinks.forEach(function(item, i) {
  drinksList.innerHTML += 
    '<div class="flex items-center justify-between px-5 py-4 border-b border-border ' + (i % 2 !== 0 ? 'bg-white/5' : '') + '">' +
      '<span class="text-foreground font-medium uppercase text-sm tracking-wide">' + item.name + '</span>' +
      '<span class="text-primary font-bold whitespace-nowrap ml-4">' + formatPrice(item.price) + '</span>' +
    '</div>';
});

// ===== SIDEBAR =====
function openSidebar() { document.getElementById('sidebar-overlay').classList.add('open'); }
function closeSidebar() { document.getElementById('sidebar-overlay').classList.remove('open'); }

// ===== INTERSECTION OBSERVER (fade-in) =====
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-section').forEach(function(el) { observer.observe(el); });

// ===== LIGHTBOX =====
function openLightbox(src, alt) {
  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  var caption = document.getElementById('lightbox-caption');
  img.src = src;
  img.alt = alt;
  caption.textContent = alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
