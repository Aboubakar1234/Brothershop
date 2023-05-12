<template>
  <nav>
    
    <ul class="nav">
      <li class="shopLogo"><router-link to="/">Broda-Shop</router-link> </li>
      <li><router-link to="/login">Login</router-link>|</li>
      <li><router-link to="/register">Sign up</router-link></li>
    </ul> 
  
  </nav>
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.nav{
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: space-between;
  position: fixed;
  border-radius:20% 20% 20% 20% ;
 

}


nav {
  padding: 20px;
  border:2px solid #000;
  background-color:antiquewhite;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 38%;
  


  
  
  
  
}
.shopLogo li{
  margin-right: 10px;
}

.shopLogo{
  margin-right: auto;
}

</style>
