import express from 'express';
import payload from 'payload';
import cors from 'cors'; // Import middleware CORS
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Gunakan middleware CORS
app.use(cors());

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Tambahkan rute express kustom di sini
  // Misalnya, rute untuk login atau logout

  app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
  });
};

start();
