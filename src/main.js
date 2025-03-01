import { createApp } from 'vue';
import App from './App.vue';
import { createHead } from '@vueuse/head'; // Import createHead

// Create the Vue app instance
const app = createApp(App);

// Use @vueuse/head for managing meta tags
const head = createHead();
app.use(head);

// Mount the app to the DOM
app.mount('#app');