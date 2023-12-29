<template>
  <div class="w-full overflow-hidden">
    <Navbar color="#DAA520" @openForm="openDialog()"/>
    <!-- Hero section -->
    <section id="hero" class="w-full">
      <baseSection>
        <div class="sm:hidden col-span-12 lg:col-span-6">
          <div class="w-full">
            <!-- <img
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              src='~/assets/img/globe-Payment.png'
              class=""
              alt=""
            /> -->
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            >Sign Up Today</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Global <span class="text-header-gradient">banking</span> made easy
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Smart and secured mediums to effortlessly send and receive money for individuals and businesses.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <baseButton
            @click="visible = true"
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#0cd3ff] to-[#DAA520] border border-[#0cd3ff] text-black"
            >
              Get Started
            </baseButton>
            <baseButton
            @click="visible = true"
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#1D3160] flex items-center justify-center"
            >
              <span>Join Waitlist</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#1D3160]" />
            </baseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <!-- <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              src='~/assets/img/globe-Payment.png'
              class=""
              alt=""
            /> -->
          </div>
        </div>
        
      </baseSection>
    </section>

    
    <!--Flexible payments with virtual and physical cards -->
    <section class="w-full my-12">
      <baseSection>
        <cards-Image data-aos="fade-right" class="mb-8" />
        <div data-aos="fade-left" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Flexible Payments with  <br class="hidden sm:block" />
             Virtual and Physical Cards.
          </h2>
          <p class="paragraph">
            Instant prepaid cards and debit cards for global payments.
          </p>
          
        </div>
      </baseSection>
    </section>


    <!-- Send and Recieve section -->
    <section class="w-full my-12">
      <baseSection>
        <sendRecieve-Image class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Send and Receive <br class="hidden sm:block" />
             funds faster.
          </h2>
          <p class="paragraph">
            Bank faster on safe and secured mediums.
          </p>
          
        </div>
        <!-- <sendRecieve-Image data-aos="fade-left" class="hidden sm:block" /> -->
      </baseSection>
    </section>

    <!-- Multi-currency  support section-->
    <section class="w-full my-12">
      <baseSection>
        <!-- <buyTradeImage data-aos="fade-right" class="mb-8" /> -->
        <div data-aos="fade-left" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Multi-currency Support  <br class="hidden sm:block" />
             With IBANs.
          </h2>
          <p class="paragraph">
             Bank with multiple currencies globally
          </p>
          
        </div>
      </baseSection>
    </section>



    <div class="w-full my-10 flex justify-center">
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
    </div>
    <WaitlistForm :visible="visible" @cancel="visible = false" />

    <Footer />

  </div>
</template>
<script setup lang="ts">

const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}
     
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #0cd3ff -6.01%, #DAA520 36.87%, #DAA520 78.04%, #0cd3ff 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>