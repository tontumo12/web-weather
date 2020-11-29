<template>
  <v-container>
    <!-- <v-row class="text-center" justify-lg = "12">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row> -->
    <v-row class="text-center">
      <v-col cols="6">
        <h1 class="display-2 font-weight-bold mb-2">Đà Nẵng</h1>
        <h1>Nhiệt độ : 26</h1>
        <h1>Độ Ẩm: 90%</h1>
        <h1>Tốc độ gió: 30km/h</h1>
        <h1>Khả năng mưa : 90%</h1>
      </v-col>
      <v-col cols="6">
        <v-card class="body" style="background-color: black;">
          <div class="snowflake">  ❅  </div>
  <div class="snowflake">  ❆  </div>
  <div class="snowflake">  ❅  </div>
  <div class="snowflake">  ❆  </div>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "HelloWorld",

    data: () => ({
      ecosystem: [
        {
          text: "vuetify-loader",
          href: "https://github.com/vuetifyjs/vuetify-loader",
        },
        {
          text: "github",
          href: "https://github.com/vuetifyjs/vuetify",
        },
        {
          text: "awesome-vuetify",
          href: "https://github.com/vuetifyjs/awesome-vuetify",
        },
      ],
      importantLinks: [
        {
          text: "Documentation",
          href: "https://vuetifyjs.com",
        },
        {
          text: "Chat",
          href: "https://community.vuetifyjs.com",
        },
        {
          text: "Made with Vuetify",
          href: "https://madewithvuejs.com/vuetify",
        },
        {
          text: "Twitter",
          href: "https://twitter.com/vuetifyjs",
        },
        {
          text: "Articles",
          href: "https://medium.com/vuetify",
        },
      ],
      whatsNext: [
        {
          text: "Explore components",
          href: "https://vuetifyjs.com/components/api-explorer",
        },
        {
          text: "Select a layout",
          href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
        },
        {
          text: "Frequently Asked Questions",
          href:
            "https://vuetifyjs.com/getting-started/frequently-asked-questions",
        },
      ],
    }),
  };
</script>
<style scoped>
.body {
  background-color: #e3c498;
}
.sun {
  width: 100px;
  position: absolute;
  transform: rotate(0) translateX(-150px);
}
.item-1 {
  bottom: 50%;
  left: 25%;
  animation: rot 5s linear infinite;
}
.item-2 {
  bottom: 50%;
  left: 75%;
  transform: rotate(0) translateX(-150px);
  animation: rise 5s linear infinite;
}
.item-3 {
  bottom: 20%;
  left: 50%;
  transform-origin: 150% 150%;
  animation: fail 5s linear infinite;
}
@keyframes rot {
  from {
    transform: rotate(0) translateX(-150px);
  }
  to {
    transform: rotate(360deg) translateX(-150px);
  }
}
@keyframes rise {
  from {
    transform: rotate(0) translateX(-150px) rotate(0);
  }
  to {
    transform: rotate(360deg) translateX(-150px) rotate(-360deg);
  }
}
@keyframes fail {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
