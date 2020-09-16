<template>
    <div class="col-lg-4 col-md-6">
      <v-card class="mx-auto my-12" max-width="374">
        <nuxt-link :to="'/product/'+id">
          <div class="single_place">
            <div class="thumb">
              <img class="img" :src="url +'img/'+ product.productImg" alt />
              <a href="#" class="prise">${{product.productPrice}}</a>
            </div>
          <nuxt-link :to="'/product/'+id">
            <v-card-title>{{product.productName}}</v-card-title>
          </nuxt-link>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <p>{{product.productDes}}</p>
            </v-row>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="yellow" dense half-increments readonly size="14"></v-rating>
            </v-row>
          </v-card-text>
          </div>

        </nuxt-link>
      </v-card>
    </div>
</template>
<script>
export default {
  name: "productComponent",
  props: ["id", "product"],
  data() {
    return {
      url: process.env.DEVHOST,
    };
  },
};
</script>
<style>
</style>