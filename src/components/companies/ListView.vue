<template>
  <div>
    <div class="row">
      <div class="col-8">All Users</div>
      <div class="col-4">
        <RouterLink to="/company/create" class="btn btn-success float-right">Edit</RouterLink>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">StaffSize</th>
          <th scope="col">StartDate</th>
          <th scope="col">EndDate</th>
          <th scope="col">Status</th>
          <th scope="col">Category</th>
          <th scope="col">CreatedAt</th>
          <th scope="col">UpdatedAt</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="this.companies.length > 0">
        <tr v-for="(company, index) in this.companies" :key="index">
          <th scope="row">{{ company.id }}</th>
          <td>{{ company.name }}</td>
          <td>{{ company.staff_size }}</td>
          <td>{{ company.start_date }}</td>
          <td>{{ company.end_date }}</td>
          <td>{{ company.status }}</td>
          <td>{{ company.category }}</td>
          <td>{{ company.created_at }}</td>
          <td>{{ company.updated_at }}</td>
          <td>
            <RouterLink to="/company/update" class="btn btn-success">Edit</RouterLink>
            <button to="/company/update" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <th colspan="10">Loading...</th>
      </tbody>
    </table>
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
