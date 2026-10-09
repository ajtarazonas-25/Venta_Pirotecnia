/* ====== CONFIGURACIÓN ====== */
// Cambia por tu número con indicativo de país, sin + ni espacios (Colombia = 57)
const WHATSAPP = "573000000000";
const NEGOCIO = "Chispa Real";

/* ====== DATOS ====== */
// Cada referencia agrupa sus productos. destacado:true los muestra en la portada.
const CATEGORIAS = [
  { id: "volcanes", nombre: "Volcanes", icono: "🌋", g: ["#ff6a1a", "#7a0f1e"],
    desc: "Fuentes de chispas que se elevan desde el suelo. Ideales para fiestas y fotos.",
    productos: [
      { id: "v1", nombre: "Volcán Mini", precio: 3000, desc: "30 s de chispa dorada.", img: "assets/volcancito.jfif" },
      { id: "v2", nombre: "Volcán Importado '7'", precio: 20000, desc: "60 s, hasta 3 m de altura, con cracker al final", img: "assets/volcan.jpeg", destacado: true, },
      { id: "v3", nombre: "Volcán Mini Pajaro loco", precio: 5000, desc: "Cambia de color en cada fase.", img: "assets/pajaroloco.jfif" },
      { id: "v4", nombre: "Volcán Gigante", precio: 35000, desc: "90 s de efecto continuo." },
    ]},
  { id: "tortas", nombre: "Tortas", icono: "🎆", g: ["#2fa8ff", "#3b1a78"],
    desc: "Disparos múltiples en secuencia con efectos de gran altura.",
    productos: [
      
      { id: "b2", nombre: "Torta 16 tiros 0.6", precio: 40000, desc: "Show de más de un minuto." },
      { id: "b1", nombre: "Torta 16 tiros 0.8", precio: 50000, desc: "Estallidos de colores con crisantemo y cracker.", img: "assets/torta 16.jfif", destacado: true },
      { id: "b3", nombre: "Torta 19 tiros Rey Escorpión", precio: 60000, desc: "Show de más de un minuto.", img: "assets/rey_escorpion.jfif" },
      { id: "b4", nombre: "Torta 19 tiros Anubis", precio: 60000, desc: "Show de más de un minuto.", img: "assets/anubis.jfif" },
      { id: "b5", nombre: "Torta 25 tiros Sinfonia", precio: 70000, desc: "Peonías y cometas.", img: "assets/sinfonia 25.jfif" },
      { id: "b6", nombre: "Torta 25 tiros Calgari", precio: 70000, desc: "Efecto cascada plateada.", img: "assets/calgari.jfif" },
      { id: "b7", nombre: "Torta 36 tiros Hercules", precio: 90000, desc: "Show de más de un minuto.", img: "assets/torta 36.jfif" },
      { id: "b8", nombre: "Torta 100 tiros Primavera", precio: 210000, desc: "Show de más de un minuto.", img: "assets/torta 100.jfif" },
     
    ]},
  { id: "voladores", nombre: "Voladores", icono: "🚀", g: ["#e5173f", "#4a0a2e"],
    desc: "Se elevan con silbido y terminan en estallido de luz.",
    productos: [
      { id: "c1", nombre: "UFOS Voladores x 12", precio: 42000, desc: "Un espectáculo giratorio que se eleva como un verdadero ovni.", img: "assets/UFO.jfif", destacado: true },
      { id: "c2", nombre: "Sextos x docena", precio: 26000, desc: "Silbido y luz roja.", img: "assets/sextos.jfif" },
      { id: "c3", nombre: "Misil x 25", precio: 10000, desc: "Silbido y luz roja.", img: "assets/misil 25.jfif" },
      { id: "c4", nombre: "Bazuca 300 tiros", precio: 150000, desc: "Silbido y luz roja.", img: "assets/bazuca.jfif" },
      { id: "c5", nombre: "Handleles", precio: 5000, desc: "Silbido y luz roja.", img: "assets/handleles.jfif" },
      { id: "c6", nombre: "Cohetico Lunar", precio: 45000, desc: "Sube, silva y estalla! El cohete que llena de sonido y emoción cualquier celebración.", img: "assets/cohetico.jfif", destacado: true },
    ]},
  { id: "velas", nombre: "Velas crackers", icono: "✨", g: ["#ffc83d", "#6b2a00"],
    desc: "Para llevar en la mano de forma segura con guantes. Perfectas para bodas y cumpleaños.",
    productos: [
      { id: "g1", nombre: "Tubo cracker x 10 tiros", precio: 5000, desc: "Chispa blanca, 40 s.", img: "assets/tubo 10.jfif" },
      { id: "g2", nombre: "Tubo cracker x 15 tiros", precio: 7000, desc: "Rojo, verde y azul.", img: "assets/tubox15.jfif" },
      { id: "g3", nombre: "Tubo cracker x 20 tiros", precio: 9000, desc: "Rojo, verde y azul.", img: "assets/tubo x 20.jfif" },
      { id: "g4", nombre: "Tubo cracker x 25 tiros", precio: 12000, desc: "Rojo, verde y azul.", img: "assets/tubo x 25.jfif" },
      { id: "g5", nombre: "Tubo cracker x 30 tiros", precio: 15000, desc: "Rojo, verde y azul.", img: "assets/tubox30.jfif" },
    ]},
  { id: "polvora", nombre: "Polvora Negra", icono: "🎇", g: ["#a23bff", "#16083a"],
    desc: "Efectos giratorios y fuentes de luz para el piso.",
    productos: [
      { id: "f1", nombre: "Triángulo Grande", precio: 700, desc: "Gira con chispas de colores." },
      { id: "f2", nombre: "Triángulo Mediano", precio: 500, desc: "Chorro plateado de 2 m.", img: "assets/triangulo m.jfif" },
      { id: "f3", nombre: "Triángulo Pequeño", precio: 300, desc: "5 colores en secuencia.", img: "assets/triangulo p.jfif" },
      { id: "f4", nombre: "Tumbarranchos", precio: 400, desc: "5 colores en secuencia.", img: "assets/tumbarranchos.jfif" },
      { id: "f5", nombre: "Tumbarranchitos", precio: 200, desc: "5 colores en secuencia.", img: "assets/tumbarranchitos.jfif" },
      { id: "f6", nombre: "Matasuegras", precio: 5000, desc: "5 colores en secuencia.", img: "assets/matasuegra.jfif" },
    ]},
  { id: "jugueteria", nombre: "Jugueteria", icono: "🎁", g: ["#ff6a1a", "#a23bff"],
    desc: "Combos listos para celebrar, con ahorro frente a la compra suelta.",
    productos: [
      
      { id: "k1", nombre: "Super Barril cracker", precio: 6000, desc: "Baterías y cohetes para 15 min.", img: "assets/barril.jfif" },
      { id: "k2", nombre: "Huevitos de Dinosauro", precio: 300, desc: "Show completo con 3 baterías.", img: "assets/huevitos.jfif" },
      { id: "k3", nombre: "Martinicas x 150", precio: 13000, desc: "Show completo con 3 baterías.", img: "assets/martinicas.jfif" },
      { id: "k4", nombre: "Mini fo x 10", precio: 1200, desc: "Show completo con 3 baterías.", img: "assets/mini fo.jfif" },
      { id: "k5", nombre: "Minitrueno x 100", precio: 7000, desc: "Show completo con 3 baterías.", img: "assets/minitrueno.jfif" },
      { id: "k6", nombre: "Cebollitas x 50", precio: 3000, desc: "Show completo con 3 baterías.", img: "assets/palomitas.jfif" },
      { id: "k7", nombre: "Rosita China", precio: 1200, desc: "Show completo con 3 baterías.", img: "assets/rosita.jfif" },
      { id: "k8", nombre: "tote 1 golpe x 40", precio: 4500, desc: "Show completo con 3 baterías.", img: "assets/tote 1.jfif" },
      { id: "k9", nombre: "tote 2 golpe x 20", precio: 4000, desc: "Show completo con 3 baterías.", img: "assets/tote 2.jfif" },
      { id: "k10", nombre: "tote 3 golpe x 20", precio: 5000, desc: "Show completo con 3 baterías.", img: "assets/tote 3.jfif" },
      { id: "k11", nombre: "tote 4 golpe x 6", precio: 3000, desc: "Show completo con 3 baterías.", img: "assets/4 golpe.jfif" },
      { id: "k12", nombre: "Bola Packman", precio: 4000, desc: "Show completo con 3 baterías.", img: "assets/packman.jfif" },
      { id: "k13", nombre: "Chispitas Mariposas x 12", precio: 25000, desc: "Perfectas para iluminar momentos inolvidables en tus fiestas.", img: "assets/chispitas.jfif", destacado: true },
    ]},
];

/* ====== UTILIDADES ====== */
const $ = (s) => document.querySelector(s);
const fmt = (n) => "$" + n.toLocaleString("es-CO");
const todos = CATEGORIAS.flatMap((c) => c.productos.map((p) => ({ ...p, cat: c })));
const buscar = (id) => todos.find((p) => p.id === id);

/* ====== TARJETAS ====== */
function cardProducto(p) {
  const [g1, g2] = p.cat.g;
  return `<article class="card">
   <div class="thumb" style="--g1:${g1};--g2:${g2}">${p.img ? `<img src="${p.img}" alt="${p.nombre}" loading="lazy">` : p.cat.icono}${p.destacado ? '<span class="badge">Destacado</span>' : ""}</div>
    <div class="card-body">
      <h3>${p.nombre}</h3><p>${p.desc}</p>
      <div class="card-actions"><span class="price">${fmt(p.precio)}</span>
      <button class="add" data-add="${p.id}">Agregar</button></div>
    </div></article>`;
}

function renderHome() {
  $("#featuredGrid").innerHTML = todos.filter((p) => p.destacado).map(cardProducto).join("");
  $("#catGrid").innerHTML = CATEGORIAS.map((c) => `
    <article class="card cat-card" data-cat="${c.id}" tabindex="0" role="button" aria-label="Ver ${c.nombre}">
      <div class="thumb" style="--g1:${c.g[0]};--g2:${c.g[1]}">${c.icono}</div>
      <div class="card-body"><h3>${c.nombre}</h3>
      <p>${c.desc}</p><span class="count">${c.productos.length} productos</span></div>
    </article>`).join("");
}

function renderCategoria(id) {
  const c = CATEGORIAS.find((x) => x.id === id);
  if (!c) return location.hash = "#inicio";
  $("#catTitle").textContent = c.nombre;
  $("#catDesc").textContent = c.desc;
  $("#catProducts").innerHTML = c.productos.map((p) => cardProducto({ ...p, cat: c })).join("");
}

/* ====== NAVEGACIÓN ENTRE VISTAS ====== */
function router() {
  const h = location.hash;
  const esCat = h.startsWith("#ref-");
  $("#homeView").hidden = esCat;
  $("#catView").hidden = !esCat;
  if (esCat) { renderCategoria(h.slice(5)); window.scrollTo(0, 0); }
  else if (h) setTimeout(() => $(h)?.scrollIntoView(), 0);
  $("#menu").classList.remove("open");
}
window.addEventListener("hashchange", router);

/* ====== CARRITO ====== */
let carrito = {};
try { carrito = JSON.parse(localStorage.getItem("carrito")) || {}; } catch (e) {}

function guardar() { try { localStorage.setItem("carrito", JSON.stringify(carrito)); } catch (e) {} }

function renderCarrito() {
  const ids = Object.keys(carrito).filter((id) => buscar(id));
  let total = 0, cantidad = 0;
  $("#cartItems").innerHTML = ids.length ? ids.map((id) => {
    const p = buscar(id), q = carrito[id];
    total += p.precio * q; cantidad += q;
    return `<div class="item"><div><b>${p.nombre}</b><br><small>${fmt(p.precio)} c/u</small></div>
      <button class="del" data-del="${id}" aria-label="Quitar">🗑</button>
      <div class="qty"><button data-menos="${id}">−</button><span>${q}</span><button data-mas="${id}">+</button></div>
      <span class="sub-t">${fmt(p.precio * q)}</span></div>`;
  }).join("") : '<p class="empty">Tu carrito está vacío. Agrega productos para empezar.</p>';
  $("#cartTotal").textContent = fmt(total);
  $("#cartCount").textContent = cantidad;
  guardar();
}

function cambiar(id, delta) {
  carrito[id] = (carrito[id] || 0) + delta;
  if (carrito[id] <= 0) delete carrito[id];
  renderCarrito();
}

function abrirCarrito(abrir) {
  $("#cart").classList.toggle("on", abrir);
  $("#overlay").classList.toggle("on", abrir);
}

function aviso(txt) {
  const t = $("#toast");
  t.textContent = txt; t.classList.add("on");
  setTimeout(() => t.classList.remove("on"), 1600);
}

/* ====== EVENTOS ====== */
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-add],[data-cat],[data-mas],[data-menos],[data-del]");
  if (!b) return;
  const d = b.dataset;
  if (d.add) { cambiar(d.add, 1); aviso("Agregado al carrito"); }
  else if (d.cat) location.hash = "#ref-" + d.cat;
  else if (d.mas) cambiar(d.mas, 1);
  else if (d.menos) cambiar(d.menos, -1);
  else if (d.del) { delete carrito[d.del]; renderCarrito(); }
});

document.addEventListener("keydown", (e) => {
  const c = e.target.closest?.(".cat-card");
  if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); location.hash = "#ref-" + c.dataset.cat; }
});

$("#openCart").onclick = () => abrirCarrito(true);
$("#closeCart").onclick = $("#overlay").onclick = () => abrirCarrito(false);
$("#burger").onclick = () => $("#menu").classList.toggle("open");
$("#clearCart").onclick = () => { carrito = {}; renderCarrito(); };

$("#checkout").onclick = () => {
  const ids = Object.keys(carrito).filter((id) => buscar(id));
  if (!ids.length) return aviso("Tu carrito está vacío");
  let total = 0;
  const lineas = ids.map((id) => {
    const p = buscar(id), q = carrito[id];
    total += p.precio * q;
    return `• ${q} x ${p.nombre} = ${fmt(p.precio * q)}`;
  });
  const msg = `Hola ${NEGOCIO}, quiero hacer este pedido:\n${lineas.join("\n")}\n\nTotal: ${fmt(total)}\nSoy mayor de 18 años.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
};

/* ====== INICIO ====== */
const hola = encodeURIComponent(`Hola ${NEGOCIO}, quiero más información sobre sus productos.`);
$("#waFloat").href = $("#waContact").href = `https://wa.me/${WHATSAPP}?text=${hola}`;
renderHome();
renderCarrito();
router();
