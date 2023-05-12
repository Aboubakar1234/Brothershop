<template>
  <div class="registration">
    <h2>Log_in</h2>
    <form @submit.prevent="submitForm">
      <input type="email" v-model="user.email" placeholder="Email" required/>
      <input type="password" v-model="user.password" placeholder="Password" required/>
      <input type="submit" value="Register"/>
    </form>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      events: null,
      user: {
        email: '',
        password: ''
      }  
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
    
    // Ici, vous pouvez appeler une fonction pour soumettre les données du formulaire à votre serveur
    // Par exemple :
    // axios.post('/api/register', this.user)
    //   .then(response => {
    //     // Gérer la réponse du serveur
    //   })
    //   .catch(error => {
    //     // Gérer les erreurs
    //   });
    console.log("Successfuly submit");
    }
  }
}
</script>

<style scoped>

 
  .events {
    display: flex;
    flex-direction: column;;
    align-items: center;
  }
  
  .registration {
    margin-top: 2em;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:30ch;
    margin-left:38%;
    margin-top: 10%;
    background-color:lightblue;
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
  </style>