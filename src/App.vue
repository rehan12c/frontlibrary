<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!--NAVBAR PEMBUKA-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://i.pinimg.com/564x/d5/0a/5f/d50a5fbb0302caf4c2e7ba1ae3d7b993.jpg" alt="" width="40" height="44" class="d-inline-block">
      Perpustakaan
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pengunjung">Pengunjung</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Koleksi
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/kategori">Kategori</a></li>
            <li><a class="dropdown-item" href="/buku">Buku</a></li>
            <li><a class="dropdown-item" href="/peminjaman">Peminjaman Buku</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <!--NAVBAR PENUTUP-->
  </header>

  <RouterView />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>

</style>
