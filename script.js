
      const cart = []; // will store items added to cart

// This will add dynamically the products to the respective class, adding a "name" and "price" data, to later use it in the button
document.addEventListener("DOMContentLoaded", () => {




    // All product data, grouped by container selector
  const productGroups = [
    {
      selector: ".vs",
      products: [
        { name: "Strawberry and Champagne", price: 280, img: "img/strawberry and champagne.png" },
        { name: "Vanilla Lace", price: 280, img: "img/vanilla lace.png" },
        { name: "Coconut Passion", price: 280, img: "img/coconut passion.png" },
        { name: "Velvet Petals", price: 280, img: "img/velvet petals.png" },
        { name: "Bare Vanilla", price: 280, img: "img/bare vanilla.png" },
        { name: "Midnight Bloom", price: 280, img: "img/midnight bloom.png" },
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
    }
  ];

  // Function to create product cards dynamically
  productGroups.forEach(group => {
    const container = document.querySelector(group.selector);
    group.products.forEach(p => {
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

});


//click to enlarge, it creates a div with its properties, then it creates an image with the properties from the original one
// run after products are loaded  ,.. this is event delegation
document.querySelectorAll(".vs, .sams").forEach(list => {
  list.addEventListener("click", (e) => {

     // 1️⃣ Enlarge image
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


    // Add click listener to buttons using SAME PRIOR event delegation
    // 2️⃣ Add to cart
    if (e.target.tagName === "BUTTON") {
      const li = e.target.closest("li"); // get the parent <li> of the button
      const item = {
        name: li.dataset.name,
        price: parseFloat(li.dataset.price),
        quantity: 1
      };

      // check if item already in cart
      const existing = cart.find(i => i.name === item.name);
      if (existing) {
        existing.quantity += 1; // increment quantity
      } else {
        cart.push(item);
      }

      console.log("Cart:", cart); // for now, log the cart
      alert(`${item.name} added to cart!`);
    }


  });
});


//Boton para whatsapp
document.getElementById("sendCart").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Create the message
  const message = cart
    .map(item => `${item.name} x ${item.quantity} - $${item.price}`)
    .join("\n");

  // WhatsApp link
  const phoneNumber = "+528333180052"; // replace with your number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp
  window.open(url, "_blank");
});
