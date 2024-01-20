<template>
  <div id="wrapper">
    <SideBarView/>
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <HeaderView/>
        <div class="container-fluid">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarView from './components/SideBarView.vue'
import HeaderView from './components/HeaderView.vue'
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
    SideBarView,
    HeaderView,
    RouterView
  }
}
</script>

<style>

</style>
