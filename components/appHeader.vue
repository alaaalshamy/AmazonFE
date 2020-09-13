<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <a class="navbar-brand navLogo">Dashboard</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Add new Product</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">Add new Category</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#">Add new Owner</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/product/product">View products</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script >
import Vue from "vue";
import bootstrap from "bootstrap-vue";
import axios from "axios";
export default {
  name: "AppHeader",
};
</script

<style>
</style>
