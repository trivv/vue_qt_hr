<template>
  <div class="row">
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">Please enter your login and password!</p>
                  <ul class="alert alert-warning" v-if="error != ''">
                    <li class="mb0 ms-3"> {{ error }}</li>
                  </ul>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typeEmailX" >Email</label>
                    <input type="email" id="typeEmailX" class="form-control form-control-lg"  v-model="this.model.email"/>
                  </div>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typePasswordX">Password</label>
                    <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="this.model.password"/>
                  </div>
                  <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">Forgot password?</a>
                  </p>
                  <button class="btn btn-outline-light btn-lg px-5" type="button" @click="login">Login</button>
                </div>
                <div>
                  <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { userLoginMutation } from '../../services/axios/authenticate/mutation';
import { successToast } from '../../services/toast';

export default {

  name: 'LoginView',
  data(){
    return {
      error: '',
      model: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login(){
      var myThis = this;
      userLoginMutation(this.model).then(res => {
        if (res.data.code == 200) {
          localStorage.setItem('token', res.headers.authorization)
          this.$store.commit('setIsAuth', true)
          successToast(myThis, 'Login Success!!!')
          window.location.href = '/';
        }
      })
      .catch(function (error){
        if (error.response) {
          if (error.response.data.code == 401) {
            myThis.error = error.response.data.errors
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
    }
  }
}
</script>

<style scoped>
li.mb0.ms-3 {
    list-style-type: none;
}
</style>
