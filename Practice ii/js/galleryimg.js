let obj = [
  { price: "2500", review: "5",  image: "Images/ck man 1.jpg", sale: "10", name: "CK Ones", brand: "CK", desc: "Iconic citrus unisex fragrance", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-1-ck.webp", sale: "20", name: "Eternity", brand: "CK", desc: "Classic floral bouquet", category: "Womens" },
  { price: "1500", review: "15", image: "Images/ck man 2.webp", sale: "20", name: "Sauvage", brand: "CK", desc: "Raw, noble, and fresh trail", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-2-ck.webp", sale: "20", name: "J'adore", brand: "CK", desc: "Finely crafted floral essence", category: "Womens" },
  { price: "1500", review: "10", image: "Images/ck man 3.jpeg", sale: "20", name: "Bleu de Chanel", brand: "CK", desc: "Woody, aromatic fragrance for men", category: "Mens" },
  { price: "1500", review: "8",  image: "Images/women-3-ck.webp", sale: "20", name: "No. 5", brand: "CK", desc: "The world's most famous perfume", category: "Womens" },
  { price: "1500", review: "10", image: "Images/ck man 4.jpg", sale: "20", name: "Acqua di Gio", brand: "CK", desc: "Inspired by the sea and sun", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-4-ck.webp", sale: "50", name: "Sì", brand: "CK", desc: "Chic, sultry, and soft", category: "Womens" },
  { price: "1500", review: "10", image: "Images/ck man 5.jpg", sale: "20", name: "Aventus", brand: "CK", desc: "Sophisticated fruit and oakmoss mix", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-5-do.jpeg", sale: "20", name: "Wind Flowers", brand: "David Off", desc: "Floral and fresh with a gourmand twist", category: "Womens" },
  { price: "1500", review: "10", image: "Images/david off 1.jpeg", sale: "20", name: "Eros", brand: "David Off", desc: "Love, passion, and beauty in a bottle", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-6-do.avif", sale: "20", name: "Bright Crystal", brand: "David Off", desc: "Refreshing chilled yuzu and pomegranate", category: "Womens" },
  { price: "1500", review: "10", image: "Images/david off 2.jpeg", sale: "20", name: "Le Male", brand: "David Off", desc: "Magnetic and modern masculinity", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-7-do.avif", sale: "20", name: "Scandal", brand: "David Off", desc: "Honey-sweetened gardenia and patchouli", category: "Womens" },

  { price: "1500", review: "10", image: "Images/david off 3.jpeg", sale: "20", name: "Light Blue", brand: "David Off", desc: "The joy of living the Mediterranean life", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-8-dr.jpeg", sale: "20", name: "The One", brand: "Dior", desc: "Warm, oriental floral with modern sensuality", category: "Womens" },
  { price: "1500", review: "10", image: "Images/David off 4.webp", sale: "20", name: "Black Orchid", brand: "David Off Ford", desc: "Luxurious and sensual fragrance with rich dark accords", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-9-dr.jpeg", sale: "20", name: "Lost Cherry", brand: "Dior", desc: "A full-bodied journey into the once-forbidden", category: "Womens" },
  { price: "1500", review: "10", image: "Images/dior 1.jpeg", sale: "20", name: "Jazz Club", brand: "Dior", desc: "Tradition delivered through cigars and rum", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-10-dr.jpeg", sale: "20", name: "Beach Walk", brand: "Dior", desc: "Memory of a summer day by the ocean", category: "Womens" },

  { price: "1500", review: "10", image: "Images/dior 2.jpeg", sale: "20", name: "Explorer", brand: "Dior", desc: "An unconventional woody-aromatic-leather scent", category: "Mens" },
  { price: "1500", review: "10", image: "Images/women-11-dr.jpeg", sale: "20", name: "Scandal", brand: "Dior", desc: "Honey-sweetened gardenia and patchouli", category: "Womens" },
  { price: "1500", review: "10", image: "Images/dior 4.jpg", sale: "20", name: "Explorer", brand: "Dior", desc: "An unconventional woody-aromatic-leather scent", category: "Mens" }
,{ price: "15000", review: "10", image: "Images/women-12-dr.jpeg", sale: "20", name: "Scandal", brand: "Dior", desc: "Honey-sweetened gardenia and patchouli", category: "Womens" }
];


// Mens Card Start
function MensCard() {
  var card = document.querySelector(".MensPerfumeCard");

  for (let i = 0; i < obj.length; i++) {
    var cat = obj[i].category;
    if (cat == 'Mens') {
      var saleprice = obj[i].price - (obj[i].price / 100 * obj[i].sale);
      card.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-2">
  <div class="card h-100  shadow">

   

    <img src="../../../${obj[i].image}" class="card-img-top product-img" alt="">

 

    

  </div>
</div>    `;

    }
  }
}

// Mens Card End here...


// Women Card Start
function womencard() {
  var womencard = document.querySelector(".WomensPerfumeCard");

  for (let i = 0; i < obj.length; i++) {
    var cat = obj[i].category;

    if (cat == 'Womens') {
      womencard.innerHTML += `


        <div class="col-lg-3 col-md-4 col-sm-6 mb-2">
  <div class="card h-100  shadow">
    

    <img src="../../../${obj[i].image}" class="card-img-top product-img" alt="">

    
   </div>
</div>      `;

    }
  }
}
// Women Card End here...
