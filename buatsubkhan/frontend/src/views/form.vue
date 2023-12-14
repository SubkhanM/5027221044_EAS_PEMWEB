<template>
  <div class="registration-container">
    <h2>Form Registrasi Lomba</h2>
    <form @submit.prevent="submitForm" class="registration-form">
      <div class="form-group">
        <label for="nama">Nama:</label>
        <input type="text" id="nama" v-model="formData.nama" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="asal_sekolah">Asal Sekolah:</label>
        <input type="text" id="asal_sekolah" v-model="formData.asal_sekolah" required />
      </div>
      <div class="form-group">
        <label for="tanggal_pendaftaran">Tanggal Pendaftaran:</label>
        <input type="date" id="tanggal_pendaftaran" v-model="formData.tanggal_pendaftaran" required />
      </div>
      <button type="submit">Daftar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nama: '',
        email: '',
        asal_sekolah: '',
        tanggal_pendaftaran: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const apiUrl = 'http://localhost:3000/api/pendaftaran';

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        const responseData = await response.json();

        console.log('Data Pendaftaran Berhasil Dikirim:', responseData);

        // Reset form setelah pengiriman
        this.formData = {
          nama: '',
          email: '',
          asal_sekolah: '',
          tanggal_pendaftaran: '',
        };
      } catch (error) {
        console.error('Terjadi kesalahan saat mengirim data:', error);
      }
    },
  },
};
</script>

<style scoped>
.registration-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.registration-form {
  max-width: 400px;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
