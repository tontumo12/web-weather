<template>
    <v-container>
        <v-app-bar class="app-bar">
            <!-- logo -->
            <v-img alt="weather logo" class="shrink logo" contain src="../assets/weather.jpg" min-width="65"
                width="65" />
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

        <v-card>
            <v-form v-model="valid">
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name"
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name"
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name"
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
                        </v-col>
                    </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    export default {
      data: () => ({
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        checkbox: false,
      }),
  
      methods: {
        validate () {
          this.$refs.form.validate()
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
      },
    }
  </script>