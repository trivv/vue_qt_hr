<template>
  <div>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <!-- Sidebar - Brand -->
      <RouterLink class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup>
        </div>
      </RouterLink>
      <!-- Divider -->
      <hr class="sidebar-divider my-0">
      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </RouterLink>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider">
      <!-- Heading -->
      <div class="sidebar-heading">Interface</div>
      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/admin/companies" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Companies</span>
        </RouterLink>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <RouterLink class="collapse-item" to="buttons.html">Buttons</RouterLink>
            <RouterLink class="collapse-item" to="cards.html">Cards</RouterLink>
          </div>
        </div>
      </li>
      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </RouterLink>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <RouterLink class="collapse-item" to="utilities-color.html">Colors</RouterLink>
            <RouterLink class="collapse-item" to="utilities-border.html">Borders</RouterLink>
            <RouterLink class="collapse-item" to="utilities-animation.html">Animations</RouterLink>
            <RouterLink class="collapse-item" to="utilities-other.html">Other</RouterLink>
          </div>
        </div>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider">
      <!-- Heading -->
      <div class="sidebar-heading">Addons</div>
      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </RouterLink>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <RouterLink class="collapse-item" to="login.html">Login</RouterLink>
            <RouterLink class="collapse-item" to="register.html">Register</RouterLink>
            <RouterLink class="collapse-item" to="forgot-password.html">Forgot Password</RouterLink>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <RouterLink class="collapse-item" to="404.html">404 Page</RouterLink>
            <RouterLink class="collapse-item" to="blank.html">Blank Page</RouterLink>
          </div>
        </div>
      </li>
      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <RouterLink class="nav-link" to="charts.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </RouterLink>
      </li>
      <!-- Nav Item - Tables -->
      <li class="nav-item">
        <RouterLink class="nav-link" to="tables.html">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </RouterLink>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">
      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
      <!-- Sidebar Message -->
      <div class="sidebar-card d-none d-lg-flex">
        <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="...">
        <p class="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features, components, and more!
        </p>
        <RouterLink class="btn btn-success btn-sm" to="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</RouterLink>
      </div>
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'SideBarView',
  component: {
    RouterLink,
    RouterView
  }
}

</script>

<style scoped>
</style>
