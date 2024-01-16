<template>
  <div class="w-full overflow-hidden bg-home pt-24 sm:pt-36">
   <Navbar color="#D6DA20" @openForm="openDialog()" />
    <!-- Hero section -->
    <section id="hero" class="w-full">
       
      <BaseSection>

        <div class="col-span-12 flex flex-col items-center justify-center">

            <div class=" w-full sm:w-3/4 flex flex-col items-center justify-center mt-6 space-y-4 px-4 text-center">
              <!-- Desktop -->
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="500"
                class="hidden lg:flex text-5xl extraboldCabinet sm:text-7xl"
              >
              Find Dream Roles, Access Global Opportunities.
              </h1>
              <!-- Mobile -->
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="500"
                class=" lg:hidden text-3xl extraboldCabinet sm:text-7xl"
              >
                Tailored <span>Applications</span> for Dream Roles
              </h1>
              <!-- desktop -->
              <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="hidden lg:flex text-lg w-[60%] cabinet text-gray-500 paragraph">
                Craft tailored applications for global dream roles with seamless access to limitless career opportunities.
              </p>
              <!-- Mobile -->
              <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="lg:hidden text-sm w-[90%] cabinet text-gray-500 paragraph">
                Say goodbye to generic applications! Our cutting-edge AI analyzes your uploaded resume and job description, crafting bespoke CVs and cover letters optimized for your dream job.
              </p>

              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="700"
                class="flex flex-col items-center justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
              >
                
                <baseButton
                @click="openDialog()"
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
                  class="hidden lg:flex w-full mb-12 sm:mb-24"
                  alt=""
                />
                <img
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="500"
                  src='~/assets/img/mobiledash.svg'
                  class="lg:hidden w-full h-full mb-12 sm:mb-24"
                  alt=""
                />
            </div>
      
      </div>
      </BaseSection>
      
    </section>
    

    <!-- Whats Possible with Jobin -->
    <section id="Talents" class="w-full">
      <BaseSection>
        <div class="col-span-12 bg-black flex flex-col items-center justify-center px-4 lg:px-16 py-16 space-y-8">
          <div data-aos="fade-left" class="w-full space-y-4">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="500"
              class="text-xl text-white extraboldCabinet sm:text-3xl"
            >
            What’s possible with JobRoutes?
            </h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
              Craft tailored Resumes and Cover Letters to land your next job offer abroad.
            </p>
          </div>

          <Features />

        </div>
      </BaseSection>
      
    </section>

    <!-- How It Works -->
    <section class="w-full ">
      <BaseSection>
        <HowItWorks />
      </BaseSection>
    </section>
    


    <!-- Get hired without borders -->
    <section id="hero" class="w-full">
      <BaseSection class="bg-white">
        <div class="col-span-12 bg-[#fefbd1] m-4 sm:m-10 flex flex-col items-center justify-center rounded-xl">

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
              @click="openDialog()"
                class="max-w-full px-6 py-4 my-3 bg-black text-white flex items-center justify-center"
              >
                <span>Get started for free</span>
              </baseButton>
            </div>
          </div>
          
        
        </div>


      </BaseSection>
      

      
    </section>

    
    <!-- FAQS -->
    <section class="w-full">
      <BaseSection class="bg-white">
        <div class="col-span-12 items-center justify-center space-y-6 px-4 sm:px-16 text-center pt-10 pb-20">
          
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
      </BaseSection>

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
      
      const faqs = [
        {
          question: 'What is JobRoutes?',
          answer: 'JobRoutes is an AI-powered platform designed to assist job seekers in crafting tailored resumes and cover letters for various job applications. It streamlines the process by analyzing job descriptions and generating customized application materials.',
          bg:'bg1',
        },
        {
          question: 'How does JobRoutes work?',
          answer: 'JobRoutes utilizes advanced AI algorithms to scan and analyze job postings. By understanding key requirements and skills sought by employers, it assists in generating resumes and cover letters that match the job criteria.',
          bg:'bg3',
        },
        {
          question: 'Is JobRoutes suitable for all industries and job levels?',
          answer: 'Yes, JobRoutes caters to diverse industries and job levels. It adapts to different roles, from entry-level positions to executive roles, ensuring the generated materials align with specific job requirements.',
          bg:'bg5',
        },
        {
          question: 'Can JobRoutes personalize resumes and cover letters?',
          answer: "Absolutely! JobRoutes allows for customization by incorporating user-provided information, such as work experiences, skills, and achievements. It tailors content to highlight an individual's unique qualifications",
          bg:'bg2',
        },
        {
          question: 'How accurate are the resumes and cover letters generated by JobRoutes?',
          answer: "JobRoutes emphasizes accuracy by aligning content with the job description. While it provides a solid foundation, users can further refine and personalize the generated materials to ensure relevance and precision.",
          bg:'bg6',
        },
        {
          question: 'How can I get started with JobRoutes?',
          answer: "Signing up for JobRoutes is simple! Visit our platform, create an account, and begin generating tailored resumes and cover letters for your job applications instantly.",
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