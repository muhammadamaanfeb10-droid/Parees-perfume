var n = document.getElementById("navbar")
  .innerHTML = `

    
 <nav class="navbar navbar-expand-lg navbar-light  ">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#"><img src="../../../Images/logo.png" alt=""></a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
        <li class="nav-item">
          <a class="nav-link active text-white square" aria-current="page" href="/index.html">Home</a>
        </li>
      
        <li  class="nav-item">
          <a class="nav-link active text-white square " href="/about.html">About Us</a>
        </li>
        <li class="nav-item dropdown square">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Perfumes
          </a>
          <ul class="dropdown-menu bg-secondary " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/perfumes/">Common Perfumes</a></li>
            <li><a class="dropdown-item" href="/perfumes/mens-perfumes">Mens Perfume</a></li>
            <li><a class="dropdown-item" href="/perfumes/womens-perfumes">Womens Perfume</a></li>
               <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brands
          </a>
          <ul class="dropdown-menu bg-secondary " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item " href="/perfumes/categories/Calvin-klien">Calvin Klein</a></li>
            <li><a class="dropdown-item " href="/perfumes/categories/david-off">David-off</a></li>
            <li><a class="dropdown-item " href="/perfumes/categories/dior">Dior</a></li>
          </ul>
        </li>
          </ul>
        </li>
         <li  class="nav-item">
          <a class="nav-link text-white square" href="/contact.html">Contact Us</a>
        </li>
         <li  class="nav-item">
          <a class="nav-link text-white square " href="/gallery.html">Gallery</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>





`;

// const menPerfumeCard = document.querySelector(".MensPerfumeCard")

var footer = document.querySelector(".footer");
footer.innerHTML = `
      <footer class="text-center text-lg-start text-white " style="background-color: #1c2331">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-between p-4 text-dark" style="background-color: lightblue;>
        <!-- Left -->
        <div class="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold">Paarees Perfume</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 150px; background-color: #7c4dff; height: px" />
              <p>
                Paarees Perfume is a fragrance that captures elegance and confidence in every spray.</p> <p Its  long-lasting scent blends sophistication with freshness.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">PAGES</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 50px; background-color: #7c4dff; height: 2px" />
              <p>
                <a href="/index.html" class="text-white text-decoration-none square">index page</a>
              </p>
              <p>
                <a href="/About.html " class="text-white text-decoration-none square">About Us</a>
              </p>
              <p>
                <a href="/Contact.html" class="text-white text-decoration-none square">Contact Us</a>
              </p>
              <p>
                <a href="/gallery.html" class="text-white text-decoration-none square">Gallery</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">PRODUCTS</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 90px; background-color: #7c4dff; height: 2px" />
              <p>
                <a href="/perfumes/" class="text-white text-decoration-none square">Our Perfumes</a>
              </p>
              <p>
                <a href="/perfumes/categories/david-off" class="text-white text-decoration-none square">David Off Perfumes</a>
              </p>
              <p>
                <a href="/perfumes/categories/dior" class="text-white text-decoration-none square">Dior Perfumes</a>
              </p>
              <p>
                <a href="/perfumes/categories/Calvin-klien" class="text-white text-decoration-none square">Calvin Klein</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 80px; background-color: #7c4dff; height: 2px"/>
              <p><i class="fas fa-home mr-3"></i> Metro Star Gate Sharah-e-Faisal </p>
              <p><i class="fas fa-envelope mr-3"></i> Paarees Perfume</p>
              <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 021-12345-6789</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2026 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">PaareesPerfume.com</a>
      </div>
      <!-- Copyright -->
    </footer>
`

