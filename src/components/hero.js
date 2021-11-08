import React from "react";

const Hero = () => {
    return ( 
      <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="https://www.noticias.ltda/wp-content/uploads/2020/08/noticiasltda_comprasonline_header.png"></img>
      <h1 class="display-5 fw-bold">E-commerce PI-SHOP The Mariana's Five</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Compra seguro en nuestra tienda Online  </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Boton #1</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Boton #2</button>
        </div>
      </div>
    </div>
     );
}
 
export default Hero;