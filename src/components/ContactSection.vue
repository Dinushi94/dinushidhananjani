<template>
    <section class="text-white mt-20" id="contact">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Let's Connect</h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be]">Have a project in mind or just want to say hello? 
                    Feel free to reach out! 
                    I'm always open to discussing new opportunities, collaborations, or simply connecting with like-minded individuals.
                </p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Email</h4>
                            <p>dinushidhananjani@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Phone</h4>
                            <p>0719518168</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin"
                                class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>LinkedIn</h4>
                            <p>https://www.linkedin.com/in/dinushi-dhananjani-891b80192/</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
            style="background: #111a3e; width: 100%;height: 100%; border-radius: 20px;
            overflow: hidden;border: 1px solid #111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
            <form class="flex flex-col p-2" data-aos="zoom-in-up" @submit.prevent="sendEmail">
                <div class="mb-6">
                    <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
                    <input type="email" id="email" v-model="formData.email" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="email@gmail.com" name="email" required>
                </div>
                <div class="mb-6">
                    <label for="subject" class="text-white block mb-2 text-sm font-medium">Name</label>
                    <input type="text" id="subject" v-model="formData.name" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Subject" name="subject" required>
                </div>
                <div class="mb-6">
                    <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
                    <input type="text" id="subject" v-model="formData.subject" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Subject" name="subject" required>
                </div>
                <div class="mb-6">
                    <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea id="message" v-model="formData.message" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about ... " name="message" required></textarea>
                </div>
                <button type="submit" class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent">
                    Send Message
                </button>
            </form>
        </div>
        <div class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 
        -translate-1/2
        "></div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

// Initialize EmailJS
emailjs.init({
  publicKey: "nYuyLlCLG9EJRefrp", // Replace with your EmailJS Public Key
});

// Form data
const formData = ref({
  email: '',
  name: '',
  subject: '',
  message: '',
});

// Send email function
const sendEmail = () => {
  // Send email to yourself (original message)
  emailjs
    .send(
      'service_8ziy81f', // Replace with your EmailJS Service ID
      'template_p0vjztk', // Replace with your EmailJS Template ID for the original message
      {
        email: formData.value.email,
        name: formData.value.name,
        subject: formData.value.subject,
        message: formData.value.message,
      },
      'nYuyLlCLG9EJRefrp' // Replace with your EmailJS Public Key
    )
    .then(
      () => {
        // Send auto-reply to the user
        emailjs
          .send(
            'service_8ziy81f', // Same or different service ID
            'template_2mjvav9', // Replace with your Auto-Reply Template ID
            {
              to_email: formData.value.email, // Send to the user's email
              name: formData.value.name,
              subject: formData.value.subject,
              message: formData.value.message,
            },
            'nYuyLlCLG9EJRefrp' // Replace with your EmailJS Public Key
          )
          .then(
            () => {
              alert('Message sent successfully! You will receive an auto-reply shortly.');
              formData.value = { email: '', name: '', subject: '', message: '' }; // Clear the form
            },
            (error) => {
              alert('Failed to send auto-reply. Please check your email address.');
            }
          );
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
};
</script>