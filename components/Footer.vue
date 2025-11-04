<template>
    <footer class="max-w-screen-xl mx-auto px-8 sm:px-20 py-10 bg-black rounded-tl-[55px] rounded-tr-[55px]">
      <div class="w-full flex flex-col sm:flex-row items-start justify-end space-y-8 sm:space-y-0 space-x-0 sm:space-x-24">
        <!-- Logo -->
        <div class="flex flex-col w-fit mr-auto space-y-8">
              <NuxtLink to="/" class="flex items-center justify-start gap-x-2">
                <img src='~/assets/img/logo/vyreLogo.png' class="w-10 sm:w-14" alt="Logo" />
                <h1 class="text-[35px] sm:text-[45px] text-white font-bold extraboldCabinet"
                >
                 vyre
                </h1>
              </NuxtLink>
              <span class="text-gray-500 cabinet text-xs sm:text-sm">
                Instant, trustless , and borderless
              </span>
              
        </div>

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class=" cabinet text-white extraboldCabinet text-lg"
          >
            Company
          </h1>

          <ul class="space-y-2">
              <FooterLink name="About us" url="/#" />
              <FooterLink name="Features" url="/#" />
              <!-- <FooterLink name="Pricing" url="/pricing" /> -->
            </ul>
        </div>

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class=" cabinet text-white extraboldCabinet text-lg"
          >
            Resources
          </h1>

          <ul class="space-y-2">
              <FooterLink name="Blog" url="#" />
              <FooterLink name="Help center" url="/#Faq" />
              <FooterLink name="Contact Us" url="mailto:team@vyre.africa" />
            </ul>
        </div>

        <!-- <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class="cabinet text-white extraboldCabinet text-lg"
          >
            Legal
          </h1>

          <ul class="space-y-2">
              <FooterLink name="Privacy policy" url="#" />
              <FooterLink name="Terms and condition" url="#" />
              <FooterLink name="Cookie policy" url="#" />
            </ul>
        </div> -->

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class=" cabinet text-white extraboldCabinet text-lg"
          >
            Follow Us
          </h1>

          <ul class="space-y-2">
              <!-- <FooterLink name="Instagram" url="https://instagram.com/myjobroutes" /> -->
              <FooterLink name="X (Formerly Twitter)" url="https://x.com/VyreAfrica" />
              <FooterLink name="LinkedIn" url="https://www.linkedin.com/company/vyreafrica" />
              <!-- <FooterLink name="Facebook" url="#" /> -->
            </ul>
        </div>
        
      </div>

      <div class="flex cabinet flex-row items-center justify-between my-10 sm:my-12 text-center">
        <!-- <span class="text-gray-500 cabinet text-xs sm:text-sm">
          Jobroutes is powered by EntryPlan
        </span> -->
        <span class="text-white cabinet text-xs sm:text-sm">
          © 2025 Vyre Africa
        </span>
      </div>
    </footer>
  </template>
  <script>
  export default {
    name: 'Footer',
  }
  </script>
  <style scoped>
  .cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

</style>
  