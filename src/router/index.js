import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import AboutView from '../components/common/AboutView.vue'
import ListCompanyView from '../components/admin/companies/ListView.vue'
import CreateCompanyView from '../components/admin/companies/CreateView.vue'
import EditCompanyView from '../components/admin/companies/EditView.vue'
import AdminLoginView from '../components/admin/LoginView.vue'
import UserLoginView from '../components/user/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta?.env?.BASE_URL),
  routes: [
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: AdminLoginView
    },
    {
      path: '/login',
      name: 'userLogin',
      component: UserLoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/admin/companies',
      name: 'companies',
      component: ListCompanyView
    },
    {
      path: '/admin/companies/create',
      name: 'createCompany',
      component: CreateCompanyView
    },
    {
      path: '/admin/companies/:id/edit',
      name: 'editCompany',
      component: EditCompanyView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['adminLogin', 'userLogin'];
  const isAuthenticated = localStorage.getItem('token');
  if(isAuthenticated && publicPages.includes(to.name)){
    return next('/admin/companies');
  }
  if (!isAuthenticated && !publicPages.includes(to.name)) {
    return next('/login');
  }
  next();
})

export default router;
