<template>
  <div class="bg-[#111827] min-h-screen">
    <Suspense>
      <template #default>
        <div>
          <NavBar />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ExperienceAndSkills />
          <LatestProjSection />
          <CertificationsSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head'; // Import useHead

// Import Components Asynchronously
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'));
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const TestimonialsSection = defineAsyncComponent(() => import('@/components/TestimonialsSection.vue'));
const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'));
const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'));
const CertificationsSection = defineAsyncComponent(() => import('@/components/Certifications.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));
import loadingSpinner from './components/loadingSpinner.vue';

// Define SEO meta tags using useHead
useHead({
  title: 'Dinushi Dhananjani - DevOps Engineer & Cloud Specialist',
  meta: [
    {
      name: 'description',
      content: 'Dinushi Dhananjani is a skilled DevOps engineer specializing in AWS, CI/CD pipelines, Docker, Linux, and Terraform. Hire me for scalable and efficient cloud solutions.',
    },
    {
      name: 'keywords',
      content: 'DevOps, AWS, CI/CD, Docker, Linux, Terraform, Cloud Engineer, Dinushi Dhananjani',
    },
    {
      property: 'og:title',
      content: 'Dinushi Dhananjani - DevOps Engineer & Cloud Specialist',
    },
    {
      property: 'og:description',
      content: 'Dinushi Dhananjani is a skilled DevOps engineer specializing in AWS, CI/CD pipelines, Docker, Linux, and Terraform. Hire me for scalable and efficient cloud solutions.',
    },
    {
      property: 'og:image',
      content: 'https://dinushi94.github.io/dinushidhananjani/assets/og-image.jpg', // Replace with your OpenGraph image URL
    },
    {
      property: 'og:url',
      content: 'https://dinushi94.github.io/dinushidhananjani/',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Dinushi Dhananjani - DevOps Engineer & Cloud Specialist',
    },
    {
      name: 'twitter:description',
      content: 'Dinushi Dhananjani is a skilled DevOps engineer specializing in AWS, CI/CD pipelines, Docker, Linux, and Terraform. Hire me for scalable and efficient cloud solutions.',
    },
    {
      name: 'twitter:image',
      content: 'https://dinushi94.github.io/dinushidhananjani/assets/og-image.jpg', // Replace with your Twitter image URL
    },
  ],
});
</script>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}
</style>