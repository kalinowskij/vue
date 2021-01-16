<template>
  <div class="uk-padding-large">
    <router-link to="/">Назад</router-link>
    <ul v-if="product" class="uk-list uk-list-striped">
      <li>ID: {{product.id}}</li>
      <li>Название: {{product.name}}</li>
      <li>Описание: {{product.description}}</li>
      <li>Цена: {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
import * as products from '../data/products'
export default {
  name: "Product",
  data(){
    return {
      product: null
    }
  },
  props: ["id"],
  mounted() {
    products.products.forEach((item) => {
      if(Number(item.id) === Number(this.$route.params.id)){
        this.product = item;
      }
    })
  }
}
</script>

<style scoped>

</style>
