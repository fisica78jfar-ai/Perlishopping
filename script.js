document.addEventListener("DOMContentLoaded", () => {
  // Product data
  const productGroups = [
    {
      selector: ".vs",
      products: [
        { name: "Strawberry and Champagne", price: 280, img: "img/vs strawberry and champagne.png" },
        { name: "Vanilla Lace", price: 280, img: "img/vs vanilla lace.png" },
        { name: "Coconut Passion", price: 280, img: "img/vs coconut passion.png" },
        { name: "Velvet Petals", price: 280, img: "img/vs velvet petals.png" },
        { name: "Bare Vanilla", price: 280, img: "img/vs bare vanilla.png" },
        { name: "Midnight Bloom", price: 280, img: "img/vs midnight bloom.png" },
      ]
    },
    {
      selector: ".sams",
      products: [
        { name: "Folgers", price: 1, img: "img/folgers.png" },
        { name: "Folgers Instantaneo", price: 1, img: "img/folgers_instantaneo.png" },
        { name: "Melatonin 10 mg", price: 1, img: "img/melatonin_10.png" },
        { name: "Melatonin 5 mg", price: 1, img: "img/melatonin_5.png" },
      ]
    },
    {
      selector: ".other",
      products: [
        { name: "Playeras - Aeropostale", price: 1, img: "img/other aero.png" },
        { name: "Toallas", price: 1, img: "img/other towels.png" },
        { name: "Bolsas, mochilas, etc", price: 1, img: "img/other bolsas.png" },
        { name: "Colchas, sabanas, etc", price: 1, img: "img/other blankets.png" },
        { name: "Boxers, playeras interiores,etc", price: 1, img: "img/other boxers.png" },
        { name: "Ropa de niños", price: 1, img: "img/other kids.png" },
        { name: "Pantalones, Jeans, etc", price: 1, img: "img/other pants jeans.png" },
        { name: "Perfumes", price: 1, img: "img/other perfumes.png" },
        { name: "Zapatos (hombre)", price: 1, img: "img/other shoes men.png" },
        { name: "Zapatos (mujeres)", price: 1, img: "img/other shoes women.png" },
        { name: "Calcetines, calcetas, etc", price: 1, img: "img/other socks.png" },
        { name: "Ropa de invierno", price: 1, img: "img/other sweaters.png" },
        { name: "Tennis", price: 1, img: "img/other tennis.png" },
        { name: "Cacahuates - Kars", price: 1, img: "img/other kars.png" },
        { name: "Alcohol verde", price: 1, img: "img/other alcohol.png" },
        { name: "Velas - Bath and Body Works", price: 1, img: "img/other candle.png" },
        { name: "Gel - Bath and Body Works", price: 1, img: "img/other gel.png" },
        { name: "Jabon de manos  - Bath and Body Works", price: 1, img: "img/other jabon.png" },
        { name: "Juegos de mesa", price: 1, img: "img/other games.png" },
      ]
    }
  ];

  // Create product cards
  productGroups.forEach(group => {
    const container = document.querySelector(group.selector);
    group.products.forEach(p => {
      const li = document.createElement("li");
      li.dataset.name = p.name;
      li.dataset.price = p.price;
      li.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="info">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
        </div>
      `;
      container.appendChild(li);
    });
  });

// Enlarge image on click
  // Image enlarge on click (move this INSIDE)
  document.querySelectorAll(".vs, .sams, .other").forEach(list => {
    list.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") {
        const img = e.target;
        const overlay = document.createElement("div");
        overlay.style = `
          position:fixed; top:0; left:0; width:100%; height:100%;
          background:rgba(0,0,0,0.8); display:flex;
          align-items:center; justify-content:center; z-index:9999;
        `;
        const largeImg = document.createElement("img");
        largeImg.src = img.src;
        largeImg.style.maxWidth = "90%";
        largeImg.style.maxHeight = "90%";
        largeImg.style.borderRadius = "12px";
        overlay.appendChild(largeImg);
        document.body.appendChild(overlay);
        overlay.addEventListener("click", () => overlay.remove());
      }
    });
  });
});
