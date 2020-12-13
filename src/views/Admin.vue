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
      </v-app-bar>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
  
      <!-- nhập thông tin về thời tiết -->
      <v-card>
        <h1>Điều chỉnh nhiệt độ của ngày</h1>
        <v-form v-model="valid">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="NhietDo"
                label="Nhiệt đô"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-text-field
                v-model="humidity"
                label="Độ ẩm"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-text-field
                v-model="wind"
                label="Tốc độ gió"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-text-field
                v-model="rain"
                label="Khả năng mưa"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-select
                v-model="weather"
                :items="item"
                :rules="[(v) => !!v || 'Item is required']"
                label="Thời Tiết"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-btn color="success" class="mr-4" @click="format()"> Xác Nhận </v-btn>
        </v-form>
      </v-card>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
  
      <!-- điều chỉnh thời tiết theo giờ -->
      <v-card>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="hour"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Nhiệt độ theo giờ</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    New Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
  
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.hour"
                            label="hour"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.temperature"
                            label="temperature"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.humidity_hour"
                            label="humidity_hour (g)"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.wind_hour"
                            label="wind_hour (g)"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.chance_rain_hour"
                            label="chance_rain_hour (g)"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
  
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  <script>
  export default {
    data: () => ({
      valid: true,
      NhietDo: "",
      humidity: "",
      wind: "",
      rain: "",
      weather: null,
      item: ["Nắng", "Mưa", "Gió", "Tuyết"],
      checkbox: false,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "thời gian",
          align: "start",
          sortable: false,
          value: "hour",
        },
        { text: "Nhiệt độ ()", value: "temperature" },
        { text: "Độ ẩm (%)", value: "humidity_hour" },
        { text: "Tốc độ gió (%)", value: "wind_hour" },
        { text: "khả năng mưa (%)", value: "chance_rain_hour" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        hour: "",
        temperature: 0,
        humidity_hour: 0,
        wind_hour: 0,
        chance_rain_hour: 0,
      },
      defaultItem: {
        hour: "",
        temperature: 0,
        humidity_hour: 0,
        wind_hour: 0,
        chance_rain_hour: 0,
      },
    }),
  
    methods: {
      format() {
        switch (this.weather) {
          case "Nắng":
            this.weather = "hot";
            break;
          case "Mưa":
            this.weather = "rain";
            break;
          case "Gió":
            this.weather = "wind";
            break;
          case "Tuyết":
            this.weather = "snow";
        }
        console.log(this.weather);
        console.log(this.NhietDo);
        console.log(this.humidity);
        console.log(this.wind);
        console.log(this.rain);
      },
      initialize() {
        this.desserts = [
          {
            hour: "Frozen Yogurt",
            temperature: 159,
            humidity_hour: 6.0,
            wind_hour: 24,
            chance_rain_hour: 4.0,
          },
          {
            hour: "Ice cream sandwich",
            temperature: 237,
            humidity_hour: 9.0,
            wind_hour: 37,
            chance_rain_hour: 4.3,
          },
          {
            hour: "Eclair",
            temperature: 262,
            humidity_hour: 16.0,
            wind_hour: 23,
            chance_rain_hour: 6.0,
          },
          {
            hour: "Cupcake",
            temperature: 305,
            humidity_hour: 3.7,
            wind_hour: 67,
            chance_rain_hour: 4.3,
          },
          {
            hour: "Gingerbread",
            temperature: 356,
            humidity_hour: 16.0,
            wind_hour: 49,
            chance_rain_hour: 3.9,
          },
          {
            hour: "Jelly bean",
            temperature: 375,
            humidity_hour: 0.0,
            wind_hour: 94,
            chance_rain_hour: 0.0,
          },
          {
            hour: "Lollipop",
            temperature: 392,
            humidity_hour: 0.2,
            wind_hour: 98,
            chance_rain_hour: 0,
          },
          {
            hour: "Honeycomb",
            temperature: 408,
            humidity_hour: 3.2,
            wind_hour: 87,
            chance_rain_hour: 6.5,
          },
          {
            hour: "Donut",
            temperature: 452,
            humidity_hour: 25.0,
            wind_hour: 51,
            chance_rain_hour: 4.9,
          },
          {
            hour: "KitKat",
            temperature: 518,
            humidity_hour: 26.0,
            wind_hour: 65,
            chance_rain_hour: 7,
          },
        ];
      },
  
      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
  
      deleteItem(item) {
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
      },
  
      deleteItemConfirm() {
        this.desserts.splice(this.editedIndex, 1);
        this.closeDelete();
      },
  
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
      closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        } else {
          this.desserts.push(this.editedItem);
        }
        this.close();
      },
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Item" : "Edit Item";
      },
    },
  
    watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },
  
    created() {
      this.initialize();
    },
  };
  </script>
  
  <style scoped>
  .app {
    background-color: rgb(127, 187, 255);
  }
  </style>
  