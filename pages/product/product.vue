<template>
  <div class="container">
    <div class="row">
      <productComponent
        v-for="product in result "
        :key="product._id"
        :id="product._id"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import productComponent from "../../components/products";
import axios from "axios";
export default {
  data() {
    return {
      result: [],
    };
  },
  async created() {
    try {
     await axios.get("http://localhost:8000/product/products")
    .then(res => this.result = res.data);
      
      console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  },
  head() {
    return {
      title: "Amazon Admin",
    };
  },
  components: {
    productComponent,
  },
};
</script>

<style>


</style>