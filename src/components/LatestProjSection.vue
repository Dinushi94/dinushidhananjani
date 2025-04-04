<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <!-- Section Title and Category Filters -->
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white"> My Latest Projects</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button 
                        class="hover:text-primary" 
                        v-for="category in ['all', 'web development', 'Mobile App', 'DevOps', 'Research']"
                        :key="category" 
                        @click="selectedCategory = category"
                    >
                        {{ category }}
                    </button>
                </div>
            </div>

            <!-- Project Grid -->
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <!-- Project Image with Overlay -->
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
                        :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover' }">
                        <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                            hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                            <!-- Link to Project Website -->
                            <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="project.webURL" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" data-slot="icon"
                                    class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                            </a>
                            <!-- Link to Project GitHub/GitLab -->
                            <a class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="project.gitURL" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" data-slot="icon"
                                    class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Project Details -->
                    <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ project.title }}</h3>
                        <p class="text-[#ADB7BE]">{{ project.description }}</p>
                        <div class="flex flex-wrap p-2.5">
                            <div v-for="technology in project.technologies" :key="technology"
                                class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                                style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                                <p class="px-1 py-2">{{ technology }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Project Data
const Projects = ref([

{
        id: 6,
        category: 'web development',
        image: new URL('@/assets/PhotoGalleryImage.png', import.meta.url).href, // Photo gallery image
        title: 'Photo Gallery Portfolio',
        description: 'A responsive photo gallery portfolio built with Next.js and Tailwind CSS, featuring image optimization and lightbox functionality.',
        technologies: ['Next.js', 'Tailwind CSS', 'Image Optimization', 'Responsive Design'],
        gitURL: 'https://github.com/Dinushi94/studio-light',
        webURL: 'https://yourphotogallery.example.com'
    },
    {
    id: 7,
    category: 'web development',
    image: new URL('@/assets/developer-portfolio-screenshot.png', import.meta.url).href,
    title: 'Developer Portfolio',
    description: 'A modern developer portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and project showcase.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Dark Mode'],
    gitURL: 'https://github.com/Dinushi94/nextJS-Protfolio',
    webURL: 'https://yourportfolio.example.com'
},

    {
        id: 1,
        category: 'DevOps',
        image: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', // Server monitoring image
        title: 'Server Metrics Monitoring with Zabbix',
        description: 'AWS EC2 and On-premises server metrics monitored via Zabbix.',
        technologies: ['AWS EC2', 'Linux', 'Zabbix'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        category: 'DevOps',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', // Data visualization image
        title: 'Logs Monitoring with Elasticsearch',
        description: 'Deployed Elasticsearch and Kibana on AWS instance and created a simple movie search engine using Elasticsearch.',
        technologies: ['AWS EC2', 'Linux', 'Elasticsearch', 'Kibana'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 3,
        category: 'DevOps',
        image: 'https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80', // Cloud infrastructure image
        title: 'Automated Infrastructure Deployment with Terraform, Docker, and CI/CD',
        description: 'Automated infrastructure deployment using Terraform, Docker, and CI/CD pipelines with GitHub Actions.',
        technologies: ['Terraform', 'Docker', 'AWS EC2', 'AWS ECR', 'AWS VPC', 'AWS IAM', 'GitHub Workflows'],
        gitURL: 'https://gitlab.com/dinushidhananjani/my-project',
        webURL: ''
    },
    {
        id: 4,
        category: 'web development',
        image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80', // Calendar or HR image
        title: 'Leave Management Service',
        description: 'A web-based leave management system for tracking employee leave requests.',
        technologies: ['React', 'Express', 'Node.js', 'MongoDB'],
        gitURL: 'https://github.com/Dinushi94/comin-leave-management-service',
        webURL: ''
    },
    {
        id: 5,
        category: 'Research',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', // Cybersecurity or gamification image
        title: 'Cybersecurity Awareness Among Sri Lankans',
        description: 'Research on the effectiveness of gamified learning approaches to improve cybersecurity awareness in Sri Lanka.',
        technologies: ['Gamification', 'Cybersecurity', 'Research'],
        gitURL: '',
        webURL: ''
    },
   
]);

// Category Filter Logic
const selectedCategory = ref('all');
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => project.category.toLowerCase() === selectedCategory.value.toLowerCase());
});
</script>

<style scoped>
/* Custom Styles */
.overlay {
    transition: background-color 0.5s ease;
}
</style>