<template>
  <div class="card-title">
    <h1>Buku</h1>
    <div class="col-lg-2 align-content-center">
    </div>
    <router-link to="/books/add" class="btn btn-primary">Tambah Buku</router-link>

    <div class="container my-4">
      <div class="row gx-md-5">
        <table class="table">
          <thead class="tab-content">
            <tr class="table-primary">
              <th scope="col">Kode Buku</th>
              <th scope="col">Judul</th>
              <th scope="col">Pengarang</th>
              <th scope="col">Penerbit</th>
              <th scope="col">Tahun</th>
              <th scope="col">Harga</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="table-secondary">
            <tr v-for="book in books" :key="book.id">
              <td>{{ book.kode }}</td>
              <td>{{ book.judul }}</td>
              <td>{{ book.pengarang }}</td>
              <td>{{ book.penerbit }}</td>
              <td>{{ book.tahun }}</td>
              <td>{{ book.harga }}</td>
              <td>
                <button type = "button" class = "btn btn-green mt-2"><router-link to="/editbook">Edit</router-link></button>
                <button @click="deleteBook(book.kode)" class="btn-primary">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      books: [],
    };
  },
  methods: {
    fetchBooks() {
      axios.get('http://localhost/infobuku/selectbuku.php')
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteBook(kode) {
      if (confirm('Are you sure you want to delete this book?')) {
        axios.delete(`http://localhost/infobuku/deletebuku.php/${kode}`)
          .then(response => {
            console.log(response.data);
            this.fetchBooks();
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>

<style>
.table {
  background-color: #bc968f;
}
.tab-content {
  background-color: #bc968f;
}
.card-title {
  font-family: "Berlin Sans FB Demi";
}


</style>
