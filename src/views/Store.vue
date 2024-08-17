<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4" v-for="product in data.products" :key="product.id">
        <v-card>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-text>{{ product.price }}</v-card-text>
          <v-card-actions>
            <v-btn @click="data.addToCart(product)">Add To Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
  </v-container>
  <v-toolbar class="fixed-bar px-2">
    <v-btn block class="bg-green" @click="openCart">
      Cart (${{ data.calculateTotal() }})
    </v-btn>
    <v-bottom-sheet v-model="cart" inset>
      <v-card class="text-center">
        <v-card-text>
          <v-btn
            variant="text"
            @click="cart = !cart"
          >
            close
          </v-btn>

          <div v-if="data.countCartItems === 0" class="text-red">
            No items in the cart.
          </div>

          <div v-for="item in data.getCartItems">
            {{ item }}
          </div>
        </v-card-text>
        <v-card-actions style="height: 64px;" class="py-4">
          <v-btn
            :disabled="data.countCartItems < 1"
            block
            class="bg-green"
          >
            Order via Whatsapp (${{ data.calculateTotal() }})
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
  </v-toolbar>
</template>

<script setup>
import { useShoppingStore } from '../stores'
import { ref } from 'vue'

const data = useShoppingStore()
const cart = ref(false)

const openCart = () => {
  cart.value = !cart.value
  console.log('open cart')
}

</script>

<style scoped>
.fixed-bar {
  position: fixed;
  position: -webkit-fixed; /* for Safari */
  bottom: 0;
  z-index: 2;
}
</style>
