<template>
  <div id="wrapper">
    <SideBarView v-if="this.$store.state.isAuth"/>
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <HeaderView v-if="this.$store.state.isAuth"/>
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
