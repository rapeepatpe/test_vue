<template>
  <div class="home">
    <v-row no-gutters>
      <!-- Img -->
      <v-col class = "d-flex justify-center align-center ">
        <v-img contain height="100vh" src="../assets/singinLogo.png" max-height="1024"
        max-width="1000"></v-img>
        
      </v-col>

      <!-- sign in -->
      <v-col class="d-flex justify-center align-center ">
        <v-card width="500" height="500" elevation="0" class="ma-16 ">
          <h1 class ="mb-5">Sign In</h1>
          <h5>Welcome Back! Please login to your Account!</h5>

          <v-card-text class="mt-16 pt-8 " >
            <v-text-field
              class="mb-16 custom-placeholer-color"
              v-model="email"
              label = "Email"
              placeholder="Enter your Email"
              :rules="rules"
              prepend-icon="mdi-email"
              hide-details="auto"
              :value="email"
            
              
            ></v-text-field>
            <v-text-field
              class="custom-placeholer-color"
              label="Password"
              placeholder="Enter your Password"
              :rules="rules"
              prepend-icon="mdi-lock"
              :value="password"
              :type="show ?'text': 
              'password'"
              :append-icon="show ?'mdi-eye':'mdi-eye-off'"   
              @click:append="show=!show">
              type="password"
              hide-details="auto"
            ></v-text-field>
            <v-row justify="space-around" style="height:100px"  >
              <v-checkbox
                class="my-auto"
                v-model="ex4"
                label="Remember me"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
             
              <v-btn text small to="/forgetpass" class="my-auto">Forgot Password?</v-btn>
             
            </v-row>
          </v-card-text>
          <v-row justify="space-around">
            <v-btn to="/signup" class="rounded-lg pink" elevation="10" dark min-height="60" min-width="210" large>
              Sign Up
            </v-btn>
            <v-btn to="/login" class="rounded-lg light-blue" elevation="10" dark  min-height="60" min-width="210" large>
              Login
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    email: "",
    password: "",
  }),
  components: {},
  data() {
    return {
       show:false
          }
       }
     

  
};
</script>

<style>
.home {
  max-height: 100vh !important;
}
.custom-placeholer-color input::placeholder {
  color: #383e6b!important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: #383e6b;
  opacity: 1;
}

.v-list__group__header__prepend-icon .v-icon {
    color: red;
}  

</style>
