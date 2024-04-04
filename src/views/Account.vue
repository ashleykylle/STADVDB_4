<template>
  <div class="mainPage">
    <div v-if="isLoggedIn">
      <h2>Welcome, {{ loggedInUser.username }}</h2>
    </div>
    <div v-else class="frame">
      <div class="itemDisplay">
        <h2>Login</h2>
        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <input type="text" id="username" v-model="username" placeholder="Username" required>
          </div>
          <div class="form-group">
            <input type="password" id="password" v-model="password" placeholder="Password" required>
          </div>
          <button type="submit" class="button">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false,
      loggedInUser: {}
    };
  },
  methods: {
    login() {
      //Entirely a sample, please update this accordingly with the correct db credentials
      //This also needs to use localStorage cookie whichever depends on backend for session authorization.
      if (this.username === 'admin' && this.password === '123') {
        this.isLoggedIn = true;
        this.fetchUserDetails();
      } else {
        alert('Invalid credentials. Please try again.');
      }
    },
    fetchUserDetails() {
      this.loggedInUser = {
        username: this.username
      };
    }
  }
};
</script>

<style scoped>
.mainPage {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #f2f2f2;
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

input[type="text"],
input[type="password"] {
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
