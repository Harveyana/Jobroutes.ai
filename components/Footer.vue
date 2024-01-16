<template>
    <footer class="max-w-screen-xl mx-auto px-8 sm:px-20 py-10 bg-black rounded-tl-[55px] rounded-tr-[55px]">
      <div class="w-full flex flex-col sm:flex-row items-start justify-end space-y-8 sm:space-y-0 space-x-0 sm:space-x-24">
        <!-- Logo -->
        <div class="flex flex-col w-fit mr-auto space-y-8">
              <a href="#">
                <img src='~/assets/img/logo/jobroutesWhite.svg' class="w-36 sm:w-48" alt="jobroute Logo" />
              </a>
              <span class="text-gray-500 cabinet text-xs sm:text-sm">
                JobRoutes is powered by Entryplan Limited
              </span>
        </div>

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class=" cabinet text-white extraboldCabinet text-lg"
          >
            Company
          </h1>

          <ul class="space-y-2">
              <FooterLink name="About us" url="/#howItWorks" />
              <FooterLink name="Features" url="/#Talents" />
              <FooterLink name="Pricing" url="/pricing" />
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
              <FooterLink name="Contact Us" url="mailto:info@myjobroutes.com" />
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
              <FooterLink name="Instagram" url="https://instagram.com/myjobroutes" />
              <FooterLink name="X (Formally Twitter)" url="https://twitter.com/myjobroutes" />
              <FooterLink name="LinkedIn" url="https://linkedin.com/myjobroutes" />
              <!-- <FooterLink name="Facebook" url="#" /> -->
            </ul>
        </div>
        
      </div>

      <div class="flex cabinet flex-row items-center justify-between my-10 sm:my-12 text-center">
        <!-- <span class="text-gray-500 cabinet text-xs sm:text-sm">
          Jobroutes is powered by EntryPlan
        </span> -->
        <span class="text-white cabinet text-xs sm:text-sm">
          © 2024 JobRoutes
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
  