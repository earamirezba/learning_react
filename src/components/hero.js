import React from "react";

const Hero = () => {
    return ( 
      <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="https://avatars.githubusercontent.com/u/6853419?s=200&v=4"></img>
      <h1 class="display-5 fw-bold">Bootstrap en React!</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Diseña y personaliza rapido  </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Boton #1</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Boton #2</button>
        </div>
      </div>
    </div>
     );
}
 
export default Hero;