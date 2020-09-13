<template>
  <div class="container">
   
    <div class="col-lg-4 col-md-6">
      <div class="flex-center">
        <div class="single_place">
          <div class="thumb">
            <img :src="'http://localhost:8000/img/' + product.productImg" alt="product img" />
            <a href="#" class="prise">${{product.productPrice}}</a>
          </div>
          <div class="place_info">
            <a href="destination_details.html">
              <h3>{{product.productName}}</h3>
            </a>
            <p>{{product.productDes}}</p>
          </div>
          <div class="d-flex justify-content-between">
            <span class="d-flex justify-content-center align-items-center">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <a href="#">(20 Review)</a>
            </span>
          </div>
          <div class="newsletter_btn">
            <button class="boxed-btn3"><popup /></button>
            <button v-if="1==1" @click="updateProduct" class="boxed-btn3">Delete</button>
          </div>
        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
import axios from "axios";
import productComponent from "../../../components/products";
import popup from "../../../components/popup";
export default {
  data() {
    return {
      product: {},
      id: this.$route.params.id,
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `http://localhost:8000/product/product/${this.id}`
      );
      this.product = res.data;
      console.log(this.product);
    } catch (error) {
      console.log(error);
    }
  },
  head() {
    return {
      title: "Amazon Product",
    };
  },
  methods: {
    updateProduct() {
      alert("lokaaaa");
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