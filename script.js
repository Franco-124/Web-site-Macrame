const productos = [
  {
    id: 1,
    nombre: "Portavela o Portavaso en Macramé",
    imagen: "images/Portavela o portavaso en macramé.jpg",
    material: "Piola de algodón de 3mm",
    color: "Crudo",
    precio: 12000,
    nota: null,
  },
  {
    id: 2,
    nombre: "Portamacetas Alma",
    imagen: "images/Portamacetas Alma.jpg",
    material: "Piola de algodón de 3mm",
    medidas: "70cm de largo",
    precio: 15000,
    nota: "El precio puede variar si deseas más largo o con accesorios en madera",
  },
  {
    id: 3,
    nombre: "Portamacetas Aura",
    imagen: "images/Portamacetas aura.jpg",
    material: "Piola de algodón de 3mm",
    medidas: "70cm de largo",
    precio: 15000,
    nota: null,
  },
  {
    id: 4,
    nombre: "Porta Maceta Hilos de Calma",
    imagen: "images/Porta maceta hilos de calma.jpg",
    material: "Piola de algodón de 3mm",
    medidas: "100cm de largo",
    precio: 18000,
    nota: null,
  },
  {
    id: 5,
    nombre: "Portamacetas Nudos con Alma",
    imagen: "images/Portamacetas nudos con alma.jpg",
    material: "Piola de algodón de 3mm + Aro en madera + Pepas en madera",
    color: "Crudo con detalles en café",
    medidas: "100cm de largo",
    precio: 25000,
    nota: null,
  },
  {
    id: 6,
    nombre: "Portamacetas Esencia del Alma",
    imagen: "images/Portamacetas esencia del alma.jpg",
    material: "Piola de algodón de 3mm + Aros en madera",
    color: "Crudo",
    medidas: "120cm de largo",
    precio: 18000,
    nota: null,
  },
  {
    id: 7,
    nombre: "Colección de 2 Puestos",
    imagen: "images/Colección de 2 puestos.jpg",
    material: "Piola de algodón de 3mm",
    medidas: "150cm de largo",
    precio: 25000,
    nota: null,
  },
  {
    id: 8,
    nombre: "Portamacetas Alma Natural",
    imagen: "images/Portamacetas alma natural.jpg",
    material: "Algodón de 3mm",
    medidas: "70cm",
    precio: 20000,
    nota: null,
  },
  {
    id: 10,
    nombre: "Portavaso en Corazón",
    imagen: "images/portavaso en corazon.jpg",
    material: "Piola de algodón de 3mm",
    color: "Crudo",
    precio: 12000,
    nota: null,
  },
  {
    id: 9,
    nombre: "Llaveros Aruna",
    imagen: "images/Llaveros Aruna.jpg",
    material: "Algodón de 3mm",
    color: "Crudo (próximamente más colores)",
    precio: 12000,
    nota: "Solo disponible en color blanco por el momento. Próximamente variedad de colores.",
  },
];

function crearTarjetaProducto(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto-card reveal";

  const mensaje = encodeURIComponent(
    `Hola! Me interesa el producto: ${producto.nombre}`,
  );
  const url = `https://wa.me/573126068990?text=${mensaje}`;
  const precioTexto =
    producto.precio === null
      ? "Consultar"
      : `$${producto.precio.toLocaleString("es-CO")}`;

  tarjeta.innerHTML = `
    <div class="producto-imagen-wrapper">
      <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
      <div class="producto-imagen-overlay"><span>Ver foto</span></div>
      <div class="producto-badge">${precioTexto}</div>
    </div>
    <div class="producto-contenido">
      <h3 class="producto-nombre">${producto.nombre}</h3>
      <div class="producto-detalles">
        <div class="producto-detalle">
          <i data-lucide="tag"></i>
          <span>${producto.material}</span>
        </div>
        ${
          producto.medidas
            ? `
        <div class="producto-detalle">
          <i data-lucide="ruler"></i>
          <span>${producto.medidas}</span>
        </div>`
            : ""
        }
        ${
          producto.color
            ? `
        <div class="producto-detalle">
          <i data-lucide="palette"></i>
          <span>${producto.color}</span>
        </div>`
            : ""
        }
      </div>
      ${producto.nota ? `<p class="producto-nota">${producto.nota}</p>` : ""}
      <a class="producto-cta" href="${url}" target="_blank" rel="noopener">Pedir por WhatsApp</a>
    </div>
  `;

  return tarjeta;
}

function renderizarCatalogo(listado) {
  const grid = document.getElementById("grid-productos");
  grid.innerHTML = "";
  listado.forEach((producto, index) => {
    const tarjeta = crearTarjetaProducto(producto);
    tarjeta.style.transitionDelay = `${(index % 3) * 0.1}s`;
    grid.appendChild(tarjeta);
  });
}

function configurarLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  document.addEventListener("click", (event) => {
    const imagen = event.target.closest(".producto-imagen");
    if (imagen) {
      lightboxImage.src = imagen.src;
      lightboxImage.alt = imagen.alt;
      lightbox.classList.add("activo");
      lightbox.setAttribute("aria-hidden", "false");
    }
  });

  const cerrar = () => {
    lightbox.classList.remove("activo");
    lightbox.setAttribute("aria-hidden", "true");
  };

  closeBtn.addEventListener("click", cerrar);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) cerrar();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") cerrar();
  });
}

function configurarScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo(productos);
  configurarLightbox();
  lucide.createIcons();
  configurarScrollReveal();
});
