<template>
    <v-card class="col-6 col-md-4">
      <v-card-title class="headline">Add New Product</v-card-title>
      <v-row>
        <v-col>
          <v-form>
            <v-text-field
              v-model="productName"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
            <v-textarea autocomplete="productDes" v-model="productDes" label="product Descripttion"></v-textarea>
            <v-file-input
              :rules="rules"
              ref="file"
              v-model="files"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an Image"
              prepend-icon="mdi-image"
              Hide-Input="true"
              label="Avatar"
            ></v-file-input>
            <v-text-field label="Amount" v-model="productPrice" prefix="$"></v-text-field>
            <v-text-field label="In Stock" v-model="productStockNum"></v-text-field>
            <v-select
              v-model="selectedOwner"
              :items="ownerList"
              :item-text="'_id'"
              :item-value="'_id'"
              :rules="[v => !!v || 'Item is required']"
              label="Owners"
              required
            ></v-select>

            <v-select
              :items="categoryList"
              v-model="selectedCategory"
              label="Categories"
              :item-text="'categoryName'"
              :item-value="'_id'"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-select>
          </v-form>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="saveProduct">Save</v-btn>
      </v-card-actions>
    </v-card>
</template>
<script>
import axios from "axios";
import popup from "./popup";
export default {
  //   name: "addProduct",
  data() {
    return {
      host: process.env.DEVHOST,
      categoryList: [],
      ownerList: [],
      valid: true,
      productName: "",
      productDes: "",
      productImg: "",
      selectedCategory: "",
      selectedOwner: "",
      files: undefined,
      productPrice: 0,
      productStockNum: 0,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      posted: null,
    };
  },

  async created() {
    try {
      const categoryRes = await axios
        .get(`${this.host}category/categories/`)
        .then((categoryRes) => {
          this.categoryList = categoryRes.data;
          console.log(this.categoryList);
        });
    } catch (error) {
      console.log(error);
    }
    try {
      const ownerRes = await axios
        .get(`${this.host}owner/owners`)
        .then((ownerRes) => {
          this.ownerList = ownerRes.data;
          console.log(this.ownerList);
        });
    } catch (error) {
      console.log(error);
    }
    // this.$vuetify.theme.isDark = true;
  },

  methods: {
    async saveProduct() {
      let formData = new FormData();
      formData.append("productName", this.productName);
      formData.append("productImg", this.files);
      formData.append("productDes", this.productDes);
      formData.append("productCategory", this.selectedCategory);
      formData.append("productOwner", this.selectedOwner);
      formData.append("productStockNum", this.productStockNum);
      formData.append("productPrice", this.productPrice);
      console.log(formData);
      try {
        const postRes = await axios
          .post(`${this.host}product/newProduct`, formData)
          .then(
            (postRes) => {
              this.posted = postRes.data;
                this.$emit("productSaved", {
                  state: true,
                  mess: "successfully updated",
                });
                this.$router.push('/')

            },
            (err) => {
              //   this.$emit("NotUpdated ", {
              //     state: false,
              //     mess: "can't be updated",
              //   });
            }
          );
      } catch (error) {
        // this.$emit("NotUpdated ", { state: false, mess: "can't be updated" });

        console.log(error);
      }
    },
  },
};
</script>

<style>
.card {
  width: 90%;
  max-width: 700px;
  max-height: 100%;
}
</style>