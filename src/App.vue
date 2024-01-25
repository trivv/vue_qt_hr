<template>
  <div id="wrapper" v-if="this.$store.state.role == 'admin'">
    <AdminSideBarView v-if="this.$store.state.isAuth"/>
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <AdminHeaderView v-if="this.$store.state.isAuth"/>
        <div class="container-fluid">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
  <div id="wrapper" v-else>
    <UserSideBarView v-if="this.$store.state.isAuth"/>
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <UserHeaderView v-if="this.$store.state.isAuth"/>
        <div class="container-fluid">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideBarView from './components/admin/SideBarView.vue'
import UserSideBarView from './components/user/SideBarView.vue'
import AdminHeaderView from './components/admin/HeaderView.vue'
import UserHeaderView from './components/user/HeaderView.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    AdminSideBarView,
    UserSideBarView,
    AdminHeaderView,
    UserHeaderView,
    RouterView
  }
}
</script>

<style>

</style>
