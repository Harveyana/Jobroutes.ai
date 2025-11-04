<template>
  <div class="w-full overflow-hidden bg-home pt-24 sm:pt-36">
   <Navbar color="#D6DA20" @openForm="openDialog()" />
    <!-- Hero section -->
    <section id="hero" class="w-full">
       
      <BaseSection class="">

        <div class="col-span-12 flex flex-col items-center justify-center">

            <div class=" w-full sm:w-3/4 flex flex-col items-center justify-center mt-6 space-y-4 px-4 text-center">
              <!-- Desktop -->
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="500"
                class=" text-3xl sm:text-5xl extraboldCabinet lg:text-7xl"
              >
              crypto x fiat - instant, <span class="text-[#1d3160]">trustless</span> , and borderless.
              </h1>
              <!-- Mobile -->
              <!-- <h1
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="500"
                class=" lg:hidden text-3xl extraboldCabinet sm:text-7xl"
              >
                Tailored <span>Applications</span> for Dream Roles
              </h1> -->

              <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm lg:text-lg w-[90%] sm:w-[60%] cabinet text-gray-500 paragraph">
                💸 Swap in Seconds | 🛡️ Bank-Free Security | 🌐 20+ Countries Supported
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
                  <span>Start Swapping Now</span>
                </baseButton>
              </div>

            </div>
            <div class="w-full  flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-4 px-6 sm:px-4 py-4">

              <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="w-full shadow-md hover:bg-[#1d3160]  bg-white flex flex-col items-start gap-y-3  sm:w-[30%]  p-6 rounded-2xl transition-colors duration-200 group">

                <h1 class=" text-2xl text-[#1d3160] group-hover:text-gray-200 sm:text-5xl extraboldCabinet lg:text-2xl">
                  True Peer-to-Peer
                </h1>

                <div class="feature-card">
                  <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-xs lg:text-sm cabinet group-hover:text-gray-200 text-black paragraph">
                    <strong>Trade directly with others</strong> – no platform holding funds. Our escrow-free with verified partners instantly.
                  </p>
                  <small class="group-hover:text-gray-200">Example: Send USDT → Get NGN straight to bank</small>
                </div>

              </div>

              <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300" class="w-full shadow-md hover:bg-black  bg-white flex flex-col items-start gap-y-3  sm:w-[30%]  p-6 rounded-2xl transition-colors duration-200 group">

                <h1 class=" group-hover:text-gray-200 text-2xl extraboldCabinet sm:text-2xl">
                  1-Click Instant Swap
                </h1>

                <div class="feature-card">
                  <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-xs lg:text-sm cabinet group-hover:text-gray-200 text-black paragraph">
                    <strong>Convert in 3 seconds flat</strong>. Lock rates, confirm, and done – no waiting for blockchain confirmations.
                  </p>
                  <small class="group-hover:text-gray-200">Supported: BTC, USDT, ETH ↔ NGN, KES, GHS</small>
                </div>
                
              </div>

              <div data-aos="fade-right" data-aos-once="true" data-aos-delay="300" class="w-full shadow-md hover:bg-[#29a571] bg-white flex flex-col items-start gap-y-3  sm:w-[30%]  p-6 rounded-2xl transition-colors duration-200 group"> 

                <h1 class=" text-2xl group-hover:text-gray-200 text-[#29a571] extraboldCabinet sm:text-2xl">
                  Global Payment Links
                </h1>

                <div class="feature-card">
                  <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-xs lg:text-sm cabinet group-hover:text-gray-200 text-black paragraph">
                    <strong>Create & share smart payment links</strong> like "Pay me in USD → I get BTC". Works via WhatsApp, email, or SMS.
                  </p>
                  <small class="group-hover:text-gray-200">Great for freelancers & businesses</small>
                </div>

              </div>

            </div>
            <!-- <div class="w-4/5">
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
            </div> -->
      
        </div>

       <!-- <div class="col-span-12 flex flex-col sm:items-start justify-center px-8 sm:px-12 mt-12">
        <h1
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="200"
          class="text-xl sm:text-2xl extraboldCabinet"
        >
        Backed by global organizations ->
        </h1>
        <img
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500"
          src='~/assets/img/microsoft1.png'
          class="w-full sm:w-[40%] mb-4 sm:mb-8"
          alt=""
        />
      </div> -->

      </BaseSection>
      
    </section>
    

    <!-- Whats Possible with Jobin -->
    <section id="Talents" class="w-full mt-16">
      <BaseSection>
        <div class="col-span-12 bg-black flex flex-col items-center justify-center px-4 lg:px-16 py-16 space-y-8">
          <!-- <div data-aos="fade-left" class="w-full space-y-4">
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
          </div> -->

          <!-- <table class="w-full comparison bg-gray-100 rounded-2xl">
            <tr>
              <th></th>
              <th class="extraboldCabinet px-4 py-4 border border-gray-300">Vyre</th>
              <th class="extraboldCabinet px-4 py-4 ">Traditional Exchanges</th>
            </tr>
            <tr class="px-4 border border-gray-300">
              <td class="cabinet flex items-center justify-center px-4 py-4 border-x border-gray-300">P2P Trading</td>
              <td class="cabinet px-4 py-4 border border-gray-300">✅ Direct user-to-user</td>
              <td class=" cabinet flex items-center justify-center px-4 py-4">❌ Holds your funds</td>
            </tr>
            <tr class="px-4 border border-gray-300">
              <td class="cabinet flex items-center justify-center px-4 py-4 border-x border-gray-300">Swap Speed</td>
              <td class="cabinet px-4 py-4 border border-gray-300">⚡ 3 seconds</td>
              <td class="cabinet flex items-center justify-center px-4 py-4">⏳ 1-3 business days</td>
            </tr>
            <tr class="">
              <td class="cabinet flex items-center justify-center px-4 py-4">Payment Links</td>
              <td class="cabinet px-4 py-4 border border-gray-300">🔗 Create unlimited</td>
              <td class="cabinet flex items-center justify-center px-4 py-4">❌ Not available</td>
            </tr>

          </table> -->

          <Features @openWaitForm="openDialog()"/>

        </div>
      </BaseSection>
      
    </section>

    <!-- How It Works -->
    <!-- <section id="howItWorks" class="w-full">
      <BaseSection>
        <HowItWorks />
      </BaseSection>
    </section> -->
    


    <!-- Get hired without borders -->
    <section id="final" class="w-full">
      <BaseSection class="bg-white">
        <div class="col-span-12 bg-[#fefbd1] m-4 sm:m-10 flex flex-col items-center justify-center rounded-xl">

          <div class="w-full sm:w-3/4 lg:w-3/5 items-center justify-center py-16 space-y-4 px-6 text-center">
            
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="500"
              class="text-5xl extraboldCabinet sm:text-7xl"
            >
              YOUR <span>MONEY</span>, YOUR RULES
            </h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
              Money without borders - Swap between cash and crypto in 3 clicks. Non-custodial swaps that never sleep, seamlessly, conveniently, and — eventually — as a digital Expat.
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
                <span>Get started</span>
              </baseButton>
            </div>
            
          </div>
          <div class="w-full sm:px-16">
                <img
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="500"
                  src='~/assets/img/worldrange.svg'
                  class="w-full"
                  alt=""
                />
          </div>
        
        </div>


      </BaseSection>
      

      
    </section>

    
    <!-- FAQS -->
    <section id="Faq" class="w-full">
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
          question: 'What is Vyre Africa?',
          answer: `Vyre Africa is a next-generation peer-to-peer (P2P) platform that enables instant, secure swaps between cryptocurrencies and African fiat currencies. Unlike traditional exchanges, Vyre connects buyers and sellers directly with three groundbreaking features:
            🔗 Trustless Smart Contracts
            Funds are secured by blockchain technology—not held by Vyre—ensuring you always control your money.

            ⚡ Instant Settlement
            Convert crypto to cash (or vice versa) in under 3 seconds, with rates locked the moment you confirm.

            🌍 Borderless Payment Links
            Create shareable payment requests (e.g., ‘Pay me in USD → I get BTC’) that work across 20+ African countries

            Designed for Africans by Africans, Vyre bypasses slow banks and high fees to power seamless cross-border transactions
          `,
          bg:'bg1',
        },
        {
          question: 'How is Vyre different from traditional crypto exchanges?',
          answer: 'Vyre enables direct peer-to-peer trades without holding your funds. Unlike centralized exchanges that control your money in escrow, our smart contract system ensures you always maintain custody until trades complete',
          bg:'bg3',
        },
        {
          question: 'How fast are crypto ↔ fiat swaps?',
          answer: 'Instant (under 15 seconds) for supported currencies. We lock exchange rates the moment you confirm, eliminating wait times for blockchain confirmations or bank processing',
          bg:'bg5',
        },
        {
          question: ' What’s a payment link and how do I use it?',
          answer:"🔗 Generate a shareable link in the Vyre app. Share it via WhatsApp, SMS, or email—recipients can pay without needing a Vyre account.",
          bg:'bg2',
        },
        {
          question: 'Is Vyre available in my country?',
          answer: "We support 20+ African countries including Nigeria (NGN), Kenya (KES), Ghana (GHS), and South Africa (ZAR). See our full list of supported currencies in-app.",
          bg:'bg6',
        },
        {
          question: ' Can I use Vyre for my business?',
          answer: "Yes! Businesses use Vyre to: Accept crypto payments (settle in local currency), Pay remote contractors globally, Generate batch payment links for invoices",
          bg:'bg4',
        },
        {
          question: 'What cryptocurrencies do you support?',
          answer: 'BTC, ETH, USDT, USDC, and BNB. More added quarterly based on community votes.',
          bg:'bg5',
        },
        {
          question: 'How do I cash out to my bank account?',
          answer: 'After a swap completes, fiat deposits arrive in your linked bank account within 10 minutes (for supported banks). We notify you via SMS/app alert',
          bg:'bg3',
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
  background: url('../assets/img/pattern/doodle2.png');
  background-size: contain;
  background-position: center;
}

</style>