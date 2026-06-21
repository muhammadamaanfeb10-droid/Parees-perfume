let obj = [
  { price: "2500", review: "10", image: "Images/ck man 1.jpg", sale: "10", name: "Calvin Klein", brand: "CK", desc: "Iconic citrus unisex fragrance", category: "Mens",file:"words/ck-man-1.docx" },
  { price: "2500", review: "10", image: "Images/women-1-ck.webp", sale: "10", name: "Calvin Klein", brand: "CK", desc: "Classic floral bouquet", category: "Womens", file:"words/ck-women-1.docx" },
  { price: "2500", review: "10", image: "Images/ck man 2.webp", sale: "10", name: "Calvin Klein", brand: "CK", desc: "Raw, noble, and fresh trail", category: "Mens",file:"words/ck-man-2.docx.docx" },
  { price: "2500", review: "10", image: "Images/women-2-ck.webp", sale: "10", name: "Calvin Klein", brand: "CK", desc: "Finely crafted floral essence", category: "Womens" , file:"words/ck-women-2.docx" },
  { price: "2500", review: "10", image: "Images/ck man 3.jpeg", sale: "10", name: "Calvin Klein", brand: "CK", desc: "Woody, aromatic fragrance for men", category: "Mens",file:"words/ck-man-3.docx" },
  { price: "2500", review: "10", image: "Images/women-3-ck.webp", sale: "10", name: "Calvin Klein", brand: "CK", desc: "The world's most famous perfume", category: "Womens", file:"words/ck-women-3.docx" },
  { price: "2500", review: "10", image: "Images/ck man 4.jpg", sale: "10", name: "Calvin Klein", brand: "CK", desc: "Inspired by the sea and sun", category: "Mens", file:"words/ck-man-4.docx" },
  { price: "2500", review: "10", image: "Images/women-4-ck.webp", sale: "10", name: "Calvin Klein", brand: "CK", desc: "Chic, sultry, and soft", category: "Womens", file:"words/ck-women-4.docx" },
  { price: "2500", review: "10", image: "Images/ck man 5.jpg", sale: "10", name: "Calvin Klein", brand: "CK", desc: "Sophisticated fruit and oakmoss mix", category: "Mens", file:"words/ck-man-5.docx" },
  { price: "2500", review: "6", image: "Images/women-5-do.jpeg", sale: "10", name: "David off", brand: "David Off", desc: "Floral and fresh with a gourmand twist", category: "Womens",file:"words/ck-women-5.docx" },
  { price: "2500", review: "10", image: "Images/david off 1.jpeg", sale: "10", name: "David off", brand: "David Off", desc: "Love, passion, and beauty in a bottle", category: "Mens" , file:"words/david-off-man-1.docx" },
  { price: "2500", review: "10", image: "Images/women-6-do.avif", sale: "10", name: "David off", brand: "David Off", desc: "Refreshing chilled yuzu and pomegranate", category: "Womens",file:"words/women-7.docx" },
  { price: "2500", review: "10", image: "Images/david off 2.jpeg", sale: "10", name: "David off", brand: "David Off", desc: "Magnetic and modern masculinity", category: "Mens",file:"words/david-off-man-2.docx" },
  { price: "2500", review: "10", image: "Images/women-7-do.avif", sale: "10", name: "David off", brand: "David Off", desc: "Honey-sweetened gardenia and patchouli", category: "Womens",file:"words/women-7.docx" },

  { price: "2500", review: "10", image: "Images/david off 3.jpeg", sale: "10", name: "David off", brand: "David Off", desc: "The joy of living the Mediterranean life", category: "Mens",file:"words/david-off-man-3.docx" },
  { price: "2500", review: "10", image: "Images/women-8-dr.jpeg", sale: "10", name: "Dior", brand: "Dior", desc: "Warm, oriental floral with modern sensuality", category: "Womens",file:"words/women-8.docx" },
  { price: "2500", review: "4", image: "Images/David off 4.webp", sale: "10", name: "David off", brand: "David Off Ford", desc: "Luxurious and sensual fragrance with rich dark accords", category: "Mens" ,file:"words/david-off-man-4.docx" },
  { price: "2500", review: "6", image: "Images/women-9-dr.jpeg", sale: "10", name: "Dior", brand: "Dior", desc: "A full-bodied journey into the once-forbidden", category: "Womens",file:"words/women-9.docx" },
  { price: "2500", review: "10", image: "Images/dior 1.jpeg", sale: "10", name: "Dior", brand: "Dior", desc: "Tradition delivered through cigars and rum", category: "Mens",file:"words/dior-man-1.docx" },
  { price: "2500", review: "10", image: "Images/women-10-dr.jpeg", sale: "10", name: "Dior", brand: "Dior", desc: "Memory of a summer day by the ocean", category: "Womens",file:"words/women-10.docx" },
  { price: "2500", review: "10", image: "Images/dior 2.jpeg", sale: "10", name: "Dior", brand: "Dior", desc: "An unconventional woody-aromatic-leather scent", category: "Mens",file:"words/dior-man-2.docx"},
  { price: "2500", review: "10", image: "Images/women-11-dr.jpeg", sale: "10", name: "Dior", brand: "Dior", desc: "Honey-sweetened gardenia and patchouli", category: "Womens",file:"words/women-11.docx" },
  { price: "2500", review: "10", image: "Images/dior 4.jpg", sale: "10", name: "Dior", brand: "Dior", desc: "An unconventional woody-aromatic-leather scent", category: "Mens",file:"words/dior-man-3.docx" }
  , { price: "2500", review: "15", image: "Images/women-12-dr.jpeg", sale: "10", name: "Dior", brand: "Dior", desc: "Honey-sweetened gardenia and patchouli", category: "Womens",file:"words/women-12.docx" }
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

    <span class="badge bg-danger position-absolute top-0 end-0 m-2">
 ${obj[i].sale} %
    </span> 

    <img src="../../../${obj[i].image}" class="card-img-top product-img" alt="">

    <div class="card-body d-flex flex-column">
      <h6 class="fw-bold">${obj[i].name}</h6>

      <div class="text-warning small">
        ★★★★☆ <span class="text-dark">(${obj[i].review} reviews)</span>
      </div>

      <p class="mt-2 mb-1">
        <del class="text-muted">Rs. ${obj[i].price}</del>
        <span class="fw-bold"> Rs. ${saleprice}</span>
      </p>

      <a href="../../../${obj[i].file}" download class="btn btn-outline-primary mt-auto">
        Pay only Rs. ${saleprice} now
      </a>
    </div>

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
    var saleprice = obj[i].price - (obj[i].price / 100 * obj[i].sale);
    if (cat == 'Womens') {
      womencard.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-2">
  <div class="card h-100 rounded shadow  ">

    <span class="badge bg-danger position-absolute top-0 end-0 m-2">
 ${obj[i].sale} %
    </span> 

    <img src="../../../${obj[i].image}" class="card-img-top product-img" alt="">

    <div class="card-body d-flex flex-column">
      <h6 class="fw-bold">${obj[i].name}</h6>

      <div class="text-warning small">
        ★★★★☆ <span class="text-dark">(${obj[i].review} reviews)</span>
      </div>

      <p class="mt-2 mb-1">
        <del class="text-muted">Rs. ${obj[i].price}</del>
        <span class="fw-bold"> Rs. ${saleprice}</span>
      </p>

      <a href="../../${obj[i].file}" class="btn btn-outline-primary mt-auto">
        Pay only Rs. ${saleprice} now
      </a>
    </div>

  </div>
</div>    `;

    }
  }
}
// Women Card End here...

function CalvinKlienCards() {
  var CKCard = document.querySelector(".CalvinKleinCard");

  for (let i = 0; i < obj.length; i++) {
    var brand = obj[i].brand;
    var saleprice = obj[i].price - (obj[i].price / 100 * obj[i].sale);
    if (brand === 'CK') {
      CKCard.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-2">
  <div class="card h-100 rounded shadow  ">

    <span class="badge bg-danger position-absolute top-0 end-0 m-2">
 ${obj[i].sale} %
    </span> 

    <img src="../../../${obj[i].image}" class="card-img-top product-img" alt="">

    <div class="card-body d-flex flex-column">
      <h6 class="fw-bold">${obj[i].name}</h6>

      <div class="text-warning small">
        ★★★★☆ <span class="text-dark">(${obj[i].review} reviews)</span>
      </div>

      <p class="mt-2 mb-1">
        <del class="text-muted">Rs. ${obj[i].price}</del>
        <span class="fw-bold"> Rs. ${saleprice}</span>
      </p>

      <a href="../../../${obj[i].file}" class="btn btn-outline-primary mt-auto">
        Pay only Rs. ${saleprice} now
      </a>
    </div>

  </div>
</div>    `;

    }
  }
}

function DavidOffCards() {
  var DavidOff = document.querySelector(".DavidOffCard");

  for (let i = 0; i < obj.length; i++) {
    var brand = obj[i].brand;
    var saleprice = obj[i].price - (obj[i].price / 100 * obj[i].sale);
    if (brand === 'David Off') {
      DavidOff.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-2">
  <div class="card h-100 rounded shadow  ">

    <span class="badge bg-danger position-absolute top-0 end-0 m-2">
 ${obj[i].sale} %
    </span> 

    <img src="../../../${obj[i].image}" class="card-img-top product-img" alt="">

    <div class="card-body d-flex flex-column">
      <h6 class="fw-bold">${obj[i].name}</h6>

      <div class="text-warning small">
        ★★★★☆ <span class="text-dark">(${obj[i].review} reviews)</span>
      </div>

      <p class="mt-2 mb-1">
        <del class="text-muted">Rs. ${obj[i].price}</del>
        <span class="fw-bold"> Rs. ${saleprice}</span>
      </p>

      <a href="../../../${obj[i].file}" class="btn btn-outline-primary mt-auto">
        Pay only Rs. ${saleprice} now
      </a>
    </div>

  </div>
</div>    `;

    }
  }
}

function DiorCards() {
  var DavidOff = document.querySelector(".DiorCard");

  for (let i = 0; i < obj.length; i++) {
    var brand = obj[i].brand;
    var saleprice = obj[i].price - (obj[i].price / 100 * obj[i].sale);
    if (brand === 'Dior') {
      DavidOff.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-2">
  <div class="card h-100 rounded shadow  ">

    <span class="badge bg-danger position-absolute top-0 end-0 m-2">
 ${obj[i].sale} %
    </span> 

    <img src="../../../${obj[i].image}" class="card-img-top product-img" alt="">

    <div class="card-body d-flex flex-column">
      <h6 class="fw-bold">${obj[i].name}</h6>

      <div class="text-warning small">
        ★★★★☆ <span class="text-dark">(${obj[i].review} reviews)</span>
      </div>

      <p class="mt-2 mb-1">
        <del class="text-muted">Rs. ${obj[i].price}</del>
        <span class="fw-bold"> Rs. ${saleprice}</span>
      </p>

      <a href="../../../${obj[i].file}" class="btn btn-outline-primary mt-auto">
        Pay only Rs. ${saleprice} now
      </a>
    </div>

  </div>
</div>    `;

    }
  }
}