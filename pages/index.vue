<template>
  <div class="w-full overflow-hidden bg-home pt-24 sm:pt-36">
    <Navbar color="#D6DA20" @openForm="openDialog()" />
    <!-- Hero section -->
    <section id="hero" class="w-full">
      <div class="w-full flex flex-col items-center justify-center">

        <div class="w-full sm:w-3/4 lg:w-3/5 items-center justify-center mt-12 space-y-4 px-6 text-center">
          
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            class="text-5xl extraboldCabinet sm:text-7xl"
          >
            Tailored <span>Applications</span> for Dream Roles
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
            Say goodbye to generic applications! Our cutting-edge AI analyzes your uploaded resume and job description, crafting bespoke CVs and cover letters optimized for your dream job.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col items-center justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            
            <baseButton
              class="max-w-full px-6 py-4 my-9 lg:my-12 bg-black text-white flex items-center justify-center"
            >
              <span>Get started for free</span>
            </baseButton>
          </div>
        </div>
        <div class="w-4/5">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              src='~/assets/img/dashboard.svg'
              class="w-full mb-12 sm:mb-24"
              alt=""
            />
        </div>
      
      </div>
    </section>
    

    <!-- Whats Possible with Jobin -->
    <section id="Talents" class="w-full bg-black">
      <div class="w-full flex flex-col items-center justify-center px-4 lg:px-16 py-16 space-y-8">
        <div data-aos="fade-left" class="w-full space-y-4">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            class="text-xl text-white extraboldCabinet sm:text-3xl"
          >
          What’s possible with JobIn?
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
            Craft Tailored CVs & Cover Letters, Analyze Your Resume's Impact.
          </p>
        </div>

        <Features />
      </div>
    </section>

    <!-- How It Works -->
    <HowItWorks />


    <!-- Get hired without borders -->
    <section id="hero" class="w-full bg-white p-4 sm:p-12 space-y-8">
      <div class="w-full flex flex-col items-center justify-center rounded-xl bg-[#fefbd1]">

        <div class="w-full sm:w-3/4 lg:w-3/5 items-center justify-center py-36 space-y-4 px-6 text-center">
          
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            class="text-5xl extraboldCabinet sm:text-7xl"
          >
            GET <span>HIRED</span> WITHOUT BORDERS
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
            Our dream is for global digital talents to live and work anywhere seamlessly. That means working without borders: moving overseas, seamlessly, conveniently, and — eventually — as a digital Expat.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col items-center justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            
            <baseButton
              class="max-w-full px-6 py-4 my-3 bg-black text-white flex items-center justify-center"
            >
              <span>Get started for free</span>
            </baseButton>
          </div>
        </div>
        
      
      </div>

      <div class="w-full space-y-8 sm:space-y-0 space-x-0 sm:space-x-8 flex flex-col sm:flex-row items-center justify-center">

        <!-- Know your chances with our resume analysis -->
        <div class="w-full sm:w-1/2 bg-[#cbfeed] flex flex-col items-center justify-center rounded-2xl">
          <div data-aos="fade-left" class="w-full mt-4 sm:mt-0 px-8 pt-10 flex flex-col items-start justify-start space-y-3 lg:space-y-6 mb-6 lg:mb-0">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="500"
              class="text-2xl text-black font-bold extraboldCabinet lg:text-4xl"
              >
              Know Your Chances with Our Resume Analysis
            </h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class=" text-xs lg:text-sm cabinet text-black paragraph">
              Our powerful Resume Analyzer evaluates your resume, providing insights on its effectiveness and your likelihood of landing your dream job. Gain valuable feedback instantly
            </p>
            <span class="flex flex-row text-xs lg:text-sm space-y-4 items-center hover:text-gray-500 justify-center">
              Analyze your resume 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
            </span>
          </div>
          <div class="w-full flex flex-row items-end justify-end">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              src='~/assets/img/resume.svg'
              class="w-[60%]"
              alt=""
            />
          </div>
        </div>

        <!-- Know your chances with our resume analysis -->
        <div class="w-full sm:w-1/2 bg-[#fdeac9] flex flex-col items-center justify-center rounded-2xl">
          <div data-aos="fade-left" class="w-full mt-4 sm:mt-0 px-8 pt-10 flex flex-col items-start justify-start space-y-3 lg:space-y-6 mb-6 lg:mb-0">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="500"
              class="text-2xl text-black font-bold extraboldCabinet lg:text-4xl"
              >
              Know Your Chances with Our Resume Analysis
            </h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class=" text-xs lg:text-sm cabinet text-black paragraph">
              Our powerful Resume Analyzer evaluates your resume, providing insights on its effectiveness and your likelihood of landing your dream job. Gain valuable feedback instantly
            </p>
            <span class="flex flex-row text-xs lg:text-sm space-y-4 items-center hover:text-gray-500 justify-center">
              Explore salary calculator 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
            </span>
          </div>
          <div class="w-full flex flex-row items-end justify-end">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              src='~/assets/img/accounting.svg'
              class="w-[70%] py-7 lg:py-12"
              alt=""
            />
          </div>
        </div>
        
      </div>
    </section>

    

    <!-- <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div> -->
    <waitlistForm :visible="visible" @cancel="visible = false"/>

    <Footer />

  </div>
</template>
<script setup lang="ts">
const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}
      
    const accordions = [
        {
          title: 'What is Vyre Africa?',
          description:
            "Vyre Africa is a platform that offers global secured multi-currency accounts for individuals and businesses across borders to instantly send, receive and swap fiats and crypto currencies seamlessly.",
        },
        {
          title: 'Why Vyre?',
          description:
            "We provide cross border banking,global remittance and instant assets exchange supporting major fiats and crypto currencies",
        },
        {
          title: 'How can I benefit from Vyre Africa?',
          description:
            "Vyre Africa offers the convenience of global secured multi-currency accounts, allowing individuals and businesses to conduct instant transactions, receive money globally, and swap between fiat and cryptocurrencies effortlessly. Additionally, Vyre Africa issues IBANs for fiat currency accounts, enhancing the versatility of your account",
        },
        {
          title: 'What currencies does Vyre Africa support?',
          description:
            "Vyre Africa supports multiple currencies, providing users with the flexibility to transact in various fiat and cryptocurrencies. Each fiat currency account comes with its own IBAN.",
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