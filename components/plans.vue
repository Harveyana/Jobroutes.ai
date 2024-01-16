<template>
    <div class="w-full p-5 flex flex-col sm:flex-row space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 items-center sm:items-start justify-center">
            <!-- Free Plan -->
            <div class="w-full sm:w-[23%] h-fit space-y-4 lg:space-y-0 lg:h-full p-5 sm:p-3 bg-white flex flex-col items-start justify-between rounded-2xl">
              <img
                
                src='~/assets/img/tag1.svg'
                class="w-14 mb-2"
                alt=""
              />

              <div class="flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl extraboldCabinet"
                >
                  Free
                </h1>
                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
                  Great for starters
                </p>
              </div>

              <h1 class="text-lg extraboldCabinet"
                >
                  5 <span class="text-sm cabinet text-gray-500 paragraph mx-1">resumes /cover letters daily</span>
              </h1>

              <h1 class="text-xl extraboldCabinet "
                >
                Free <span class="text-sm  cabinet text-gray-500 paragraph">/ 7 days</span>
              </h1>

              <baseButton
               @click="$emit('openWaitForm')"
               class="border-2 hover:bg-black hover:text-white border-black w-full px-6 py-3 bg-white text-black flex items-center justify-center"
              >
                <span>Get started</span>
              </baseButton>

            </div>

            
            <!-- NEWBIE PLAN -->
    
            <div class="w-full sm:w-[23%] h-fit space-y-4 lg:space-y-0 lg:h-full p-5 sm:p-3 bg-white flex flex-col items-start justify-between rounded-2xl">
              <img
                
                src='~/assets/img/tag2.svg'
                class="w-14 mb-2"
                alt=""
              />

              <div class="flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl extraboldCabinet"
                >
                  Newbie
                </h1>
                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
                  Best bet to find entry-level roles
                </p>
              </div>

              <h1 class="text-lg extraboldCabinet"
                >
                  10 <span class="text-sm cabinet text-gray-500 paragraph mx-1">resumes /cover letters daily</span>
              </h1>

              <div class="flex flex-col space-y-2">
                <h1 class="text-xl extraboldCabinet "
                  >
                  4,000 NGN <span class="text-sm  cabinet text-gray-500 paragraph">/ month(save up to 35%)</span>
                </h1>

                <h1 class="text-xl text-gray-500 line-through extraboldCabinet "
                  >
                  6,000 NGN
                </h1>
              </div>
              

              <baseButton
               class="border-2 hover:bg-black hover:text-white mt-3 border-black w-full px-6 py-3 my-9 lg:my-12 bg-white text-black flex items-center justify-center"
              >
                <span>Upgrade</span>
              </baseButton>

            </div>

            <!-- MID LEVEL PLAN -->

            <div class="w-full sm:w-[23%] h-fit space-y-4 lg:space-y-0 lg:h-full p-5 sm:p-3 bg-white flex flex-col items-start justify-between rounded-2xl">
              <img
                
                src='~/assets/img/tag3.svg'
                class="w-14 mb-2"
                alt=""
              />

              <div class="flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl extraboldCabinet"
                >
                 Mid-Level
                </h1>
                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
                  Covers for competitive job offers
                </p>
              </div>

              <h1 class="text-lg extraboldCabinet"
                >
                  10 <span class="text-sm cabinet text-gray-500 paragraph mx-1">resumes /cover letters daily</span>
              </h1>

              <div class="flex flex-col space-y-2">
                <h1 class="text-xl extraboldCabinet "
                  >
                  7,000 NGN <span class="text-sm  cabinet text-gray-500 paragraph">/ month(save up to 45%)</span>
                </h1>

                <h1 class="text-xl text-gray-500 line-through extraboldCabinet "
                  >
                  15,000 NGN
                </h1>
              </div>
              

              <baseButton
               class="border-2 hover:bg-black hover:text-white mt-3 border-black w-full px-6 py-3 my-9 lg:my-12 bg-white text-black flex items-center justify-center"
              >
                <span>Upgrade</span>
              </baseButton>

            </div>

            <!-- SENIOR TALENT -->

            <div class="w-full sm:w-[23%] p-5 sm:p-3 bg-white space-y-4 flex flex-col items-start justify-start rounded-2xl">
              <img
                
                src='~/assets/img/tag4.svg'
                class="w-14 mb-2"
                alt=""
              />

              <div class="flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl extraboldCabinet"
                >
                 Senior Talent
                </h1>
                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
                  Supports better engagement
                </p>
              </div>

              <h1 class="text-lg extraboldCabinet"
                >
                  10 <span class="text-sm cabinet text-gray-500 paragraph mx-1">resumes /cover letters daily</span>
              </h1>

              <div class="flex flex-col space-y-2">
                <h1 class="text-xl extraboldCabinet "
                  >
                  15,000 NGN <span class="text-sm  cabinet text-gray-500 paragraph">/ quarter(save up to 50%)</span>
                </h1>

                <h1 class="text-xl text-gray-500 line-through extraboldCabinet "
                  >
                  30,000 NGN
                </h1>
              </div>
              

              <baseButton
               class="border-2 hover:bg-black hover:text-white mt-3 border-black w-full px-6 py-3 my-9 lg:my-12 bg-white text-black flex items-center justify-center"
              >
                <span>Upgrade</span>
              </baseButton>

            </div>
        </div>
  </template>
  <script setup lang="ts">
  
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



</style>