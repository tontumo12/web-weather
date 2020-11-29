<template>
  <v-container class="app">
    <v-app-bar class="app-bar">
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
    <v-card flat class="text-center">
      <p><v-icon>mdi-map-marker</v-icon> tương mai, hai bà trưng, hà nội</p>
    </v-card>
    <v-card flat>
      <v-row class="text-center">
        <v-col cols="6">
          <h1 class="display-2 font-weight-bold mb-2">Hà nội</h1>
          <h1>Nhiệt độ : 20</h1>
          <h1>Độ Ẩm: 40%</h1>
          <h1>Tốc độ gió: 20km/h</h1>
          <h1>Khả năng mưa : 50%</h1>
          <v-btn depressed color="primary" @click="hour = true"> Primary </v-btn>
        </v-col>
        <v-col cols="6">
          <v-card class="body" style="background-color: #010a3d" >
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
            <p class="rain-drop"></p>
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
    :headers="headers"
    :items="desserts"
    item-key="time"
    class="elevation-1"
  ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
    hour: false,
      desserts: [
        {
          time: '1 am',
          temperature: 159,
          humidity: 6.0,
          wind: 24,
          chance_rain: 4.0,
        },
        {
          time: '2 am',
          temperature: 237,
          humidity: 9.0,
          wind: 37,
          chance_rain: 4.3,
        },
        {
          time: '3 am',
          temperature: 262,
          humidity: 16.0,
          wind: 23,
          chance_rain: 6.0,
        },
        {
          time: '4 am',
          temperature: 305,
          humidity: 3.7,
          wind: 67,
          chance_rain: 4.3,
        },
        {
          time: '5 am',
          temperature: 356,
          humidity: 16.0,
          wind: 49,
          chance_rain: 3.9,
        },
        {
          time: '6 am',
          temperature: 375,
          humidity: 0.0,
          wind: 94,
          chance_rain: 0.0,
        },
        {
          time: '7 am',
          temperature: 392,
          humidity: 0.2,
          wind: 98,
          chance_rain: 0,
        },
        {
          time: '8 am',
          temperature: 408,
          humidity: 3.2,
          wind: 87,
          chance_rain: 6.5,
        },
        {
          time: '9 am',
          temperature: 452,
          humidity: 25.0,
          wind: 51,
          chance_rain: 4.9,
        },
        {
          time: '10 am',
          temperature: 518,
          humidity: 26.0,
          wind: 65,
          chance_rain: 7,
        },
      ],
      headers: [
        {
          text: 'Thời gian',
          align: 'start',
          sortable: false,
          value: 'time',
        },
        { text: 'Nhiệt độ', value: 'temperature' },
        { text: 'Độ ẩm', value: 'humidity' },
        { text: 'Tốc độ gió', value: 'wind' },
        { text: 'Khả năng mưa', value: 'chance_rain' },
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
.rain-drop {
  position: fixed;
  top: -100px;
  width: 1px;
  height: 100px;
  background-image: linear-gradient(to bottom, transparent, white);
}
.rain-drop:nth-child(2) {
  left: 10%;
  animation: rainFall 0.8s linear 2s infinite;
}
.rain-drop:nth-child(3) {
  left: 15%;
  animation: rainFall 0.7s linear 1s infinite;
}
.rain-drop:nth-child(4) {
  left: 35%;
  animation: rainFall 0.7s linear 0.1s infinite;
}
.rain-drop:nth-child(5) {
  left: 65%;
  animation: rainFall 0.7s linear 0.3s infinite;
}
.rain-drop:nth-child(6) {
  left: 80%;
  animation: rainFall 0.8s linear 0.9s infinite;
}
.rain-drop:nth-child(7) {
  left: 90%;
  animation: rainFall 0.6s linear 1.1s infinite;
}
.rain-drop:nth-child(8) {
  left: 82%;
  animation: rainFall 0.7s linear 0.4s infinite;
}
.rain-drop:nth-child(9) {
  left: 95%;
  animation: rainFall 0.7s linear 1s infinite;
}
.rain-drop:nth-child(10) {
  left: 53%;
  animation: rainFall 0.8s linear 0.5s infinite;
}
.rain-drop:nth-child(11) {
  left: 45%;
  animation: rainFall 0.8s linear 0.5s infinite;
}
.rain-drop:nth-child(12) {
  left: 5%;
  animation: rainFall 0.8s linear 0.2s infinite;
}
.rain-drop:nth-child(13) {
  left: 33%;
  animation: rainFall 0.8s linear 0.65s infinite;
}
.rain-drop:nth-child(14) {
  left: 66%;
  animation: rainFall 0.7s linear 0.35s infinite;
}
.rain-drop:nth-child(15) {
  left: 53%;
  animation: rainFall 0.8s linear 0.2s infinite;
}
@keyframes rainFall {
  0% {
    top: -100px;
  }
  50% {
    top: 100vh;
  }
  100% {
    top: 100vh;
  }
}
</style>
