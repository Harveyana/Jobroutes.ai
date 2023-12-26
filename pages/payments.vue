<template>
  <div class="w-full overflow-hidden">
    <Navbar color="#20DA97" @openForm="visible = true"/>
    <!-- Hero section -->
    <section id="hero" class="w-full">
      <baseSection>
        <div class="sm:hidden col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              src='~/assets/img/World-remittance.png'
              class=""
              alt=""
            />
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
            Instant Secured <span class="text-header-gradient">Global </span>Remittance
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Receive payments from anywhere effortlessly for individuals and businesses.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <baseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#0cd3ff] to-[#20DA97] border border-[#0cd3ff] text-black"
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
            <img
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              src='~/assets/img/World-remittance.png'
              class="w-3/4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='~/assets/img/pattern/ellipse-1.png'
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='~/assets/img/pattern/ellipse-2.png'
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='~/assets/img/pattern/ellipse-3.png'
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='~/assets/img/pattern/star.png'
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </baseSection>
    </section>


    <!-- Generate quick links for faster payments-->
    <section class="w-full my-12">
      <baseSection>
        <generateLink-Image class="sm:hidden mb-8" />

        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Generate quick links <br class="hidden sm:block" />
             for faster payments.
          </h2>
          <p class="paragraph">
            Give clients and customers easy and flexible payments methods including bank tranfers and card payments with just a link.
          </p>
          
        </div>
        <generateLink-Image data-aos="fade-left" class="hidden sm:block" />

      </baseSection>
    </section>

    
    <!--Cross border settlements for individuals and businesses -->
    <section class="w-full my-12">
      <baseSection>
        <usersStoryImage data-aos="fade-right" class="mb-8" />        
        <div data-aos="fade-left" class="col-span-12 lg:col-span-7 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Cross border payment solution for
             individuals and businesses
          </h2>
          <p class="paragraph">
            Enable customers to pay for goods and services anywhere in the world.
          </p>
          
        </div>
      </baseSection>
    </section>


    <!-- Multiple payment methods enabled section -->
    <section class="w-full my-12">
      <baseSection>
        <paymentMethods-Image class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Multiple payment <br class="hidden sm:block" />
             method and channels enabled.
          </h2>
          <p class="paragraph">
            Flexible payments methods including bank tranfers and card payments.
          </p>
          
        </div>
        <paymentMethods-Image data-aos="fade-left" class="hidden sm:block" />
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

    <waitlistForm :visible="visible" @cancel="visible = false"/>


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
  background: linear-gradient(169.4deg, #20DA97 -6.01%, #0cd3ff 36.87%, #20DA97 78.04%, #20DA97 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>