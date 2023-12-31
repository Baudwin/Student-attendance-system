import React from 'react'

function Navbar() {
  return (
    <div>
        <section class="pb-4">
  <div class="border rounded-5">
    
    <section class="w-100">

      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-6 my-lg-5 py-lg-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"/>
          </div>
          <div class="col-md-8 col-lg-6 col-xl-5 offset-xl-1 my-lg-5 py-lg-5">
            <form>
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control form-control-lg" placeholder="Enter a valid email address"/>
                <label class="form-label" for="form3Example3" style={{marginLeft: "0px"}}>Email address</label>
              <div class="form-notch"><div class="form-notch-leading" style={{width: "9px"}}></div><div class="form-notch-middle" style={{width: "88.8px"}}></div><div class="form-notch-trailing"></div></div></div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-3">
                <input type="password" id="form3Example4" class="form-control form-control-lg" placeholder="Enter password"/>
                <label class="form-label" for="form3Example4" style={{marginLeft: "0px"}}>Password</label>
              <div class="form-notch"><div class="form-notch-leading" style={{width: "9px"}}></div><div class="form-notch-middle" style={{width: "64.8px"}}></div><div class="form-notch-trailing"></div></div></div>

              <div class="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div class="form-check mb-0">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3"/>
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">Forgot password?</a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" class="link-danger">Register</a></p>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* <!-- Copyright --> */}
        <div class="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        {/* <!-- Copyright --> */}

        {/* <!-- Right --> */}
        <div>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        {/* <!-- Right --> */}
      </div>
    </section>
    
    
    
    <div class="p-4 text-center border-top mobile-hidden">
      <a class="btn btn-link px-3" data-mdb-collapse-init="" href="#example1" role="button" aria-expanded="false" aria-controls="example1" data-ripple-color="hsl(0, 0%, 67%)" >
        <i class="fas fa-code me-md-2"></i>
        <span class="d-none d-md-inline-block">
          Show code
        </span>
      </a>
      
      
        <a class="btn btn-link px-3" data-ripple-color="hsl(0, 0%, 67%)" >
          <i class="fas fa-file-code me-md-2 pe-none"></i>
          <span class="d-none d-md-inline-block export-to-snippet pe-none">
            Edit in sandbox
          </span>
        </a>
      
    </div>
    
    
  </div>
</section>
    </div>
  )
}

export default Navbar