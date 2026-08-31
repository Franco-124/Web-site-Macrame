const productos = [
  {
    id: 13,
    nombre: "Recordatorios",
    imagen: "images/recordatorios.jpg",
    medidas: "lo puedes personalizar a tu gusto",
    material: "Algodón de 3mm",
    color: "Color a elección",
    precio: null,
    nota: "Precio varia segun diseño, color y cantidad",
  },
  {
    id: 1,
    nombre: "Portavela o Portavaso Alma",
    imagenes: [
      "images/Portavaso1.jpg",
      "images/Portavaso2.jpg",
      "images/Portavaso3.jpg",
    ],
    material: "Piola de algodón de 3mm",
    color: "Crudo",
    medidas: "14 cm de largo x10 cm de ancho",
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
    id: 11,
    nombre: "Repisa en macramé",
    imagenes: [
      "images/repisamacrame1.jpg",
      "images/repisaenmacrameejemplouso.jpg",
    ],
    material:
      "Piola de algodón de 3mm + Palo de madera + Tabla de madera(40cm x 20cm x 2cm)",
    color: "Crudo con detalles en café",
    medidas: "45cm x40cm",
    precio: 90000,
    nota: null,
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
    id: 15,
    nombre: "Llaveros femeninos",
    imagenes: [
      "images/llaveros1.jpg",
      "images/llaveros_2.jpg",
      "images/llaveros_3.jpg",
      "images/llaveros_4.jpg",
      "images/llaveros_5.jpg",
      "images/llaveros_6.jpg",
    ],
    medidas: null,
    material: "Algodón de 3mm",
    color: "Colores variados",
    precio: 10000,
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
    nombre: "Tapiz trenzas de paz ",
    imagenes: [
      "images/trenzasdepazv2.jpg",
      "images/trenzasdepazv1.jpg",
      "images/individuales2.jpg",
      "images/individuales3.jpg",
    ],
    medidas: "28 cm x18cm aproximadamente",
    material: "Algodón de 3mm",
    color: "Crudo (próximamente más colores)",
    precio: 20000,
  },
  {
    id: 11,
    nombre: "Árbol de la vida",
    imagenes: [
      "images/arbolvida1.jpg",
      "images/arbolvida2.jpg",
      "images/arbolvida3.jpg",
    ],
    medidas: "lo puedes personalizar a tu gusto",
    material: "Algodón de 3mm",
    color: "Color a elección",
    precio: 45000,
  },
  {
    id: 12,
    nombre: "Cortinero con plumas",
    imagenes: [
      "images/cortinero1.jpg",
      "images/cortinero2.jpg",
      "images/cortinero3.jpg",
    ],
    medidas: "lo puedes personalizar a tu gusto",
    material: "Algodón de 3mm",
    color: "Color a elección",
    precio: 20000,
    nota: "Precio por unidad. El par vale $35.000",
  },
];

function crearCarrusel(imagenes, nombre, precioTexto) {
  const badge = `<div class="producto-badge">${precioTexto}</div>`;

  if (imagenes.length === 1) {
    return `
      <div class="producto-imagen-wrapper">
        <img class="producto-imagen" src="${imagenes[0]}" alt="${nombre}" loading="lazy" />
        <div class="producto-imagen-overlay"><span>Ver foto</span></div>
        ${badge}
      </div>`;
  }

  const slides = imagenes
    .map(
      (src, i) =>
        `<img class="producto-imagen carrusel-slide${i === 0 ? " activa" : ""}" src="${src}" alt="${nombre} — foto ${i + 1}" loading="lazy" data-index="${i}" />`,
    )
    .join("");

  const dots = imagenes
    .map(
      (_, i) =>
        `<button class="carrusel-dot${i === 0 ? " activo" : ""}" aria-label="Foto ${i + 1}" data-index="${i}"></button>`,
    )
    .join("");

  return `
    <div class="producto-imagen-wrapper carrusel">
      ${slides}
      <button class="carrusel-btn carrusel-prev" aria-label="Foto anterior">&#8249;</button>
      <button class="carrusel-btn carrusel-next" aria-label="Foto siguiente">&#8250;</button>
      <div class="carrusel-dots">${dots}</div>
      <div class="producto-imagen-overlay"><span>Ver foto</span></div>
      ${badge}
    </div>`;
}

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

  const imagenes = producto.imagenes ?? [producto.imagen];

  tarjeta.innerHTML = `
    ${crearCarrusel(imagenes, producto.nombre, precioTexto)}
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

  // Lógica del carrusel
  const wrapper = tarjeta.querySelector(".carrusel");
  if (wrapper) {
    const slides = wrapper.querySelectorAll(".carrusel-slide");
    const dots = wrapper.querySelectorAll(".carrusel-dot");
    let current = 0;

    const ir = (index) => {
      slides[current].classList.remove("activa");
      dots[current].classList.remove("activo");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("activa");
      dots[current].classList.add("activo");
    };

    wrapper.querySelector(".carrusel-prev").addEventListener("click", (e) => {
      e.stopPropagation();
      ir(current - 1);
    });
    wrapper.querySelector(".carrusel-next").addEventListener("click", (e) => {
      e.stopPropagation();
      ir(current + 1);
    });
    dots.forEach((dot) =>
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        ir(Number(dot.dataset.index));
      }),
    );

    // Swipe táctil
    let touchStartX = 0;
    wrapper.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
      },
      { passive: true },
    );
    wrapper.addEventListener(
      "touchend",
      (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) ir(diff > 0 ? current + 1 : current - 1);
      },
      { passive: true },
    );
  }

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
