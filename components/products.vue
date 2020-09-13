<template>
  <div class="col-lg-4 col-md-6">
    <nuxt-link :to="'/product/'+id">
      <div  >
        <div  >
          <div class="single_place">
            <div class="thumb">
              <img :src="url +'img/'+ product.productImg" alt />
              <a href="#" class="prise">${{product.productPrice}}</a>
            </div>
            <div class="place_info">
              <a href="destination_details.html">
                <h3>{{product.productName}}</h3>
              </a>
            <p>{{product.productDes}}</p>
              <div class="rating_days d-flex justify-content-between">
                <span class="d-flex justify-content-center align-items-center">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <a href="#">(20 Review)</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "productComponent",
  props: ["id", "product"],
  data(){
    return {
      url:"http://localhost:8000/"
    }

  }
};
</script>
<style>
</style>