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
            About Us
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            The story behind us.
          </p>
        </div>
        
      </baseSection>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <!-- <img src='~/assets/img/globe-payment.png' class="w-full" alt="" /> -->
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Our Story</h2>

          <p class="paragraph text-sm">
            <!-- In a world where traditional financial systems seemed rigid and exclusive, Vyre Africa set out to create a platform that would empower individuals and businesses alike.<br>
            We envisioned a space where borders were not barriers but gateways to new opportunities, where currencies were not limitations but tools for seamless transactions.<br><br> -->

            From the outset, our mission has been clear—to provide a secure and versatile financial platform that adapts to the dynamic needs of a global community.<br> 
            We built Vyre Africa on the pillars of security, innovation, and inclusivity.

            <br><br>
            <strong>Security:</strong>
            At Vyre Africa, your financial well-being is our top priority.<br> 
            We have implemented cutting-edge security measures to ensure that your transactions, whether in fiat or cryptocurrency, are shielded from any potential threats.<br>
            Your trust is the foundation of our success, and we work tirelessly to safeguard it.

            <br><br>
            <strong>Innovation:</strong>
            Innovation is the heartbeat of Vyre Africa. <br>
            We constantly seek new ways to enhance your financial experience.<br> Our global secured multi-currency accounts, quick payment links, and the issuance of IBANs for fiat currency accounts are just a glimpse into the dynamic solutions we bring to your fingertips.

            <br><br>
            <strong>Inclusivity:</strong>
            We believe that financial services should be accessible to all.<br> 
            Vyre Africa is designed to break down barriers, allowing individuals and businesses to participate in the global economy effortlessly.
            <br> <br>
            Whether you are sending money across continents or swapping between currencies, we are here to make it seamless for you.
            <br>

            As we continue to evolve, our commitment remains unwavering.<br> 
            Vyre Africa is not just a platform; it is a movement—a movement towards financial freedom, innovation, and a world where everyone has the tools to thrive.<br><br>

            Join us on this journey. Together, let's redefine finance and shape a future where opportunities know no bounds.
            <br><br>
            <strong>Welcome to Vyre Africa.</strong>
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

    <Footer />

  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}

     const steps = [
        {
          img: 'sign-up.png',
          title: 'Sign Up',
          description:
            'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile',
        },
        {
          img: 'fund.png',
          title: 'Fund',
          description:
            'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet',
        },
        {
          img: 'buy-crypto.png',
          title: 'Buy Crypto',
          description:
            'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere',
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

</style>