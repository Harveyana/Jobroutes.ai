<template>
  <div class="w-full overflow-hidden">
    <Navbar color="#D6DA20" @openForm="openDialog()" />
    <!-- Hero section -->
    <section id="hero" class="w-full">
      <baseSection>

        <div class="col-span-12 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">

          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            FAQS
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Questions that need answers.
          </p>
        </div>
        
      </baseSection>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src='~/assets/img/usersStory.png' class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <accordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
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
        {
          title: 'What is the unique feature of Vyre Africa?',
          description:
            "Vyre Africa stands out with its combination of global secured multi-currency accounts for fiats and crypto with the ability to generate quick payment links, offering users a versatile and inclusive financial solution.",
        },
        {
          title: 'How quickly can I receive money through payment links?',
          description:
            "The speed of receiving money through Vyre Africa's payment links depends on various factors, including the sender's location and chosen payment method. However, our platform is designed to facilitate swift transactions.",
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