<template>
<v-app>
    <v-card class="mx-auto my-12" max-width="374">
      <div class="single_place">
        <div class="thumb">
          <img :src="host+'img/' + product.productImg" alt="product img" />
          <a href="#" class="prise">${{product.productPrice}}</a>
        </div>
      </div>
      <v-card-title align="center">{{product.productName}}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-btn color="purple" text>Product Description</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <p>{{product.productDes}}</p>
                </v-row>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-row>
        <v-row align="left" class="mx-0">
          <v-rating :value="5" color="yellow" dense half-increments readonly size="14"></v-rating>
        </v-row>
      </v-card-text>

      <v-card-actions >
        <v-spacer></v-spacer>
        <popup :id="id" :product="product"  @updated="updateProduct" />
        <v-btn @click="updateProduct"  text color="pink darken-1">Delete</v-btn>
                
        <v-spacer></v-spacer>

      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";
import productComponent from "../../../components/products";
import popup from "../../../components/popup";

export default {
  data() {
    return {
      show: false,
      product: {},
      id: this.$route.params.id,
      host: process.env.DEVHOST,
    };
  },
  async created() {
    this.fetch();
  },
  head() {
    return {
      title: "Amazon Product",
    };
  },
  methods: {
    async fetch() {
      try {
        const res = await axios.get(`${this.host}product/product/${this.id}`);
        this.product = res.data;
        console.log(this.product);
      } catch (error) {
        console.log(error);
      }
    },
    updateProduct(data) {
      this.fetch();
    },
  },
  components: {
    productComponent,
    popup,
  },
};
</script>

<style>
</style>