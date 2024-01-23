<template>
  <div id="wrapper">
    <SideBarView v-if="loggedIn"/>
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <HeaderView v-if="loggedIn"/>
        <div class="container-fluid">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarView from './components/common/SideBarView.vue'
import HeaderView from './components/common/HeaderView.vue'
import { RouterView } from 'vue-router'
import { loggedIn } from './services/axios/authenticate/base'
export default {
  name: 'App',
  components: {
    SideBarView,
    HeaderView,
    RouterView
  },
  data(){
    return {
      loggedIn: false
    }
  },
  mounted() {
    this.loggedIn = loggedIn()
  }
}
</script>

<style>

</style>
