import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { init as initServices } from '@/services';
import App from './App.vue';
import router from '@/router';

initServices(import.meta.env.VITE_APP_API_URL);

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');
