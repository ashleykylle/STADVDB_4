<script setup>
import { API_URL } from '@/api/api_url'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const username = defineModel('username')
const email = defineModel('email')
const password = defineModel('password')
const confirmPassword = defineModel('confirmPassword')

const failure = ref(false)
const failedMessage = ref('')
const router = useRouter()



const submitRegister = async () => {
     if (password.value == confirmPassword.value) {
          const newUser = {
               name: username.value,
               email: email.value,
               password: password.value
          }
          const response = fetch (`${API_URL}/user/register`, {
               method: "POST", // *GET, POST, PUT, DELETE, etc.
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify(newUser)
               }).then((res) => {
                    if (!res.ok) {
                         failedMessage.value = res.text()
                    } else {
                         router.replace('/account')
                    }
               })
               .then((data) => console.log(data))
               .catch(err => failedMessage.value = err)
     } else {
          failure.value = true
          failedMessage.value = "Password not matching"
     }

}
</script>

<template>
<div class="mainPage">
     <div class="frame">
          <div class="itemDisplay">
               <h2>Register</h2>
                    <v-form fast-fail @submit.prevent="submitRegister" class="register">
                         <div class="form-group">
                              <input type="text" class="input" v-model="username" placeholder="Username" required>
                         </div>
                         <div class="form-group">
                              <input type="email" class="input" v-model="email" placeholder="email" required>
                         </div>
                         <div class="form-group">
                              <input type="password" class="input" v-model="password" placeholder="Password" required>
                         </div>
                         <div class="form-group">
                              <input type="password" class="input" v-model="confirmPassword" placeholder="Confirm Password" required>
                         </div>
                         <div v-if="failure" class="errorText"> {{ failedMessage }} </div>
                         <div v-else></div>
                         <v-btn type="submit" class="button">Register</v-btn>
                    </v-form>
               </div>
     </div>
</div>
</template>
   
<style scoped>
.mainPage {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #f2f2f2;
}
.errorText {
     color: red;
}
.frame {
  background-color: #D9D9D9;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
}

.itemDisplay {
  width: 100%;
}

h2 {
  text-align: center;
  margin-top: 10px;
  color: black;
}

.form-group {
  margin-bottom: 15px;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: black;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #355E3B;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #2A4A30;
}
</style>