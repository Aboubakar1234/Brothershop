<template>
    <div class="home">
  
      <div class="registration">
        <h2>Registration</h2>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="user.firstName" placeholder="First name" required/>
          <input type="text" v-model="user.lastName" placeholder="Last name" required/>
          <input type="text" v-model="user.number" placeholder="Number" required/>
          <input type="email" v-model="user.email" placeholder="Email" required/>
          <input type="password" v-model="user.password" placeholder="Password" required/>
          <input type="password" v-model="confirmPassword" placeholder="Confirm password" required/>
          <input type="submit" value="Register"/>
          <div class="registration-success" v-if="registrationSuccess">
  Registration successfully!
</div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
  
    data() {
      return {
        events: null,
        user: {
          firstName: '',
          lastName: '',
          number: '',
          email: '',
          password: ''
        },
        confirmPassword: '',
        registrationSuccess: false
      }
    },
    methods: {
      submitForm() {
        // Vérifiez que tous les champs sont remplis
      for (let field in this.user) {
        if (!this.user[field]) {
          alert("All fields are required.");
          return;
        }
      }
      // Vérifiez que les mots de passe correspondent
      if (this.user.password !== this.confirmPassword) {
        alert("The passwords do not match.");
        return;
      }
  
      axios.post('http://localhost:3000/user', this.user) // Remplacez 'http://localhost:3000/users' par l'URL de votre API
    .then(response => {
      console.log("Les données ont été enregistrées avec succès, ID de l'utilisateur: ", response.data.id);
      this.registrationSuccess = true;
    })
    .catch(error => {
      console.error("Une erreur est survenue lors de l'enregistrement des données", error);
      this.registrationSuccess = false;
    });
    console.log("Formulaire soumis avec succès");
      }
    }
  }
  </script>
  
  <style scoped>

 

  
 
  
  .registration {
    margin-top: 2em;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left:38%;
    background-color: rgba(0, 0, 0, 0);
    border-style: dashed;
    border-radius: 35px;

  }
  
  .registration input {
    margin-bottom: 1em;
    padding: 0.5em;
    font-size: 1em;
  }
  
  .registration form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .registration-success {
  margin-top: 1em;
  padding: 1em;
  border: 2px solid green;
  background-color: #eaffea;
  color: green;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  font-size: 1.2em;
}

  </style>