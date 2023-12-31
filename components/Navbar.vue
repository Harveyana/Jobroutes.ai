<template>
    <nav id="navbar" class="fixed top-0 left-0 right-0 backdrop-blur-lg z-10 w-full text-neutral-800">
      <div class="flex flex-col max-w-screen-xl px-4 sm:px-16 mx-auto lg:items-center lg:justify-between lg:flex-row">
        <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          <div class="w-full flex flex-row items-center justify-between py-6">
            <div>
              <NuxtLink to="/">
                <img src='~/assets/img/logo/jobroute.svg' class="w-18 " alt="jobroute Logo" />
              </NuxtLink>
            </div>
            <button class="border border-black rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
              <SegmentIcon v-if="!open" :size="24" />
              <CloseIcon v-else :size="24" />
            </button>
          </div>
        </div>
        <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-6 space-y-4 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center">
          <ul
            :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full h-auto flex flex-col lg:flex-row items-center justify-center pb-4 lg:pb-0 lg:justify-end lg:flex-row duration-300 space-x-6"
          >
            <NavLink name="For Talents" url="#Talents" />
            <NavLink name="Pricing" url="/pricing" />
            <NavLink name="Resources" url="/resources" />
            <!-- <NavLink name="Contact" url="/faqs" /> -->
          </ul>
          <BaseButton class="bg-[#e6e7e7] cabinet whitespace-nowrap py-2 px-6 lg:px-3 font-black text-black border border-[#1D3160]">
            Login
          </BaseButton>
          <BaseButton class="bg-[#e6e7e7] cabinet whitespace-nowrap py-2 px-6 lg:px-3 font-black text-black border border-[#1D3160]">
            Sign Up
          </BaseButton>
        </div>
      </div>
    </nav>
  </template>
  <script setup lang="ts">
  import {ref} from 'vue'

  const open = ref(false)
  const dropdownNavbar = ref(false)

  const props = defineProps<{
      color: string
    }>()

  const dropdownToggler  =()=>{
    dropdownNavbar.value = !dropdownNavbar.value
  }
  </script>
  <style scoped>
    .cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
   }

  </style>
  