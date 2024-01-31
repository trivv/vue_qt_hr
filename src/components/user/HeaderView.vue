<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown no-arrow d-sm-none">
          <RouterLink class="nav-link dropdown-toggle" to="#">
            <img class="img-profile rounded-circle" src="/assets/logo.png">
          </RouterLink>
        </li>
        <li class="nav-item dropdown no-arrow mx-1">
          <RouterLink class="nav-link" to="#">
            <span class="mr-2 d-lg-inline text-gray-800 small">Home</span>
          </RouterLink>
        </li>
        <li class="nav-item dropdown no-arrow mx-1">
          <RouterLink class="nav-link dropdown-toggle" to="#">
            <span class="mr-2 d-lg-inline text-gray-800 small">Schedule</span>
          </RouterLink>
        </li>
        <li class="nav-item dropdown no-arrow mx-1">
          <RouterLink class="nav-link dropdown-toggle" to="#">
            <span class="mr-2 d-lg-inline text-gray-800 small">Report</span>
          </RouterLink>
        </li>
        <li class="nav-item dropdown no-arrow mx-1">
          <RouterLink class="nav-link dropdown-toggle" to="#">
            <span class="mr-2 d-lg-inline text-gray-800 small">Request</span>
          </RouterLink>
        </li>
        <div class="topbar-divider d-sm-block"></div>
        <li class="nav-item dropdown no-arrow">
          <button @click="logOut" class="nav-link"><span class="mr-2 d-lg-inline text-gray-600 small">Logout</span></button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { successToast } from '../../services/toast';

export default {
  name: 'HeaderView',
  component: {
    RouterLink
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
