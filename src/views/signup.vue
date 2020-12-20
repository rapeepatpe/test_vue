<template>
  <div class="signup">
    <v-row no-gutters>
      <!-- Img -->
      <v-col class="d-flex justify-center align-center " >
        <v-img
          contain
          height="100vh"
          src="../assets/signupLogo.png"
          max-height="1024"
          max-width="1000"
        ></v-img>
      </v-col>
      <v-col>
        <v-card width="850" height="700" elevation="0">
          <h1 class="mb-5 pt-16">Sign Up</h1>
          <h4 class="mb-8">Please complete to create Account.</h4>
           <v-card-text>
           <v-row>
            <v-col cols="5" class="mr-12">
                <v-text-field
                    class="custom-placeholer-color"
                    label="First name"
                    placeholder="Enter your First name"
                    :rules="rules"
                    hide-details="auto"
                    :value="Firstname"
                ></v-text-field>
            </v-col>
            <v-col cols="5" class="mb-12">
                <v-text-field
                    class="custom-placeholer-color"
                    label="Last name"
                    placeholder="Enter your Last name"
                    :rules="rules"
                    hide-details="auto"
                    :value="Lastname"
                ></v-text-field>
            </v-col>
          </v-row>
            <v-col cols="11" class="mb-12">
                <v-text-field
                    class="custom-placeholer-color"
                    label="Username"
                    placeholder="Enter your Username"
                    :rules="rules"
                    hide-details="auto"
                    :value="Username"
                    prepend-icon="mdi-account"
                ></v-text-field>
            </v-col>
         <v-col cols="11" class="mb-8">
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
        </v-col>
        <v-col cols="11" class="mb-12">
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
        </v-col>

        </v-card-text>
        <v-row justify="space-around" >
            <v-btn to="/login" class="rounded-lg pink" elevation="10" dark min-height="60" min-width="250" large>
              Login
            </v-btn>
            <v-btn to="/signup" class="rounded-lg light-blue" elevation="10" dark  min-height="60" min-width="250" large>
              Sign up
            </v-btn>
          </v-row>
        </v-card>
        <v-row justify="center" class="mt-12">
            <h4 class="my-auto">Already have an Account</h4>
             <v-btn text small color="primary" to="/" class="ml-2 my-auto">Sign in</v-btn>
        </v-row>
      </v-col>

       

      <!-- sign in -->
    </v-row>
  </div>
</template>

<script>
export default {
    data() {
    return {
       show:false
          }
       }
};

</script>

<style>
.custom-placeholer-color input::placeholder {
  color: #383e6b!important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: #383e6b;
  opacity: 1;
}

 

</style>