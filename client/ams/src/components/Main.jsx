import React from 'react'

function Main() {
  return <div>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Welcome Admin</h1>  
    </div>

  <div class="boxes container">
    <div class="row">
      <div class="col-lg-4 col-md-4">

        <div class="box">
           <span class="count">  </span>  <span class="boxitem"> Total Classes </span>
           
          <p>   <a class="a" href="/registercustomer">ADD NEW CLASS</a>  </p>
          </div>

      </div>
      <div class="col-lg-4 col-md-4">

        <div class="box">
            <span class="count">  </span>  <span class="boxitem">Students </span>
             
            <p>   <a class="a" href="/loanorders">ADD NEW STUDENT</a>  </p>
          </div>
 
      </div>
      <div class="col-lg-4 col-md-4">
        <div class="box">
                <span class="count">    </span> <span class="boxitem"> Class Divisions</span>                
            <p>   <a class="a" href="/sales">NEW CLAS DIVISION</a>  </p>
          </div>
      </div>

      <div class="col-lg-4 col-md-4">
        <div class="box">
                <span class="count">    </span> <span class="boxitem"> Teachers</span>                
            <p>   <a class="a" href="/sales">ADD NEW TEACHER</a>  </p>
          </div>
      </div>

      <div class="col-lg-4 col-md-4">
        <div class="box">
                <span class="count">    </span> <span class="boxitem"> Attendance </span>                
            <p>   <a class="a" href="/sales">TAKE ATTENDANCE</a>  </p>
          </div>
      </div>

      <div class="col-lg-4 col-md-4">
        <div class="box">
                <span class="count">    </span> <span class="boxitem">Terms </span>                
            <p>   <a class="a" href="/sales"></a>  </p>
          </div>
      </div>

    </div> 

  </div>
  </div>

}

export default Main