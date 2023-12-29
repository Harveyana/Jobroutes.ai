<template>
        <div data-aos="fade-left" class="w-full flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-6">
          <baseButton
             @click="openFeature = 1"
              :class="openFeature == 1 ? 'max-w-full px-6 py-3 my-3 lg:my-8 bg-[#e6e7e7] text-black flex items-center justify-center':'max-w-full px-6 py-3 my-3 lg:my-8 bg-[#171c21] border-[#e6e7e7] border text-[#e6e7e7] flex items-center justify-center'"
            >
              <span>Optimized Resumes & Cover Letters</span>
          </baseButton>
          <baseButton
             @click="openFeature = 2"
             :class="openFeature == 2 ? 'max-w-full px-6 py-3 my-3 lg:my-8 bg-[#e6e7e7] text-black flex items-center justify-center':'max-w-full px-6 py-3 my-3 lg:my-8 bg-[#171c21] border-[#e6e7e7] border text-[#e6e7e7] flex items-center justify-center'"
            >
              <span>Resume Analyzer</span>
          </baseButton>
          <baseButton
             @click="openFeature = 3"
             :class="openFeature == 3 ? 'max-w-full px-6 py-3 my-3 lg:my-8 bg-[#e6e7e7] text-black flex items-center justify-center':'max-w-full px-6 py-3 my-3 lg:my-8 bg-[#171c21] border-[#e6e7e7] border text-[#e6e7e7] flex items-center justify-center'"
            >
              <span>Career Growth Resources</span>
          </baseButton>
        </div>

        <!-- FEATURE 1 -->

        <div v-if="openFeature == 1" data-aos="fade-left" class=" w-full sm:w-[90%] flex flex-col-reverse sm:flex-row items-center justify-center feature1 sm:p-8 lg:p-12 rounded-xl space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-6 lg:mb-0">
          <div data-aos="fade-left" class="w-full mt-4 sm:mt-0  px-4 flex flex-col items-start justify-start sm:w-1/2 space-y-3 lg:space-y-6 mb-6 lg:mb-0">
            <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            class="text-xl text-black font-bold extraboldCabinet lg:text-3xl"
            >
            Tailored Precision at Your Fingertips
            </h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-xs lg:text-sm cabinet text-black paragraph">
              Craft unique job application documents customized to every job description you are interested in. Our system takes relevant information from your existing Resume and the Job description to create optimized Resumes and Cover Letters that fit your target role.
            </p>
            <span class="flex text-xs lg:text-sm flex-row space-y-4 items-center hover:text-gray-500 justify-center">
              Try it out 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
            </span>
          </div>

          <div class="w-full sm:w-1/2 px-4">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              src='~/assets/img/feature1.svg'
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <!-- FEATURE 2 -->
        
        <div v-if="openFeature == 2" data-aos="fade-left" class=" w-full sm:w-[90%] flex flex-col-reverse sm:flex-row items-center justify-center feature2 sm:p-8 lg:p-12 rounded-xl space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-6 lg:mb-0">
          <div data-aos="fade-left" class="w-full mt-4 sm:mt-0  px-4 flex flex-col items-start justify-start sm:w-1/2 space-y-3 lg:space-y-6 mb-6 lg:mb-0">
            <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            class="text-xl text-black font-bold extraboldCabinet lg:text-3xl"
            >
              Insights, Instantly Unveiled
            </h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-xs lg:text-sm cabinet text-black paragraph">
              Our analyzer dissects your resume, uncovering strengths and areas for improvement. Gain valuable insights and enhance your chances of success with every submission.
            </p>
            <span class="flex flex-row text-xs lg:text-sm space-y-4 items-center hover:text-gray-500 justify-center">
              Join other better users 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
            </span>
          </div>

          <div class="w-full sm:w-1/2 px-4">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              src='~/assets/img/feature2.svg'
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <!-- FEATURE 3 -->
        
        <div v-if="openFeature == 3" data-aos="fade-left" class=" w-full sm:w-[90%] flex flex-col-reverse sm:flex-row items-center justify-center feature3 sm:p-8 lg:p-12 rounded-xl space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-6 lg:mb-0">
          <div data-aos="fade-left" class="w-full mt-4 sm:mt-0  px-4 flex flex-col items-start justify-start sm:w-1/2 space-y-3 lg:space-y-6 mb-6 lg:mb-0">
            <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            class="text-xl text-black font-bold extraboldCabinet lg:text-3xl"
            >
              Career Growth Resources
            </h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-xs lg:text-sm cabinet text-black paragraph">
              Access tailored resources aligned with your ambitions, ensuring targeted support for advancing your career
            </p>
            <span class="flex flex-row text-xs lg:text-sm space-y-4 items-center hover:text-gray-500 justify-center">
              Explore jobs 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
            </span>
          </div>

          <div class="w-full sm:w-1/2 px-4">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              src='~/assets/img/feature3.svg'
              class="w-full"
              alt=""
            />
          </div>
        </div>

  </template>
  <script setup lang="ts">
  const openFeature = ref(1)
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

.feature1 {
 background: url('../assets/img/pattern/feature1.svg');
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
}
.feature2 {
 background: url('../assets/img/pattern/feature2.svg');
 background-size: auto;
 background-position: center;
 background-repeat: no-repeat;
}

.feature3 {
 background: url('../assets/img/pattern/feature3.svg');
 background-size: auto;
 background-position: center;
 background-repeat: no-repeat;
}

</style>