<template>
  <v-container fluid class="mb-16">
    <v-row>
      <v-col cols="12" sm="8" md="4" v-for="product in data.products" :key="product.id">
        <v-card>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-text>{{ product.price }}</v-card-text>
          <v-card-actions>
            <v-btn @click="data.addToCart(product), snackbar = true">Add To Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
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

          <v-row>
            <v-col cols="12" sm="8" md="4" v-for="item in data.getCartItems">
              <v-card>
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>{{ item.price }}</v-card-text>
                <v-card-text>{{ item.quantity }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="data.decrementQ(item)">-</v-btn>
                  <v-btn @click="data.incrementQ(item)">+</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

        </v-card-text>
        <v-card-actions style="height: 64px;" class="py-4">
          <v-btn
            :disabled="data.countCartItems < 1"
            block
            class="bg-green"
            @click="whatsappChat"
          >
            Order via Whatsapp (${{ data.calculateTotal() }})
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
  </v-toolbar>
  <v-snackbar
    v-model="snackbar"
    location="top"
    timeout="2000"
  >
    Item added to cart!

    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { useShoppingStore } from '../stores'
import { ref, computed } from 'vue'

const data = useShoppingStore()
const cart = ref(false)
const snackbar = ref(false)

const openCart = () => {
  cart.value = !cart.value
}

const whatsappText = computed(() => {
  let text = 'Hello, here is my order:' + '\n' + '\n'
  data.getCartItems.forEach(item => {
    text += `${item.name} (${item.quantity})` + '\n'
  })
  return text
})

const whatsappChat = () => {
  const encoded = encodeURI(whatsappText.value)
  const url = `https://wa.me/?text=${encoded}`

  window.open(url, '_blank')
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
