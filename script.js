document.addEventListener("DOMContentLoaded", () => {
  // Product data
  const productGroups = [
    {
      selector: ".vs",
      products: [
        { name: "Bare Vanilla Shimmer", price: 0, img: "img/VS - Bare Vanilla Shimmer.png" },
        { name: "Bare Vanilla Vacation", price: 0, img: "img/VS - Bare Vanilla Vacation.png" },
        { name: "Bare Vanilla", price: 0, img: "img/VS - Bare Vanilla.png" },
        { name: "Cake and Cream", price: 0, img: "img/VS - Cake and Cream.png" },
        { name: "Coconut Passion Cream", price: 0, img: "img/VS - Coconut Passion Cream.png" },
        { name: "Coconut Passion", price: 0, img: "img/VS - Coconut Passion.png" },
        { name: "Love Spell Shimmer", price: 0, img: "img/VS - Love Spell Shimmer.png" },
        { name: "Midnight Bloom", price: 0, img: "img/VS - Midnight Bloom.png" },
        { name: "Pure Seduction Vacation", price: 0, img: "img/VS - Pure Seduction Vacation.png" },
        { name: "Vanilla Woods", price: 0, img: "img/VS - Vanilla Woods.png" },
      ]
    },


    {
      selector: ".pink",
      products: [
        { name: "Coconut", price: 0, img: "img/PINK - Coconut.png" },
        { name: "Pine Apple", price: 0, img: "img/PINK - Pine Apple.png" },
        { name: "Pink Apple", price: 0, img: "img/PINK - Pink Apple.png" },
        { name: "Super Berry", price: 0, img: "img/PINK - Super Berry.png" },
        { name: "Vanilla", price: 0, img: "img/PINK - Vanilla.png" },
        { name: "Watermelon", price: 0, img: "img/PINK - Watermelon.png" },
      ]
    },
   // {
     // selector: ".sams",
      //products: [
    //    { name: "Melatonina 10mg(1)", price: 460, img: "img/melatonin_10.png" },
       // { name: "Folgers", price: 460, img: "img/folgers.png" },
      //  { name: "Folgers Instantaneo", price: 340, img: "img/folgers_instantaneo.png" },
     // ]
    //},

    {
      selector: ".disponible",
      products: [
        { name: "Cafetera Hamilton Beach", price: 0, img: "img/available - coffee maker.png" },
        { name: "Plancha Black and Decker", price: 0, img: "img/available - plancha b&d.png" },
        { name: "Juego: Sequence", price: 0, img: "img/available - sequence game.png" },
        { name: "Juego: Sorry", price: 0, img: "img/available - sorry giant.png" },
        { name: "Alcohol verde", price: 0, img: "img/available - alcohol.png" },
      ]
    },

    {
      selector: ".other",
      products: [
        { name: "Folgers", price: 1, img: "img/folgers.png" },
        { name: "Folgers Instantaneo", price: 1, img: "img/folgers_instantaneo.png" },
        { name: "Melatonina 10mg", price: 1, img: "img/melatonin_10.png" },
        { name: "Melatonina 5mg", price: 1, img: "img/melatonin_5.png" },
        // { name: "Lociones de Victoria's Secret", price: 1, img: "img/other VS.png" },
        { name: "Desodorante Crumbl", price: 1, img: "img/other dove crumb.png" },
        { name: "Playeras - Aeropostale", price: 1, img: "img/other aero.png" },
        { name: "Toallas", price: 1, img: "img/other towels.png" },
        { name: "Perfumitos hombre", price: 1, img: "img/other perfumitos men.png" },
        { name: "Perfumito mujer", price: 1, img: "img/other perfumitos women.png" },
        { name: "'Calcetines, calzetas, etc", price: 1, img: "img/other socks.png" },
        { name: "Gorro para frio 'Canada'", price: 1, img: "img/other gorros.png"},
        { name: "Bolsas, mochilas, etc", price: 1, img: "img/other bolsas.png" },
        { name: "Colchas, sabanas, etc", price: 1, img: "img/other blankets.png" },
        { name: "Boxers, playeras interiores,etc", price: 1, img: "img/other boxers.png" },
        { name: "Ropa de niños", price: 1, img: "img/other kids.png" },
        { name: "Pantalones, Jeans, etc", price: 1, img: "img/other pants jeans.png" },
        { name: "Perfumes", price: 1, img: "img/other perfumes.png" },
        
        { name: "Zapatos (hombre)", price: 1, img: "img/other shoes men.png" },
        { name: "Zapatos (mujeres)", price: 1, img: "img/other shoes women.png" },
        
        { name: "Ropa de invierno", price: 1, img: "img/other sweaters.png" },
        { name: "Tennis", price: 1, img: "img/other tennis.png" },
        { name: "Snacks", price: 1, img: "img/other kars.png" },
        { name: "Velas - Bath and Body Works", price: 1, img: "img/other candle.png" },
        { name: "Gel - Bath and Body Works", price: 1, img: "img/other gel.png" },
        { name: "Jabon de manos  - Bath and Body Works", price: 1, img: "img/other jabon.png" },
        //{ name: "Juegos de mesa", price: 1, img: "img/other games.png" },
      ]
    }
  ];

  // Create product cards
  productGroups.forEach(group => {
    const container = document.querySelector(group.selector);
    group.products.forEach(p => {
      const li = document.createElement("li");
      li.dataset.name = p.name;
      if (p.price === 1) {
        p.price = "---";
      } else {
        li.dataset.price = p.price;
      }
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
  document.querySelectorAll(".vs, .sams, .pink, .other, .disponible").forEach(list => {
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
