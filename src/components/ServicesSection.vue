<template >
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">My Services</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
            class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
            >
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div>
                        <img :src="service.icon" alt="service icon">
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import {ref} from 'vue';
const services =ref([
    {
        id:1,
        icon:'https://img.icons8.com/external-flatart-icons-outline-flatarticons/100/ffffff/external-settings-statistical-analysis-flatart-icons-outline-flatarticons.png',
        name:'DevOps Engineering',
        description:'Bridging the gap between development and operations to enable continuous integration and deployment (CI/CD). I design and implement automated workflows, ensuring smooth and efficient software delivery.'
    },
    {
        id:2,
        icon:'https://img.icons8.com/ios/100/ffffff/cloud-development.png',
        name:'Cloud Engineering',
        description:'Building and managing cloud-based infrastructure on platforms like AWS, Azure, and GCP. I specialize in deploying scalable, secure, and cost-effective cloud solutions for businesses.'
    },
    {
        id:3,
        icon:'https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/100/ffffff/external-reliability-customer-services-help-support-smashingstocks-mixed-smashing-stocks.png',
        name:'Site Reliability Engineering (SRE)',
        description:'Enhancing system reliability, scalability, and performance. I implement monitoring, incident management, and fault-tolerant architectures to ensure high availability.'
    },
    {
        id:4,
        icon:'https://img.icons8.com/ios-filled/100/ffffff/system-task.png',
        name:'Performance Monitoring & Observability',
        description:'Ensuring system health and stability using tools like Prometheus, Grafana, and Datadog. I set up monitoring, logging, and alerting to proactively detect and resolve issues.'
    },
    {
        id:5,
        icon:'https://img.icons8.com/fluency-systems-regular/100/ffffff/keyhole-shield.png',
        name:'Security & Compliance',
        description:'Implementing security best practices to protect cloud environments and applications. I focus on identity management, access controls, encryption, and compliance with industry standards.'
    },
    {
        id:6,
        icon:'https://img.icons8.com/fluency-systems-regular/100/ffffff/code.png',
        name:'Web Development ',
        description:'Building scalable web applications using modern frameworks like React, Vue.js, and backend technologies like Go, Node.js, and Python. I ensure secure, optimized, and responsive web solutions.'
    },
    ])
</script>

