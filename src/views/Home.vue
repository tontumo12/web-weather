<template>
  <v-container class="app">
    <v-app-bar class="app-bar">
      <!-- logo -->
      <v-img
        alt="weather logo"
        class="shrink logo"
        contain
        src="../assets/weather.jpg"
        min-width="65"
        width="65"
      />
      <h1 class="display-1.5 font-weight-bold mb-3">weather</h1>
      <v-spacer></v-spacer>
      <!-- thanh tìm kiếm -->
      <v-text-field
        label="Tìm kiếm"
        placeholder="nhập tên thành phố"
        filled
        rounded
        dense
        style="margin-top: 25px"
        append-icon="mdi-magnify"
      ></v-text-field>
    </v-app-bar>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <!-- hiển thị địa chỉ theo map -->
    <v-card flat class="text-center">
      <p><v-icon>mdi-map-marker</v-icon> tương mai, hai bà trưng, hà nội</p>
    </v-card>
    <v-card flat>
      <v-row class="text-center">
        <!-- khung hiển thị thời tiết -->
        <v-col cols="6">
          <h1 class="display-2 font-weight-bold mb-2">{{ city }}</h1>
          <h1>Nhiệt độ : {{ NhietDo }} °C</h1>
          <h1>Độ Ẩm: {{ humidity }} %</h1>
          <h1>Tốc độ gió: {{ wind }} km/h</h1>
          <h1>Khả năng mưa : {{ rain }} %</h1>
          <v-btn depressed color="primary" @click="hour = true">
            Xem theo giờ
          </v-btn>
          <v-btn depressed color="primary" @click="day = true">
            Xem theo ngày
          </v-btn>
        </v-col>
        <!-- hiệu ứng thời tiết -->
        <v-col cols="6">
          <!-- hiệu ứng nắng -->
          <v-card class="body" style="background-color: rgb(23, 188, 238)" v-if="hot == true">
            <div class="hot">
              <span class="sun"></span>
              <span class="sunx"></span>
            </div>
          </v-card>
          <!-- hiệu ứng mây -->
          <v-card class="body" style="background-color: #fff" v-if="cloudy == true">
            <div class="cloudy">
              <span class="cloud"></span>
              <span class="cloudx"></span>
            </div>
          </v-card>
          <!-- hiệu ứng tuyết -->
          <v-card class="body" style="background-color: #fff" v-if="snow == true">
            <div class="breezy">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span class="cloudr"></span>
            </div>
          </v-card>
          <!-- hiệu ứng mưa -->
          <v-card class="body" style="background-color: #fff" v-if="rain == true">
            <div class="stormy">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span class="snowe"></span>
              <span class="snowex"></span>
              <span class="stick"></span>
              <span class="stick2"></span>
            </div>
          </v-card>
          <!-- hiệu ứng tối -->
          <v-card class="body" style="background-color: #fff" v-if="night == true">
            <div class="night">
              <span class="moon"></span>
              <span class="spot1"></span>
              <span class="spot2"></span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-card v-if="hour == true">
      <v-data-table
        dense
        :headers="headers1"
        :items="desserts1"
        item-key="time"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="hour = false">
            close
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-card v-if="day == true">
      <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      >
        <template v-slot:top>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="day = false">
            close
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
    city: "Hà nội",
    NhietDo: 30,
    rain: 50,
    wind: 30,
    cloud: false,
    humidity: 60,
    hour: false,
    day: false,
    desserts1: [
      {
        time: "1 am",
        temperature: 159,
        humidity: 6.0,
        wind: 24,
        chance_rain: 4.0,
      },
      {
        time: "2 am",
        temperature: 237,
        humidity: 9.0,
        wind: 37,
        chance_rain: 4.3,
      },
      {
        time: "3 am",
        temperature: 262,
        humidity: 16.0,
        wind: 23,
        chance_rain: 6.0,
      },
      {
        time: "4 am",
        temperature: 305,
        humidity: 3.7,
        wind: 67,
        chance_rain: 4.3,
      },
      {
        time: "5 am",
        temperature: 356,
        humidity: 16.0,
        wind: 49,
        chance_rain: 3.9,
      },
      {
        time: "6 am",
        temperature: 375,
        humidity: 0.0,
        wind: 94,
        chance_rain: 0.0,
      },
      {
        time: "7 am",
        temperature: 392,
        humidity: 0.2,
        wind: 98,
        chance_rain: 0,
      },
      {
        time: "8 am",
        temperature: 408,
        humidity: 3.2,
        wind: 87,
        chance_rain: 6.5,
      },
      {
        time: "9 am",
        temperature: 452,
        humidity: 25.0,
        wind: 51,
        chance_rain: 4.9,
      },
      {
        time: "10 am",
        temperature: 518,
        humidity: 26.0,
        wind: 65,
        chance_rain: 7,
      },
    ],
    headers1: [
      {
        text: "Thời gian",
        align: "start",
        sortable: false,
        value: "time",
      },
      { text: "Nhiệt độ", value: "temperature" },
      { text: "Độ ẩm", value: "humidity" },
      { text: "Tốc độ gió", value: "wind" },
      { text: "Khả năng mưa", value: "chance_rain" },
    ],
    headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
  }),
};
</script>
<style scope>
.app-bar {
  background-color: rgb(255, 185, 127);
  margin-top: 5%;
}
.app {
  background-color: rgb(127, 187, 255);
}
.body {
  background-color: #010a3d;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
@import url("https://fonts.googleapis.com/css?family=Raleway");
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCFPrEHJA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
.hot {
  position: absolute;
  top: 10%;
  left: 40%;
  background: linear-gradient(
    to top right,
    rgba(255, 87, 34, 1) 0%,
    rgba(251, 140, 0, 1) 100%
  );
  box-shadow: 1px 1px 30px rgba(255, 111, 0, 1);
}
.sun {
  position: absolute;
  left: 30%;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: linear-gradient(
    to bottom left,
    rgba(255, 235, 59, 1) 0%,
    rgba(249, 168, 37, 1) 90%
  );
  box-shadow: 1px 1px 30px rgba(255, 160, 0, 1);
  animation: inex 3s infinite linear;
}

.sunx {
  position: absolute;
  top: 30%;
  left: 45%;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #fff;
  opacity: 0.2;
}
.cloudy {
  position: absolute;
  top: 25%;
  left: 45%;
  background: linear-gradient(
    to top right,
    rgba(63, 81, 181, 1) 0%,
    rgba(3, 155, 229, 1) 40%
  );
  box-shadow: 1px 1px 30px rgba(2, 119, 189, 1);
}
.cloud {
  position: absolute;
  top: 5%;
  left: 70%;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  background-color: rgba(129, 212, 250, 1);
  box-shadow: 1px 1px 30px rgba(0, 151, 167, 1);
  animation: move 3s infinite linear;
}
.cloudx {
  position: absolute;
  top: 23%;
  left: 55%;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  background-color: rgba(129, 212, 250, 1);
  animation: move 3s infinite linear;
}
.stormy {
  position: absolute;
  top: 25%;
  left: 70%;
  background: linear-gradient(
    to top right,
    rgba(117, 117, 117, 1) 0%,
    rgba(33, 33, 33, 1) 90%
  );
  box-shadow: 1px 1px 30px rgba(33, 33, 33, 1);
}
.stormy li {
  position: absolute;
  list-style: none;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #777;
  box-shadow: 1px 1px 30px #555;
  animation: fall 3s infinite linear;
  opacity: 0;
}
.stormy li:nth-child(1) {
  top: 0%;
  left: 100%;
}

.stormy li:nth-child(2) {
  top: 5%;
  left: 90%;
}

.stormy li:nth-child(3) {
  top: -10%;
  left: 80%;
  animation-delay: 2s;
}

.stormy li:nth-child(4) {
  top: 10%;
  left: 100%;
  animation-delay: 2s;
}

.stormy li:nth-child(5) {
  top: 20%;
  left: 80%;
  animation-delay: 0.5s;
}

.stormy li:nth-child(6) {
  top: 35%;
  left: 70%;
  background-color: #bbb;
  animation-delay: 0.5s;
}

.stormy li:nth-child(7) {
  top: 23%;
  left: 60%;
  background-color: #bbb;
  animation-delay: 0.8s;
}

.stormy li:nth-child(8) {
  top: 5%;
  left: 70%;
  background-color: #bbb;
  animation-delay: 0.8s;
}
.snowe {
  position: absolute;
  top: 60%;
  left: 40%;
  width: 40px;
  height: 40px;
  border-radius: 60px;
  background-color: #ddd;
}
.snowex {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #bbb;
}
.stick {
  position: absolute;
  top: 60%;
  left: 40%;
  width: 3px;
  height: 15px;
  transform: rotate(-45deg);
  background-color: #333;
  z-index: -10;
}
.stick2 {
  position: absolute;
  top: 60%;
  left: 70%;
  width: 3px;
  height: 15px;
  transform: rotate(45deg);
  background-color: #333;
  z-index: -10;
}
.breezy {
  position: absolute;
  top: 60%;
  left: 30%;
  background: linear-gradient(
    to top right,
    rgba(156, 204, 101, 1) 0%,
    rgba(38, 198, 218, 1) 50%
  );
  box-shadow: 1px 1px 30px rgba(38, 198, 218, 1);
}
.cloudr {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  background-color: rgba(96, 125, 139, 1);
  box-shadow: 1px 1px 30px rgba(84, 110, 122, 1);
  animation: flash 1.5s infinite linear;
}

.breezy li {
  position: absolute;
  list-style: none;
  width: 2px;
  height: 7px;
  border-radius: 10%;
  background-color: #eee;
  opacity: 0;
  animation: fall 3s infinite linear;
  transform: rotate(25deg);
}
.breezy li:nth-child(1) {
  top: 10%;
  left: 95%;
}

.breezy li:nth-child(2) {
  top: 5%;
  left: 83%;
  animation-delay: 0.3s;
}

.breezy li:nth-child(3) {
  top: 4%;
  left: 87%;
  animation-delay: 0.6s;
}

.breezy li:nth-child(4) {
  top: 15%;
  left: 70%;
  animation-delay: 1s;
}

.breezy li:nth-child(5) {
  top: 10%;
  left: 75%;
}

.night {
  position: absolute;
  top: 60%;
  left: 60%;
  background: linear-gradient(
    to bottom right,
    rgba(63, 81, 181, 1) 0%,
    rgba(171, 71, 188, 1) 70%
  );
  box-shadow: 1px 1px 30px rgba(81, 45, 168, 1);
}
.moon {
  position: absolute;
  top: -10%;
  left: 65%;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: rgba(255, 241, 118, 1);
  box-shadow: 1px 1px 30px rgba(224, 224, 224, 1);
}
.spot1 {
  position: absolute;
  top: 0%;
  left: 85%;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #777;
}
.spot2 {
  position: absolute;
  top: 30%;
  left: 75%;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #777;
}

.night li {
  position: absolute;
  list-style: none;
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: #fff;

  transform: rotate(45deg);
}
.night li:nth-child(1) {
  top: 30%;
  left: 65%;
}

.night li:nth-child(2) {
  top: 35%;
  left: 53%;
}

.night li:nth-child(3) {
  opacity: 0;
  top: 20%;
  left: 75%;
  width: 2px;
  height: 2px;
  animation: meteor 1.5s infinite linear;
  animation-delay: 0.6s;
}

.night li:nth-child(4) {
  top: 5%;
  left: 50%;
}

.night li:nth-child(5) {
  opacity: 0;
  top: 20%;
  left: 55%;
  width: 1px;
  height: 15px;
  animation: meteor 1.5s infinite linear;
}

@keyframes inex {
  50% {
    opacity: 0.4;
  }
  60% {
    opacity: 1;
  }
}
@keyframes move {
  50% {
    transform: translateX(-10px);
  }
}
@keyframes fall {
  10% {
    opacity: 0.8;
  }

  50% {
    opacity: 1;
    transform: translate(-10px, 30px);
  }
  100% {
    transform: translate(-25px, 70px);
  }
}
@keyframes flash {
  48% {
    background-color: rgba(96, 125, 139, 1);
  }
  50% {
    background-color: #fff;
  }
  55% {
    background-color: rgba(96, 125, 139, 1);
  }
  57% {
    background-color: #fff;
  }
}
@keyframes meteor {
  10% {
    opacity: 1;
  }
  80% {
    left: 10%;
    top: 75%;
    opacity: 0;
  }
}
</style>
