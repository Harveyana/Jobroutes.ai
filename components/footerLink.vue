<template>
    <li class="w-full">
      <NuxtLink
        class=" cabinet whitespace-nowrap text-xs sm:text-sm py-2 font-black bg-transparent rounded-lg text-white hover:text-gray-500 focus:outline-none focus:shadow-outline"
        :to="url"
      >
        {{ name }}
      </NuxtLink>
    </li>
  </template>
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  }
  </script>
  <style scoped>
  .cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

</style>