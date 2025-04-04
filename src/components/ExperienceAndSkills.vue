<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
                <h2 class="text-4xl font-bold text-white text-left mb-4">My 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                </h2>
                <div class="mt-8" v-for="skill in Skills" :key="skill.id">
                    <div class="flex items-end justify-between" data-aos="fade-right">
                        <h4 class="font-semibold uppercase text-white">
                            {{ skill.name }}
                        </h4>
                    </div>
                    <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                        <div class="h-1 rounded-full bg-primary" :style="`width :${skill.width}`"></div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">My Experiences</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experinces" :key="element.id"
                    class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
                    >
                    <div class="w-1/4">
                        <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer">
                    </div>
                    <div class="w-3/4 pl-4">
                        <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {{ element.role }}
                        </h3>
                        <p class="text-white">{{ element.company }}</p>
                        <p class="text-white">{{ element.date }}</p>
                        <p class="text-white">{{ element.description }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const Skills = ref([
    {
        id: 1,
        name: 'Linux',
        width: '90%'
    },
    {
        id: 2,
        name: 'HTML/CSS',
        width: '95%'
    },
    {
        id: 3,
        name: 'AWS',
        width: '85%'
    },
    {
        id: 4,
        name: 'C#',
        width: '80%'
    },
    {
        id: 5,
        name: 'SQL',
        width: '88%'
    },
    {
        id: 6,
        name: 'Docker',
        width: '82%'
    },
    {
        id: 7,
        name: 'ReactJS',
        width: '75%'
    },
    {
        id: 8,
        name: 'Kibana',
        width: '78%'
    },
    {
        id: 9,
        name: 'Terraform',
        width: '85%'
    },
    {
        id: 10,
        name: 'VMware',
        width: '80%'
    }
]);

const Experinces = ref([
    {
        id: 1,
        role: 'TechOps Engineer',
        company: 'CodeGen International',
        date: '2023',
        description: 'Ensure system availability and performance by proactive Monitoring (AppDynamics, Grafana, and Cloudwatch). Engage with production calls and provide a resolution within SLAs (Slack). Release and Patch management. Managing and handling CI/CD (Jenkins & Rundeck). Implemented a Grafana dashboard for checking health and Exceptions in local AWS ECS and EC2 (AWS). Server and Application troubleshooting (AWS, Docker, Linux, Tomcat, Hazelcast, OracleDB). Engage with clients to support production deployments and other non-prod deployments (Cloudwatch, OracleDB, AWS).'
    },
    {
        id: 2,
        role: 'Intern Observability Engineer',
        company: 'Pearson Lanka',
        date: '2022',
        description: 'Worked under the Monitoring engineering team. Gained experience with AWS, Zabbix, New Relic, PagerDuty, and other monitoring tools. Improved Linux knowledge, scripting with Bash, and troubleshooting skills. Enhanced soft skills in leadership, teamwork, and communication. Handled daily team scrums.'
    }
]);
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>