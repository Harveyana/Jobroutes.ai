<template>
    <footer class="max-w-screen-xl px-8 sm:px-20 py-10 mx-auto bg-black rounded-tl-[55px] rounded-tr-[55px]">
      <div class="w-full flex flex-col sm:flex-row items-start justify-end space-y-8 sm:space-y-0 space-x-0 sm:space-x-24">
        <!-- Logo -->
        <div class="flex flex-row w-12 mr-auto">
              <a href="#">
                <img src='~/assets/img/logo/jobrouteWhite.svg' class="w-full" alt="jobroute Logo" />
              </a>
        </div>

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class=" cabinet text-white extraboldCabinet text-lg"
          >
            Company
          </h1>

          <ul class="space-y-2">
              <FooterLink name="About us" url="/banking" />
              <FooterLink name="Features" url="/swap" />
              <FooterLink name="Pricing" url="/payments" />
            </ul>
        </div>

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class=" cabinet text-white extraboldCabinet text-lg"
          >
            Resources
          </h1>

          <ul class="space-y-2">
              <FooterLink name="Blog" url="/banking" />
              <FooterLink name="Help center" url="/swap" />
              <FooterLink name="Contact Us" url="/payments" />
            </ul>
        </div>

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class="cabinet text-white extraboldCabinet text-lg"
          >
            Legal
          </h1>

          <ul class="space-y-2">
              <FooterLink name="Privacy policy" url="/banking" />
              <FooterLink name="Terms and condition" url="/swap" />
              <FooterLink name="Cookie policy" url="/payments" />
            </ul>
        </div>

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class=" cabinet text-white extraboldCabinet text-lg"
          >
            Follow Us
          </h1>

          <ul class="space-y-2">
              <FooterLink name="Instagram" url="/banking" />
              <FooterLink name="X(Twitter)" url="/swap" />
              <FooterLink name="LinkdIn" url="/payments" />
              <FooterLink name="Facebook" url="#" />
            </ul>
        </div>
        
      </div>

      <div class="flex cabinet flex-row items-center justify-between my-10 sm:my-12 text-center">
        <span class="text-gray-500 cabinet text-xs sm:text-sm">
          JobIn is powered by Open AI
        </span>
        <span class="text-white cabinet text-xs sm:text-sm">
          © 2023 JobIn
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
  