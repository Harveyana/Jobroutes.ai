<template>
  <div class="w-full overflow-hidden bg-home pt-24 sm:pt-36">
    <Navbar color="#D6DA20" />
    <!-- Hero section -->
    <section id="hero" class="w-full">
      <div class="w-full flex flex-col items-center justify-center space-y-20">

        <div class="w-full sm:w-3/4 lg:w-3/5 items-center justify-center mt-12 space-y-6 px-6 text-center">
          
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            class="text-3xl extraboldCabinet sm:text-5xl"
          >
            Choose the JobRoutes plan that’s right for you
          </h1>
          
          <p  class="text-sm cabinet text-gray-500 paragraph text-center flex flex-row items-center justify-center ">
            Start for free, Ugrade when you <span><svg class="mx-1" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.95543 2.1743L6.96621 2.18689L6.978 2.19854L7.5332 2.74727C7.79188 3.00295 8.20812 3.00295 8.46681 2.74727L9.022 2.19854L9.03379 2.18689L9.04457 2.1743C10.2043 0.819787 12.2563 0.676153 13.6153 1.8423C14.9523 2.98954 15.235 5.41794 13.9179 7.37964C13.4607 8.06058 12.5979 8.97809 11.638 9.90519C10.6853 10.8255 9.66131 11.7322 8.90168 12.3874C8.38038 12.837 7.61692 12.8383 7.09429 12.3905C6.33011 11.7357 5.29897 10.8283 4.34004 9.9072C3.3739 8.97913 2.50637 8.06075 2.04906 7.37964C0.739652 5.42941 1.0859 2.9975 2.43219 1.8423C3.79071 0.676606 5.79522 0.819263 6.95543 2.1743Z" fill="#FF7051" stroke="#12171D" stroke-width="0.796875" stroke-linecap="round"/>
            </svg></span>it
          </p>

        </div>

        <plans/>

        <div class="w-full items-center justify-center mt-12 space-y-6 px-4 sm:px-16 text-center">
          
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            class="text-2xl extraboldCabinet sm:text-4xl"
          >
            Frequently Asked Questions
          </h1>

          <div class="w-full flex flex-col items-center justify-center" v-for="faq in faqs" :key="faq.question">
            <Faq :question="faq.question" :answer="faq.answer" :bg="faq.bg" />
          </div>
          

        </div>


      </div>
    </section>

    <Footer />

  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}

     const faqs = [
        {
          question: 'What is JobRoutes?',
          answer: 'Supports better engagement dmsjfxhvcxcvdksjbxzcxn',
          bg:'bg1',
        },
        {
          question: 'How does JobRoutes work?',
          answer: 'Supports better engagement dmsjfxhvcxcvdksjbxzcxn',
          bg:'bg2',
        },
        {
          question: 'Is JobRoutes suitable for all industries and job levels?',
          answer: 'Supports better engagement dmsjfxhvcxcvdksjbxzcxn',
          bg:'bg3',
        },
        {
          question: 'Can JobRoutes personalize resumes and cover letters?',
          answer: 'Supports better engagement dmsjfxhvcxcvdksjbxzcxn',
          bg:'bg4',
        },
      ]
</script>

<style scoped>
  h1,.cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }

.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #20DA97 -6.01%, #0cd3ff 36.87%, #20DA97 78.04%, #20DA97 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-home {
  background: url('../assets/img/pattern/home.svg');
  background-size: contain;
  background-position: center;
}

</style>