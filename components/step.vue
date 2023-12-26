<template>
    <div v-for="step in steps" class="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
      <img :src=step.img class="max-w-[245px] mx-auto" alt="" />
      <h3 class="text-xl text-neutral-800 font-semibold">{{ step.title }}</h3>
      <p class="text-sm text-gray-700 leading-relaxed">
        {{ step.description }}
      </p>
    </div>
  </template>
  <script setup lang="ts">
  import registerImage from '~/assets/img/getting-started/register.png';
  import fundImage from '~/assets/img/getting-started/fund.png';
  import buyCryptoImage from '~/assets/img/getting-started/buy-crypto.png';
    // const props = defineProps<{
    //   description: string
    //   title: string
    //   img: string
    // }>()


    const steps:{img:string,title:string,description:string}[] = [
        {
          img: registerImage,
          title: 'Sign Up',
          description:
            'Sign up for a free VYRE account, and follow our easy process to set up your profile',
        },
        {
          img: fundImage,
          title: 'KYC',
          description:
            'A few minutes verification to know you better, and get you verified quickly',
        },
        {
          img: buyCryptoImage,
          title: 'Bank, Swap or Payments',
          description:
            'Thats it Finally! you can login to your dashboard for our services',
        },
      ]
  </script>