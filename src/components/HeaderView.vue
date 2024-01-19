<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <RouterLink class="nav-link" to="/">Home </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/companies">Companies</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <RouterView/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'NavView',
  component: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>
</style>
