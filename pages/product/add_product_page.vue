<template>
  <addProduct @productSaved="saved" />
</template>

<script>
import addProduct from "../../components/addproduct";
export default {
  components: {
    addProduct,
  },
  methods: {
    saved(state) {
      console.log(state.state);// after emitted result of saving 
    },
  },
};
</script>

<style>
</style>