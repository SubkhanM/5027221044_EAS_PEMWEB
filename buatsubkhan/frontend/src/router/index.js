import { createRouter, createWebHistory } from 'vue-router';
import Form from '../views/Form.vue';
import CekStatus from '../views/cekstatus.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form,
    },
    {
      path: '/cekstatus',
      name: 'CekStatus',
      component: CekStatus,
    },
  ],
});

export default router;
