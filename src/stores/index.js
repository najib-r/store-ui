import { defineStore } from 'pinia'
import menu from '../data/menu'

export const useShoppingStore = defineStore('shopping', {
  state: () => {
    return {
      products: menu.map(menu => ({...menu, quantity: 1})),
      cartItems: [],
      cartTotal: 0
    }
  },
  getters: {
    countCartItems() {
      return this.cartItems.length
    },
    getCartItems() {
      return this.cartItems
    },
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1) {
        this.cartItems[index].quantity += 1
      } else {
        item.quantity = 1
        this.cartItems.push(item)
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1) {
        this.cartItems[index].quantity += 1
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1) {
        this.cartItems[index].quantity -= 1
        if(this.cartItems[index].quantity === 0){
          this.cartItems = this.cartItems.filter(product => product.id !== item.id)
        }
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(product => product.id !== item.id)
    },
    calculateTotal() {
      this.cartTotal = this.cartItems.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.price * object.quantity)
      }, 0)

      return this.cartTotal
    }
  },
})