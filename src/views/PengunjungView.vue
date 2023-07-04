<template>
    <div class="card-title">
      <h1>Pengunjung</h1>
  
      <!-- Tampilkan seluruh anggota -->
      <table class="table">
        <thead>
        <tr class="table-primary">
          <th>Nomor</th>
          <th>Nama</th>
          <th>Jenis Kelamin</th>
          <th>Alamat</th>
          <th>Nomor Telepon</th>
          <th>Tanggal Terdaftar</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody class="table-secondary">
        <tr v-for="anggota in anggotaList" :key="anggota.id">
          <td>{{ anggota.nomor }}</td>
          <td>{{ anggota.nama }}</td>
          <td>{{ anggota.jenis_kelamin }}</td>
          <td>{{ anggota.alamat }}</td>
          <td>{{ anggota.no_hp }}</td>
          <td>{{ anggota.tanggal_terdaftar }}</td>
          <td>
            <button class="btn btn-primary" @click="editAnggota(anggota)">Edit</button>
            <button class="btn-primary" @click="hapusAnggota(anggota.nomor)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
  
      <!-- Form untuk menambah dan mengedit anggota -->
  
      <div class="card">
        <div class="card-body">
          <h2>{{ mode === 'tambah' ? 'Add Member' : 'Update Member' }}</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="nomor">Nomor:</label>
              <input type="text" class="form-control" v-model="anggota.nomor" required>
            </div>
            <div class="form-group">
              <label for="nama">Nama:</label>
              <input type="text" class="form-control" v-model="anggota.nama" required>
            </div>
            <div class="form-group">
              <label for="jenis_kelamin">Jenis Kelamin:</label>
              <select class="form-control" v-model="anggota.jenis_kelamin" required>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div class="form-group">
              <label for="alamat">Alamat:</label>
              <textarea class="form-control" v-model="anggota.alamat" required></textarea>
            </div>
            <div class="form-group">
              <label for="no_hp">Nomor Telepon:</label>
              <input type="text" class="form-control" v-model="anggota.no_hp" required>
            </div>
            <div class="form-group">
              <label for="tanggal_terdaftar">Tanggal Terdaftar:</label>
              <input type="date" class="form-control" v-model="anggota.tanggal_terdaftar" required>
            </div>
            <button type="submit" class="btn btn-primary" @click="submitForm">{{ mode === 'tambah' ? 'Add' : 'Simpan' }}</button>
            <button type="button" class="btn btn-secondary" @click="resetForm">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        anggotaList: [], // Daftar anggota
        anggota: {
          nomor: '',
          nama: '',
          jenis_kelamin: '',
          alamat: '',
          no_hp: '',
          tanggal_terdaftar: ''
        },
        mode: 'tambah' // Mode form: tambah atau edit
      };
    },
    mounted() {
      // Ambil seluruh anggota saat komponen di-load
      this.getAnggotaList();
    },
    methods: {
        search() {
          const number = this.searchNumber;
          axios.get(`http://localhost/infobuku/selectnomoranggota.php${number}`)
              .then(response => {
                this.searchedMember = response.data;
              })
              .catch(error => {
                console.error(error);
                this.searchedMember = null;
              });
        },
      // Ambil seluruh anggota dari backend API
      getAnggotaList() {
        axios.get('http://localhost/infobuku/selectanggota.php')
            .then(response => {
              this.anggotaList = response.data;
            })
            .catch(error => {
              console.log(error);
            });
      },
      // Reset form
      resetForm() {
        this.anggota = {
          nomor: '',
          nama: '',
          jenis_kelamin: '',
          alamat: '',
          no_hp: '',
          tanggal_terdaftar: ''
        };
        this.mode = 'tambah';
      },
      // Menambah atau mengedit anggota
      submitForm() {
        if (this.mode === 'tambah') {
          axios.post('http://localhost/infobuku/insertanggota.php', this.anggota)
              .then(response => {
                console.log(response.data);
                // Reset form dan ambil seluruh anggota setelah sukses menambahkan anggota
                this.resetForm();
                this.getAnggotaList();
              })
              .catch(error => {
                console.log(error);
              });
        } else {
          axios.put('http://localhost/infobuku/updateanggota.php' + this.anggota.nomor, this.anggota)
              .then(response => {
                console.log(response.data);
                // Reset form dan ambil seluruh anggota setelah sukses mengedit anggota
                this.resetForm();
                this.getAnggotaList();
              })
              .catch(error => {
                console.log(error);
              });
        }
      },
      // Menghapus anggota berdasarkan nomor
      hapusAnggota(nomor) {
        if (confirm('Are you sure you want to delete this member?')){
        axios.delete('http://localhost/infobuku/deleteanggota.php' + nomor)
            .then(response => {
              console.log(response.data);
              // Ambil seluruh anggota setelah sukses menghapus anggota
              this.getAnggotaList();
            })
            .catch(error => {
              console.log(error);
            });
          }
      },
      // Mengisi form dengan data anggota yang akan di-edit
      editAnggota(anggota) {
        this.anggota = { ...anggota };
        this.mode = 'edit';
      }
    }
  };
  </script>
  
  <style>
  .card-title{
    font-family: "Berlin Sans FB Demi";
  }
  </style>
  