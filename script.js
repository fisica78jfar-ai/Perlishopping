// This will add dynamically the products to the respective class, adding a "name" and "price" data, to later use it in the button
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Strawberry and Champagne", price:280, img: "img/strawberry and champagne.png" },
    { name: "Vanilla Lace", price: 280, img: "img/vanilla lace.png" },
    { name: "Coconut Passion", price: 280, img: "img/coconut passion.png" },
    { name: "Velvet Petals", price: 280, img: "img/velvet petals.png" },
    { name: "Bare Vanilla", price: 280, img: "img/bare vanilla.png" },
    { name: "Midnight Bloom", price: 280, img: "img/midnight bloom.png" },
  ];

   // it creates the products inside the class .vs, applying all CSS
  const container = document.querySelector(".vs"); 

  products.forEach(p => {
    const li = document.createElement("li");
    li.dataset.name = p.name;
    li.dataset.price = p.price;

    li.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button>Add to Cart</button>
    `;

    container.appendChild(li);


    
  });
});

//This is the same code, for products from Sams
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Folgers", price: 1, img: "img/folgers.png" },
    { name: "Folgers Instantaneo", price: 1, img: "img/folgers_instantaneo.png" },
    { name: "Melatonin 10 mg", price: 1, img: "img/melatonin_10.png" },
    { name: "Melatonin 5 mg", price: 1, img: "img/melatonin_5.png" },
  ];


  const container = document.querySelector(".sams"); 

  products.forEach(p => {
    const li = document.createElement("li");
    li.dataset.name = p.name;
    li.dataset.price = p.price;

    li.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button>Add to Cart</button>
    `;

    container.appendChild(li);
  });
});


//click to enlarge, it creates a div with its properties, then it creates an image with the properties fro mthe original one
// run after products are loaded  ,.. this is event delegation
document.querySelectorAll(".vs, .sams").forEach(list => {
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
