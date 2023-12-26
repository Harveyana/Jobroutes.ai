<template>
    <nav id="navbar" class="relative z-10 w-full text-neutral-800">
      <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          <div class="w-full flex flex-row items-center justify-between py-6">
            <div>
              <NuxtLink to="/">
                <img src='~/assets/img/logo/vyreLogo3.png' class="w-24 xl:w-28 " alt="vyre Logo" />
              </NuxtLink>
            </div>
            <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
              <SegmentIcon v-if="!open" :size="24" />
              <CloseIcon v-else :size="24" />
            </button>
          </div>
          <ul
            :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
          >
            
            <li class="relative group">
              <button
                class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
                @click="dropdownToggler"
                @blur="dropdownToggler"
              >
                <span>Products</span>
                <ChevronUpIcon v-if="dropdownNavbar" :size="16" />
                <ChevronDownIcon v-else :size="16" />
              </button>
              <transition name="transform-fade-down">
                <ul
                  v-if="dropdownNavbar"
                  class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
                >
                  <li>
                    <NuxtLink to="/banking" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Banking</NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/swap" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Swap</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/payments" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Payments</NuxtLink>
                  </li>

                </ul>
              </transition>
            </li>
            <NavLink name="About" url="/about" />
            <NavLink name="Faqs" url="/faqs" />

          </ul>
        </div>
        <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
          <BaseButton @click="$emit('openForm')" class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#1D3160]">
            Join WaitList
          </BaseButton>
          <BaseButton @click="$emit('openForm')" :class="`px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#0cd3ff] to-[${props.color}] text-white`">
            Get Started
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
  