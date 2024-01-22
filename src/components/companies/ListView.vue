<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Companies</h1>
      <RouterLink to="/admin/companies/create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i class="fas fa-download fa-sm text-white-50"></i> Add Company
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
                    <RouterLink :to="{ path:'/admin/companies/' + company.id + '/edit' }" class="btn btn-success">Edit</RouterLink>
                    <button to="/company/update" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <th colspan="10">Loading...</th>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ListView',
  data(){
    return {
      companies: []
    }
  },
  mounted(){
    this.getCompanies()
  },
  methods: {
    getCompanies(){
      axios.get('http://0.0.0.0:3000/api/v1/admin/companies').then(res => {
        this.companies = res.data.data.companies
      })
    }
  }
}
</script>

<style scoped>
</style>
