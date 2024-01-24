<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Companies</h1>
      <RouterLink to="/admin/companies/create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i class="fas fa-download fa-sm text-white-50"></i>Add Company
      </RouterLink>
    </div>
    <!-- Content Row -->
    <div class="row">
      <!-- Area Chart -->
      <div class="col-xl-12 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Body -->
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Code</th>
                  <th scope="col">Name</th>
                  <th scope="col">StaffSize</th>
                  <th scope="col">StartDate</th>
                  <th scope="col">EndDate</th>
                  <th scope="col">Status</th>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody v-if="this.companies.length > 0">
                <tr v-for="(company, index) in this.companies" :key="index">
                  <th scope="row">{{ company.id }}</th>
                  <td>{{ company.code }}</td>
                  <td>{{ company.name }}</td>
                  <td>{{ company.staff_size }}</td>
                  <td>{{ company.start_date }}</td>
                  <td>{{ company.end_date }}</td>
                  <td>{{ company.status }}</td>
                  <td>{{ company.category }}</td>
                  <td>
                    <RouterLink :to="{ path:'/admin/companies/' + company.id + '/edit' }" class="btn btn-success mr-2">Edit</RouterLink>
                    <button @click="deleteStudent(company.id)" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <th colspan="10">Loading...</th>
              </tbody>
            </table>
            <Pagination v-if="companies" :total-pages="totalPages" :per-page="perPage" :current-page="currentPage" @pagechanged="onPageChange" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCompaniesQuery } from '../../services/axios/companies/query'
import { deleteCompanyMutation } from '../../services/axios/companies/mutation'
import { successToast, notFoundToast, unAuthenticateToast } from '../../services/toast'
import Pagination from '../common/Pagination'
import DeliveryMethods from '../../delivery-methods'

export default {
  name: 'ListView',
  data(){
    return {
      companies: [],
      currentPage: 1,
      totalPages: 0,
      totalCount: 0,
      perPage: DeliveryMethods.PER_PAGE
    }
  },
  mounted(){
    this.getCompanies()
  },
  methods: {
    getCompanies(){
      var myThis = this;
      getCompaniesQuery(this.currentPage, this.perPage).then((res) => {
        this.companies = res.data.companies
        this.totalPages = res.data.total_pages
        this.totalCount = res.data.total_count
      })
      .catch(function(error){
        if (error.response.data.code == 401) {
          localStorage.removeItem('token');
          myThis.$router.push('/admin/login');
          unAuthenticateToast(myThis)
        }
      });
    },
    deleteStudent(companyId){
      var myThis = this;
      if (confirm('Are you sure?')){
        deleteCompanyMutation(companyId)
          .then((res) => {
            console.log(res);
            this.currentPage = 1;
            this.getCompanies();
            successToast(myThis, 'Deleted company!')
          })
          .catch(function(error){
            if (error.response) {
              if (error.response.data.code == 404) {
                myThis.$router.push('/admin/companies');
                notFoundToast(myThis)
              }
            }
          });
      }
    },
    onPageChange (page) {
      this.currentPage = page
      this.getCompanies()
    },
    onChangeRecordsPerPage () {
      this.getCompanies()
    }
  },
  components: {
    Pagination
  }
}
</script>

<style scoped>
</style>
