<template>
  <v-app >
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" prepend-icon="person" type="text"></v-text-field>
                  <v-text-field id="password" label="Password" name="password" prepend-icon="lock" type="password">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {

}
</script>
<style>
  a {
    text-decoration: none
  }

  .loginBtn {
    box-sizing: border-box;
    position: relative;
    margin: 3em;
    padding: 0 20px 0 46px;
    border: none;
    text-align: center;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.3em;
    font-size: 18px;
    color: #FFF;

  }

  .loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }

  .loginBtn:focus {
    outline: none;
  }

  .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgb(0, 100, 250);
  }

  .loginBtn--google {
    /*font-family: "Roboto", Roboto, arial, sans-serif;*/
    background: #DD4B39;

  }

  .loginBtn--google:before {
    border-right: #BB3F30 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  }

  .loginBtn--google:hover,
  .loginBtn--google:focus {
    background: #E74B37;
  }
</style>
