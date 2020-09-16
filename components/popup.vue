<template>
  <div  class="col-6 col-md-4">
              <v-btn @click.stop="dialog = true" text color="cyan darken-1">update</v-btn>

    <v-dialog persistent v-model="dialog" max-width="50%">

      <v-card class="p-5 mx-auto" >
        <v-card-title class="headlin --text-darken" >
              <span style="color:#1EC6B6" class= "text--darken">Update Product {{product.productName}}</span>
        </v-card-title>
        <v-row align="center">
          <v-col justify="space-around">
            <v-form ref="form">
              <v-text-field
                v-model="productName"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
              <v-textarea
                autocomplete="productDes"
                v-model="productDes"
                label="product Descripttion"
              ></v-textarea>
              <v-file-input
                :rules="rules"
                ref="file"
                v-model="files"
                @change="selectFile"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an Image"
                prepend-icon="mdi-image"
                Hide-Input="true"
                label="Avatar"
              ></v-file-input>
              <v-text-field label="Amount" v-model="productPrice" prefix="$"></v-text-field>
              <v-select
                v-model="selectedOwner"
                :items="owner"
                :item-text="'_id'"
                :item-value="'_id'"
                :rules="[v => !!v || 'Item is required']"
                label="Owners"
                required
              ></v-select>
              <v-select
                :items="category"
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
          <v-btn color="green darken-1" text @click="dialog = false ">Disagree</v-btn>

          <v-btn color="green darken-1" text @click="sendUpdateData">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "popup",
  props: ["id", "product"],
  data() {
    return {
      dialog: false,
      host: process.env.DEVHOST,
      category: [],
      owner: [],
      valid: true,
      productName: this.product.productName,
      productDes: this.product.productDes,
      productImg: "",
      selectedCategory: "",
      selectedOwner: "",
      files: undefined,
      productPrice: this.product.productPrice,
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
      update: null,
    };
  },
  async created() {
    try {
      const categoryRes = await axios
        .get(`${this.host}category/categories/`)
        .then((categoryRes) => (this.category = categoryRes.data));
    } catch (error) {
      console.log(error);
    }
    try {
      const ownerRes = await axios
        .get(`${this.host}owner/owners`)
        .then((ownerRes) => (this.owner = ownerRes.data));
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
    async sendUpdateData() {
      let formData = new FormData();
      formData.append("productName", this.productName);
      formData.append("productImg", this.files);
      formData.append("productDes", this.productDes);
      formData.append("productCategory", this.selectedCategory);
      formData.append("productOwner", this.selectedOwner);
      formData.append("productPrice", this.productPrice);
      console.log(formData);
      try {
        const updateRes = await axios
          .put(`${this.host}product/editProduct/${this.id}`, formData)
          .then(
            (updateRes) => {
              this.update = updateRes.data;
              this.$emit("updated", {
                state: true,
                mess: "successfully updated",
              });
              this.dialog = false;
            },
            (err) => {
              this.$emit("NotUpdated ", {
                state: false,
                mess: "can't be updated",
              });
            }
          );
      } catch (error) {
        this.$emit("NotUpdated ", { state: false, mess: "can't be updated" });

        console.log(error);
      }
    },
    selectFile() {
      console.log(this.files);
    },
  },
};
</script>

<style>
.application--dialog-opened{
overflow: hidden;
}
</style>
