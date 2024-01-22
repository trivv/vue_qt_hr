import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import AboutView from '../components/AboutView.vue'
import ListCompanyView from '../components/companies/ListView.vue'
import CreateCompanyView from '../components/companies/CreateView.vue'
import EditCompanyView from '../components/companies/EditView.vue'
const router = createRouter({
  history: createWebHistory(import.meta?.env?.BASE_URL),
  routes: [
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

export default router;
