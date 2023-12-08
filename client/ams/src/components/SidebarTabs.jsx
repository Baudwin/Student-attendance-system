import React from 'react'
import { Link } from 'react-router-dom'

function SidebarTabs() {
  return  <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
  <div class="offcanvas-lg offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">

    <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="/dashboard">
            <svg class="bi"><use xlinkHref="#house-fill"/></svg>
          Dashboard
          </a> 
        </li>
        <li class="nav-item">
          <Link class="nav-link d-flex align-items-center gap-2" to={"/add-class"}>
            <svg class="bi"><use xlinkHref="#file-earmark"/></svg>
           Classes
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link d-flex align-items-center gap-2" to={"/add-teacher"}>
            <svg class="bi"><use xlinkHref="#people"/></svg>
           Teachers
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link d-flex align-items-center gap-2" to="/add-class-division">
            <svg class="bi"><use xlinkHref="#cart"/></svg>
            Class Divisions
          </Link>
        </li>
        

        <li class="nav-item">
          <Link class="nav-link d-flex align-items-center gap-2" to={"/take-attendance"}>
            <svg class="bi"><use xlinkHref="#people"/></svg>
          Take Attendance
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link d-flex align-items-center gap-2" to={"/view-attendance"}>
            <svg class="bi"><use xlinkHref="#people"/></svg>
           View Attendance
          </Link>
        </li>
      </ul>
      <br/><br/>

      <hr class="my-3"/>

      <ul class="nav flex-column mb-auto">
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center gap-2" href="/">
            <svg class="bi"><use xlinkHref="#door-closed"/></svg>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
}

export default SidebarTabs