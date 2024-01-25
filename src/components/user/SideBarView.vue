<template>
  <div>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <!-- Sidebar - Brand -->
      <RouterLink class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">HR Staff
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
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="#">
          <i class="fas fa-fw fa-cog"></i>
          <span>Offices</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="#">
          <i class="fas fa-fw fa-wrench"></i>
          <span>TimeCards</span>
        </RouterLink>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider">
      <!-- Heading -->
      <div class="sidebar-heading">Master Data</div>
      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="#">
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </RouterLink>
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
      <li class="nav-item">
        <button class="nav-link" @click="logOut">
          <i class="fas fa-fw fa-table"></i>
          <span>Logout</span>
        </button>
      </li>
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { successToast } from '../../services/toast';

export default {
  name: 'SideBarView',
  component: {
    RouterLink,
    RouterView
  },
  methods: {
    logOut(){
      localStorage.removeItem('token');
      this.$store.commit('setIsAuth', false)
      console.log(this.$store.state.role)
      if(this.$store.state.role == 'admin'){
        this.$router.push('/admin/login');
      }else {
        this.$router.push('/login');
      }
      successToast(this, 'Logout Success!!!')
    }
  }
}
</script>

<style scoped>
</style>
