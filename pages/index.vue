<template>
  <div class="w-full overflow-hidden">
    <Navbar color="#D6DA20" @openForm="openDialog()" />
    <!-- Hero section -->
    <section id="hero" class="w-full">
      <baseSection>
        <div class="sm:hidden col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              src='~/assets/img/h.png'
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
            True seamless <span class="text-header-gradient">finance</span> across borders
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
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#0cd3ff] to-[#D6DA20] border border-[#0cd3ff] text-white"
            >
              Get Started
            </baseButton>
            <baseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#1D3160] flex items-center justify-center" @click="visible = true"
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
              src='~/assets/img/h.png'
              class=""
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

    <section class="w-full mb-24">
      <baseSection>
        <div data-aos="fade-left" class="col-span-12 mt-4 xl:mt-20 px-[5%]">
          <userSteps/>
        </div>
      </baseSection>
    </section>

    
    <!--At your preferred price and amount -->
    <section class="w-full my-12">
      <baseSection>
        <preferredImage data-aos="fade-right" class="mb-8" />
        <div data-aos="fade-left" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Exchange Assets easily at your preferred price  <br class="hidden sm:block" />
             and amount.
          </h2>
          <p class="paragraph">
            Place exchange orders at your desired price and amount.
          </p>
          
        </div>
      </baseSection>
    </section>


    <!-- Various assets section -->
    <section class="w-full my-12">
      <baseSection>
        <buyTradeImage class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Supporting various <br class="hidden sm:block" />
             fiat and crypto assets.
          </h2>
          <p class="paragraph">
            Work with diverse crypto-currencies and fiat currencies.
          </p>
          
        </div>
        <buyTradeImage data-aos="fade-left" class="hidden sm:block" />
      </baseSection>
    </section>

    <!-- Automated instant exchange -->
    <section class="w-full my-12">
      <baseSection>
        <p2pTradeImage data-aos="fade-right" class="mb-8" />
        <div data-aos="fade-left" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Quick and Instant  <br class="hidden sm:block" />
             Operation.
          </h2>
          <p class="paragraph">
             Fast, Swift and Secured Transaction Execution.
          </p>
          
        </div>
      </baseSection>
    </section>


    <!-- Support for individuals and businesses -->
    <section class="w-full my-12">
      <baseSection>
        <usersStoryImage data-aos="fade-left" class=" sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-3xl sm:text-5xl font-semibold sm:pr-8 xl:pr-12">
            Support for <br class="hidden sm:block" />
             both individuals and businesses.
          </h2>
          <p class="paragraph">
            Work with diverse crypto-currencies and fiat currencies.
          </p>
          
        </div>
        <usersStoryImage data-aos="fade-left" class="hidden sm:block" />
      </baseSection>
    </section>

    <!-- Credit card section
    <section class="w-full my-36">
      <baseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img src='~/assets/img/nefa-cc.webp' class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">
            Introducing the <span class="text-header-gradient">NEFA</span> Credit Card
          </h2>
          <p class="paragraph">Subject to cardholder and rewards terms which will be available at application.</p>
          <ul class="space-y-4 sm:space-y-2">
            <listItem title="Up to 3% back on purchases" />
            <listItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <listItem title="No annual fee" />
          </ul>
          <baseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
            >Join the waitlist</baseButton
          >
        </div>
      </baseSection>
    </section> -->

    <!-- users Story section -->
    <!-- <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <tradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-5xl font-semibold">Users <span class="text-[#20DA97]">Story</span></h2>

          <div class="border-2  flex items-center justify-center grid grid-cols-12 rounded-[30px]">
            <div class="col-span-12 flex items-center justify-center sm:col-span-6">
              <img src='~/assets/img/cryptoVendor.png' class="w-1/2" alt="" />
            </div>
            <div class="col-span-12 space-y-4 sm:col-span-6 px-6 sm:pr-8 -mt-6 py-6 sm:mt-1">
              <p class="paragraph text-center text-xs">
                We provide premium access to crypto trading for both individuals and institutions through high liquidity,
                reliable order execution and constant uptime.
              </p>
            </div>
            
          </div>

          <div class="border-2 sm:bg-[#1D3160] flex items-center justify-center grid grid-cols-12 rounded-[30px]">
            <div class="col-span-12 flex items-center justify-center sm:col-span-6">
              <img src='~/assets/img/forexVendor.png' class="w-1/2" alt="" />
            </div>
            <div class="col-span-12 space-y-4 sm:col-span-6 px-6 sm:pr-8 -mt-6 py-6 sm:mt-1">
              <p class="paragraph sm:text-white text-center text-xs">
                We provide premium access to crypto trading for both individuals and institutions through high liquidity,
                reliable order execution and constant uptime.
              </p>
            </div>
            
          </div>

          <div class="border-2 flex items-center justify-center grid grid-cols-12 rounded-[30px]">
            <div class="col-span-12 flex items-center justify-center sm:col-span-6">
              <img src='~/assets/img/mini-Importer.png' class="w-1/2" alt="" />
            </div>
            <div class="col-span-12 space-y-4 sm:col-span-6 px-6 sm:pr-8 -mt-6 py-6 sm:mt-1">
              <p class="paragraph text-center text-xs">
                We provide premium access to crypto trading for both individuals and institutions through high liquidity,
                reliable order execution and constant uptime.
              </p>
            </div>
            
          </div>

          <div class="border-2 sm:bg-[#1D3160] flex items-center justify-center grid grid-cols-12 rounded-[30px]">
            <div class="col-span-12 flex items-center justify-center sm:col-span-6">
              <img src='~/assets/img/nomad.png' class="w-1/2" alt="" />
            </div>
            <div class="col-span-12 space-y-4 sm:col-span-6 px-6 sm:pr-8 -mt-6 py-6 sm:mt-1">
              <p class="paragraph sm:text-white text-center text-xs">
                We provide premium access to crypto trading for both individuals and institutions through high liquidity,
                reliable order execution and constant uptime.
              </p>
            </div>
            
          </div>

          
        </div>

        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">

          <div class="border-2 sm:bg-[#1D3160] flex items-center justify-center grid grid-cols-12 rounded-[30px]">
            <div class="col-span-12 flex items-center justify-center sm:col-span-6">
              <img src='~/assets/img/forexVendor.png' class="w-1/2" alt="" />
            </div>
            <div class="col-span-12 space-y-4 sm:col-span-6 px-6 sm:pr-8 -mt-6 py-6 sm:mt-1">
              <p class="paragraph sm:text-white text-center text-xs">
                We provide premium access to crypto trading for both individuals and institutions through high liquidity,
                reliable order execution and constant uptime.
              </p>
            </div>
            
          </div>

          <div class="border-2  flex items-center justify-center grid grid-cols-12 rounded-[30px]">
            <div class="col-span-12 flex items-center justify-center sm:col-span-6">
              <img src='~/assets/img/cryptoVendor.png' class="w-1/2" alt="" />
            </div>
            <div class="col-span-12 space-y-4 sm:col-span-6 px-6 sm:pr-8 -mt-6 py-6 sm:mt-1">
              <p class="paragraph text-center text-xs">
                We provide premium access to crypto trading for both individuals and institutions through high liquidity,
                reliable order execution and constant uptime.
              </p>
            </div>
            
          </div>

        </div>


      </div>
    </section> -->

    <!-- Getting started section -->
    <!-- <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-10 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Get started in just a few minutes
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
        <Step/>
          <img
            src='~/assets/img/getting-started/arrow.png'
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            src='~/assets/img/getting-started/arrow.png'
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section> -->

    <!-- FAQ section -->
    <section class="w-full my-12">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src='~/assets/img/faq.webp' class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <accordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
          <baseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#1D3160] flex items-center justify-center mt-4" @click="$router.push('/faqs')"
            >
              <span>Read More</span>
        </baseButton>
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