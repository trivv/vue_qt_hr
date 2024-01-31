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
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content" v-if="this.$store.state.isAuth">
        <UserHeaderView/>
        <div class="container-fluid">
          <RouterView />
        </div>
      </div>
      <div id="content" v-else>
        <div class="container-fluid">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideBarView from './components/admin/SideBarView.vue'
import AdminHeaderView from './components/admin/HeaderView.vue'
import UserHeaderView from './components/user/HeaderView.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    AdminSideBarView,
    AdminHeaderView,
    UserHeaderView,
    RouterView
  }
}
</script>

<style scoped>
.schedule, .activity {
  height: 300px;
  margin: auto;
}
</style>
