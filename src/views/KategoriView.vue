<template>
    <div class="card-title">
      <h1>Categories</h1>
      <!-- Tampilkan daftar kategori -->
      <table class="table">
        <thead>
        <tr class="table-primary">
          <th>Kode</th>
          <th>Kategori</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody class="table-secondary">
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.kode }}</td>
          <td>{{ category.kategori }}</td>
          <td>
            <button type = "button" class = "btn btn-green mt-2"><router-link to="/edit">Edit</router-link></button>
            <button @click="deleteCategory(category.kode)" class="btn-primaryr">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
      <router-link to="/categories/add" class="btn btn-success">Add Category</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'App',
    data() {
      return {
        categories: [],
      };
    },
    methods: {
      fetchCategories() {
        axios.get('http://localhost/infobuku/selectkategori.php')
            .then(response => {
              this.categories = response.data;
            })
            .catch(error => {
              console.error(error);
            });
      },
      deleteCategory(kode) {
        if (confirm('Are you sure you want to delete this category?')) {
          axios.delete(`http://localhost/infobuku/deleteKategori.php${kode}`)
              .then(() => {
                alert('Category deleted successfully');
                this.fetchCategories();
              })
              .catch(error => {
                console.error(error);
              });
        }
      },
  
    },
    created() {
      this.fetchCategories();
    },
  };
  </script>
  
  <style>
  .card-title {
    font-family: "Berlin Sans FB Demi";
  }
  </style>
  