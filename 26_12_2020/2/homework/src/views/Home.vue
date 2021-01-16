<template>
  <div class="uk-padding-large" uk-grid>
    <div v-for="product of products" :key="product.id" class="uk-width-1-3@m">
      <div class="uk-card uk-card-default ">
        <div class="uk-card-header">
          <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
              <img class="uk-border-circle" width="50" height="50" src="https://picsum.photos/id/30/50/50">
            </div>
            <div class="uk-width-expand">
              <h3 class="uk-card-title uk-margin-remove-bottom"><router-link :to="{ name: 'product', params: { id: product.id }}">{{product.name}}</router-link></h3>
              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
          </div>
        </div>
        <div class="uk-card-body">
          <p>{{product.description}}</p>
        </div>
        <div class="uk-card-footer">
          <a href="#" class="uk-button uk-button-text">{{product.price}} руб.</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import * as products from '../data/products'
export default {
  name: 'Home',
  data(){
    return {
      products: []
    }
  },
  mounted() {
    this.products = products.products;
  }
}
</script>
