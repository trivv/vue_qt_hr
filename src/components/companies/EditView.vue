<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Edit Company</h1>
    </div>
    <!-- Content Row -->
    <div class="row">
      <!-- Area Chart -->
      <div class="col-xl-12 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Body -->
          <div class="card-body">
            <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
              <li class="mb0 ms-3" v-for="(error, index) in this.errorList" :key="index"> {{ error }}</li>
            </ul>
            <form>
              <div class="mb-3">
                <label for="inputCode" class="form-label">Code Company</label>
                <input type="text" class="form-control" id="inputCode" v-model="model.company.code">
              </div>
              <div class="mb-3">
                <label for="inputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" v-model="model.company.name">
              </div>
              <div class="mb-3">
                <label for="inputStaffSize" class="form-label">Staff Size</label>
                <input type="number" min="1" class="form-control" id="inputStaffSize" v-model="model.company.staff_size">
              </div>
              <div class="mb-3">
                <label for="inputStartDate" class="form-label">Start Date</label>
                <input type="date" class="form-control" id="inputStartDate" v-model="model.company.start_date">
              </div>
              <div class="mb-3">
                <label for="inputEndDate" class="form-label">End Date</label>
                <input type="date" class="form-control" id="inputEndDate" v-model="model.company.end_date">
              </div>
              <div class="mb-3">
                <label for="selectCategory" class="form-label">Category</label>
                <select class="form-select" v-model="model.company.category" aria-label="Default select example">
                  <option value="trail" selected>trail</option>
                  <option value="paid">paid</option>
                  <option value="free">free</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="selectStatus" class="form-label">Status</label>
                <select class="form-select" v-model="model.company.status" aria-label="Default select example">
                  <option value="pending" selected>pending</option>
                  <option value="active">active</option>
                  <option value="rejected">rejected</option>
                </select>
              </div>
              <button type="button" @click="updateCompany" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCompanyQuery } from '../../services/axios/companies/query'
import { updateCompanyMutation } from '../../services/axios/companies/mutation'
import { successToast, notFoundToast } from '../../services/toast'

export default {
  name: 'EditView',
  data(){
    return {
      companyId: '',
      errorList: '',
      model: {
        company: {
          code: '',
          name: '',
          staff_size: '',
          end_date: '',
          start_date: '',
          category: '',
          status: ''
        }
      }
    }
  },
  mounted(){
    this.companyId = this.$route.params.id
    this.getCompany(this.companyId)
  },
  methods: {
    getCompany(companyId){
      var myThis = this;
      getCompanyQuery(companyId)
        .then(res => {
          this.model.company = res.data.company
        })
        .catch(function (error){
          if (error.response) {
            if (error.response.data.code == 404) {
              myThis.$router.push('/admin/companies');
              notFoundToast(myThis)
            }
          }
        });
    },
    updateCompany(){
      var myThis = this;
      updateCompanyMutation(this.companyId, this.model.company).then(res => {
        if (res.code == 200) {
          myThis.$router.push('/admin/companies');
          successToast(myThis, 'Updated company!')
        }
      })
      .catch(function (error){
        if (error.response) {
          if (error.response.data.code == 422) {
            myThis.errorList = error.response.data.errors
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
../../services/axios/companies/mutation
