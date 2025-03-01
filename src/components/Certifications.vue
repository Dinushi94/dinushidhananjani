<!-- src/components/Certifications.vue -->
<template>
    <section class="text-white mt-20" id="certifications">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white text-left mb-8">
                Professional <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certifications</span>
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div v-for="certification in Certifications" :key="certification.id"
                    class="rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 hover:scale-105 transition-transform duration-300">
                    <div class="flex items-center justify-center mb-4">
                        <img :src="certification.image" :alt="certification.name" class="w-20 h-20 object-contain" />
                    </div>
                    <h3 class="text-2xl font-semibold text-white text-center">{{ certification.name }}</h3>
                    <p class="text-gray-400 text-center mt-2">{{ certification.issuer }}</p>
                    <p class="text-gray-400 text-center mt-2">{{ certification.date }}</p>
                    <div class="flex justify-center mt-4">
                        <a :href="certification.link" target="_blank" class="text-primary hover:text-white transition-colors duration-300">
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const Certifications = ref([
    {
        id: 1,
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: 'Issued Jan 2023',
        image: 'https://img.icons8.com/color/96/000000/amazon-web-services.png', // Example AWS icon
        link: 'https://example.com/certificate-link' // Replace with your certificate link
    },
    {
        id: 2,
        name: 'Terraform Associate',
        issuer: 'HashiCorp',
        date: 'Issued Mar 2023',
        image: 'https://img.icons8.com/color/96/000000/terraform.png', // Example Terraform icon
        link: 'https://example.com/certificate-link' // Replace with your certificate link
    },
    {
        id: 3,
        name: 'Certified Kubernetes Administrator',
        issuer: 'Cloud Native Computing Foundation',
        date: 'Issued May 2023',
        image: 'https://img.icons8.com/color/96/000000/kubernetes.png', // Example Kubernetes icon
        link: 'https://example.com/certificate-link' // Replace with your certificate link
    }
]);
</script>