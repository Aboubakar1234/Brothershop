<template>
  <div class="shop">
    <div class="basket" >
      <h1 class="agh">AGH Shop</h1>
      <h2 >Basket:{{ basket }} $</h2>
      <p v-if="basket=== 0">Your basket is empty</p><br>
    </div>

    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="index" :class="{'product-highlighted': product.quantity == 3 ,'cheapest': product.price === cheapestPrice, 'expensive': product.price === expensivePrice, 'low-stock': product.quantity < 3 }">
        <img :src="product.photo" :alt="product.name">
        <div class="info" >
          <h3>{{ product.name }}</h3>
          

          <div class="buttons">
            <p>Q:{{ product.quantity }}</p>
            <div class="second">
              <button @click="reduce(product)" v-show="product.counter > 0">-</button>
              <p class="counter">
                {{ product.counter }}
              </p>
              <button @click="add(product)">+</button>
            </div>
          </div>

          <div class="price-add">
            <p>{{ product.price }}$</p>
            <button class="add-to-cart" >add to cart</button>
          </div>

        </div>
      </div>
    </div>
    
  </div>
</template>

<script>


import bycycle from "../assets/bycycle.jpg"
import camera from "../assets/camera.jpg"
import clock from "../assets/clock.jpg"
import clés from "../assets/clés.jpg"
import pencil from "../assets/pencil.jpg"
import shoes from "../assets/shoes.jpg"

import harmer from "../assets/harmer.jpg"
import keyboard from "../assets/keyboard.jpg"
import watch from "../assets/watch.jpg"
import casque from "../assets/casque.jpg"
import tv from "../assets/tv.jpg"
import table from "../assets/table.jpg"
import eraser from "../assets/eraser.jpg"



export default {
  name: 'ProductList',
 
  data() {
    return {
      products: [
        {
          name: "camera",
          price: 10,
          quantity: 12,
          counter:0,
          photo: camera,
          basketQuantity: 15,
        },
        {
          name: "eraser",
          price: 20,
          quantity: 9,
          counter:0,
          photo: eraser,
          basketQuantity: 12,
        },
        {
          name: "keyboard",
          price: 15,
          quantity: 13,
          counter:0,
          photo: keyboard,
          basketQuantity: 13,
        },
        {
          name: "bycycle",
          price: 25,
          quantity: 11,
          counter:0,
          photo: bycycle,
          basketQuantity: 8,
        },
        {
          name: "pencil",
          price: 30,
          quantity: 10,
          counter:0,
          photo: pencil,
          basketQuantity: 9,
        },
        {
          name: "shoes",
          price: 12,
          quantity: 8,
          counter:0,
          photo: shoes,
          basketQuantity: 10,
        },
        {
          name: "table",
          price: 18,
          quantity: 14,
          counter:0,
          photo: table,
          basketQuantity: 8,
        },
        {
          name: "clock",
          price: 22,
          quantity: 12,
          counter:0,
          photo: clock,
          basketQuantity: 9,
        },
        {
          name: "tv",
          price: 22,
          quantity: 10,
          counter:0,
          photo: tv,
          basketQuantity: 12,
        },
        {
          name: "watch",
          price: 22,
          quantity: 12,
          counter:0,
          photo: watch,
          basketQuantity: 8,
        },{
          name: "harmer",
          price: 22,
          quantity: 8,
          counter:0,
          photo: harmer,
          basketQuantity: 13,
        },{
          name: "Keys",
          price: 22,
          quantity: 15,
          counter:0,
          photo: clés,
          basketQuantity: 14,
        },
        {
          name: "casque",
          price: 40,
          quantity: 15,
          counter:0,
          photo: casque,
          basketQuantity: 14,
        },
        
      ],
      
      cart: [],
      basket: 0,
      
    };
  },

  productClass() {
    return {
      product: true,
      "out-of-stock": this.product.quantity === 0,
      "low-stock": this.product.quantity > 0 && this.product.quantity <= 3,
      "high-stock": this.product.quantity > 3,
      
    };
  },

  methods: {

    getClickedItem(value){
      this.clickedItem= value;
    },

    add(product) {
      
      if (product.quantity !=0){
        product.counter += 1;
        product.quantity -= 1;
        this.basket += product.price 
      }
    },
      

    reduce(product) {
     
      product.counter -= 1;
      product.quantity += 1
      this.basket -= product.price
    },

  },
    
  

}


  





</script>
<style>

.agh{
text-align: left;
}

.product-highlighted {
background-color: #ff5100;
}
.shop{
overflow:scroll;
display:flex ;
flex-direction:column;
margin-left:1%;
}
.products{
display: grid;
grid-template-columns: auto auto auto auto auto auto;
grid-template-rows: auto auto auto auto;  
grid-gap: 20px;
justify-content: flex-end;
}

.product{
border: 1px solid black;
padding: 10px;
background:azure;

}
.product img {
max-width: 50%;
height: 50;
align-self: center;
}

.info {
margin-top: 10px;
text-align: center;
}
.price-add{
display: flex;
flex-direction: row;
}
.buttons{
display: flex;
flex-direction: row;
}

.price-add{

align-items: last baseline;

}
.add-to-cart{
margin-left: 45px;
}
.second{
display: flex;
flex-direction: row;
align-items: last baseline;
margin-left: 60px; 
}

.out-of-stock {
background-color: #ffcccc;
}

.low-stock {
background-color: #e43522;
}

.high-stock {
background-color: #ccffcc;
}


</style>
