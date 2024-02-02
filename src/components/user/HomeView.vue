<template>
  <div>
    <div class="row">
      <div class="col-xl-12 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Body -->
          <div class="card-body">
            <div class="row ml-2 mr-2 no-gutters align-items-center">
              <div class="col-md-9" id="date-current"> Thứ 6 Ngày 05/02/2024 </div>
              <div class="col-md-3 text-right">Activity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Body -->
          <div class="card-body">
            <div class="row ml-2 mr-2 no-gutters mb-4">
              <div class="col-md-4">
                <div class="clock">
                  <div class="hourHand"></div>
                  <div class="minuteHand"></div>
                  <div class="secondHand"></div>
                  <div class="center"></div>
                  <div class="time"></div>
                  <ul>
                    <li>
                      <span>1</span>
                    </li>
                    <li>
                      <span>2</span>
                    </li>
                    <li>
                      <span>3</span>
                    </li>
                    <li>
                      <span>4</span>
                    </li>
                    <li>
                      <span>5</span>
                    </li>
                    <li>
                      <span>6</span>
                    </li>
                    <li>
                      <span>7</span>
                    </li>
                    <li>
                      <span>8</span>
                    </li>
                    <li>
                      <span>9</span>
                    </li>
                    <li>
                      <span>10</span>
                    </li>
                    <li>
                      <span>11</span>
                    </li>
                    <li>
                      <span>12</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <div class="schedule">
                  <select class="form-select">
                    <option value="" disabled selected hidden>Chọn Văn Phòng</option>
                    <option v-for="(office, index) in offices" :value="office.id" :key="index" >{{ office.name }}</option>
                  </select>
                  <div class="schedule-item mb-4">
                    <label>
                      <font-awesome-icon icon="fa-regular fa-envelope"></font-awesome-icon>
                      <span class="badge badge-primary mr-1">08:00~17:00</span>
                    </label>
                    <span class="badge badge-primary">19:00~21:00</span>
                  </div>
                  <div class="row g-2 mb-2">
                    <div class="col-6">
                      <button class="btn btn-success w-100">Đi làm</button>
                    </div>
                    <div class="col-6">
                      <button class="btn btn-danger w-100">Tan làm</button>
                    </div>
                  </div>
                  <div class="row g-2">
                    <div class="col-6">
                      <button class="btn btn-warning w-100">Ra ngoài</button>
                    </div>
                    <div class="col-6">
                      <button class="btn btn-info w-100">Quay lại</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="activity ml-4 mr-2">
                  <label class="mb-2">Hoạt động của bạn hôm nay</label>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Văn Phòng</th>
                        <th scope="col">Vào</th>
                        <th scope="col">Ra</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(time_card, index) in time_cards" :value="time_cards.id" :key="index">
                        <td> {{ time_card.office_name }}</td>
                        <td>{{ formatDateTime(time_card.time_in) }}</td>
                        <td>{{ formatDateTime(time_card.time_out) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <hr class="sidebar-divider d-none d-md-block">
            <div class="row text-center">
              <div class="col-6 col-md-4">Số ngày nghỉ phép năm: 10</div>
              <div class="col-6 col-md-4">Số ngày nghỉ đặc biệt: 10</div>
              <div class="col-6 col-md-4">Số ngày nghỉ bù: 10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { successToast, unAuthenticateToast } from '../../services/toast';
import { getOfficesQuery } from '../../services/axios/offices/query'
import { getTimeCardsQuery } from '../../services/axios/time_cards/query'

export default {
  name: 'UserHomeViewView',
  component: {
    RouterLink
  },
  data() {
    return {
      offices: [],
      time_cards: []
    }
  },
  mounted(){
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    const formattedDate = new Intl.DateTimeFormat('vi-VN', options).format(currentDate);
    document.querySelector('#date-current').innerHTML = formattedDate;

    const hourHand = document.querySelector('.hourHand');
    const minuteHand = document.querySelector('.minuteHand');
    const secondHand = document.querySelector('.secondHand');
    const time = document.querySelector('.time');
    function setDate(){
      const today = new Date();
      const second = today.getSeconds();
      const secondDeg = ((second / 60) * 360) + 360;
      secondHand.style.transform = `rotate(${secondDeg}deg)`;

      const minute = today.getMinutes();
      const minuteDeg = ((minute / 60) * 360);
      minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

      const hour = today.getHours();
      const hourDeg = ((hour / 12 ) * 360 );
      hourHand.style.transform = `rotate(${hourDeg}deg)`;
      time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>';
    }
    setInterval(setDate, 1000);
    this.getOffices();
    this.getTimeCards();
  },
  methods: {
    logOut(){
      localStorage.removeItem('token');
      this.$store.commit('setIsAuth', false)
      if(this.$store.state.role == 'admin'){
        this.$router.push('/admin/login');
      }else {
        this.$router.push('/login');
      }
      successToast(this, 'Logout Success!!!')
    },
    getOffices(){
      var myThis = this;
      getOfficesQuery().then((res) => {
        this.offices = res.data.offices
      })
      .catch(function(error){
        if (error.response.data.code == 401) {
          localStorage.removeItem('token');
          myThis.$router.push('/login');
          unAuthenticateToast(myThis)
        }
      });
    },
    getTimeCards(){
      var myThis = this;
      getTimeCardsQuery().then((res) => {
        this.time_cards = res.data.time_cards
      })
      .catch(function(error){
        if (error.response.data.code == 401) {
          localStorage.removeItem('token');
          myThis.$router.push('/login');
          unAuthenticateToast(myThis)
        }
      });
    },
    formatDateTime(date_time){
      if(!date_time){
        return '-';
      }
      const date = new Date(date_time);
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      return new Intl.DateTimeFormat('vi-VN', options).format(date);
    }
  }
}
</script>

<style scoped>
.schedule, .activity {
  height: 300px;
  margin: auto;
}
.clock{
  margin: auto;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: antiquewhite;
  position: relative;
  border:20px solid cornsilk;
}
.center{
  background-color: #000;
  position: absolute;
  left: calc(50% - 10px);
  top:  calc(50% - 10px);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 20;
}
.hourHand{
  width: 10px;
  height: 110px;
  background-color: #000;
  transform-origin: bottom center;
  border-radius: 4px;
  position: absolute;
  top: 70px;
  left: 175px;
  z-index: 10;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    transform: rotate(360deg);

}
.minuteHand {
  width: 6px;
  height: 140px;
  background-color: #000;
  transform-origin: bottom center;
  border-radius: 4px;
  position: absolute;
  top: 40px;
  left: 174px;
  z-index: 9;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  transform: rotate(90deg);
}
.secondHand {
  width: 2px;
  height: 153px;
  background-color: red;
  transform-origin: bottom center;
  border-radius: 4px;
  position: absolute;
  top: 30px;
  left: 179px;
  transition: all 0.06s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  z-index: 8;
  transform: rotate(360deg);
}
.time{
  position: absolute;
  top: 46%;
  left: 10%;
  border: 1px solid #fff8dc;
  background-color: #fff;
  padding: 5px;
  display: block;
  box-shadow: inset 0px 2px 5px rgba(0,0,0,.4);
  border-radius: 5px;
  min-width: 70px;
  height: 32px;

}
.time small{
  color:red;
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

.clock ul{
  list-style: none;
  padding: 0;

}
.clock ul li{
  position: absolute;
  width:20px;
  height:20px;
  text-align: center;
  line-height: 20px;
  font-size: 10px;
  color:red;
}
.clock ul li:nth-child(1){
  right: 22%;
  top:6.5%;
}
.clock ul li:nth-child(2){
  right: 6%;
  top:25%;
}
.clock ul li:nth-child(3){
  right: 1%;
  top:calc(50% - 10px);
  color:#000;
  font-size: 15px;
  font-weight: bold;
}
.clock ul li:nth-child(4){
  right: 6%;
  top:69%;
}
.clock ul li:nth-child(5){
  right: 22%;
  top:84%;
}
.clock ul li:nth-child(6){
  right: calc(50% - 10px);
  top:calc(99% - 20px);
  color:#000;
  font-size: 15px;
  font-weight: bold;
}
.clock ul li:nth-child(7){
  left: 22%;
  top:84%;
}
.clock ul li:nth-child(8){
  left: 6%;
  top:69%;
}
.clock ul li:nth-child(9){
  left: 1%;
  top:calc(50% - 10px);
  color:#000;
  font-size: 15px;
  font-weight: bold;
}
.clock ul li:nth-child(10){
  left: 6%;
  top:25%;
}
.clock ul li:nth-child(11){
  left: 22%;
  top:6.5%;
}
.clock ul li:nth-child(12){
  right: calc(50% - 10px);
  top:1%;
  color:#000;
  font-size: 15px;
  font-weight: bold;
}
</style>
