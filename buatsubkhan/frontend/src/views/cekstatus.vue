<template>
    <div>
      <h2>Check Status Pendaftaran</h2>
      <form @submit.prevent="checkStatus">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
        <button type="submit">Check Status</button>
      </form>
  
      <div v-if="status !== null">
        <p>Status Pendaftaran: {{ status }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const status = ref(null);
  
  const checkStatus = async () => {
  try {
    const apiUrl = `http://localhost:3000/api/pendaftaran/status?email=${email.value}`;
    const response = await fetch(apiUrl);
    const responseData = await response.json();

    console.log('Respons dari API:', responseData);

    status.value = responseData.status;
  } catch (error) {
    console.error('Terjadi kesalahan saat memeriksa status:', error);
  }
};

  </script>
  
  <style scoped>
  /* Tambahkan styling sesuai kebutuhan */
  form {
    margin-top: 20px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
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
  
  div {
    margin-top: 20px;
  }
  </style>
  