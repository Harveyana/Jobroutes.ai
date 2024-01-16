<template>
    <footer class="max-w-screen-xl mx-auto px-8 sm:px-20 py-10 bg-black rounded-tl-[55px] rounded-tr-[55px]">
      <div class="w-full flex flex-col sm:flex-row items-start justify-end space-y-8 sm:space-y-0 space-x-0 sm:space-x-24">
        <!-- Logo -->
        <div class="flex flex-col w-fit mr-auto space-y-8">
              <a href="#">
                <img src='~/assets/img/logo/jobroutesWhite.svg' class="w-12" alt="jobroute Logo" />
              </a>
              <span class="text-gray-500 cabinet text-xs sm:text-sm">
                JobRoutes is powered by Entryplan
              </span>
        </div>

        <div class="flex flex-col items-start justify-center space-y-4">
          <h1
            class=" cabinet text-white extraboldCabinet text-lg"
          >
            Company
          </h1>

          <ul class="space-y-2">
              <FooterLink name="About us" url="#" />
              <FooterLink name="Features" url="#" />
              <FooterLink name="Pricing" url="#" />
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
              <FooterLink name="Help center" url="#" />
              <FooterLink name="Contact Us" url="#" />
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
              <FooterLink name="Instagram" url="#" />
              <FooterLink name="X (Popularly known as Twitter)" url="#" />
              <FooterLink name="LinkdIn" url="#" />
              <FooterLink name="Facebook" url="#" />
            </ul>
        </div>
        
      </div>

      <div class="flex cabinet flex-row items-center justify-between my-10 sm:my-12 text-center">
        <!-- <span class="text-gray-500 cabinet text-xs sm:text-sm">
          Jobroutes is powered by EntryPlan
        </span> -->
        <span class="text-white cabinet text-xs sm:text-sm">
          © 2024 Jobroutes
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
  