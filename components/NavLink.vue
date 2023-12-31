<template>
    <li class="w-full flex flex-row items-center justify-center">
      <NuxtLink
        class=" cabinet whitespace-nowrap py-2 font-black bg-transparent rounded-lg text-black hover:text-gray-900 focus:outline-none focus:shadow-outline"
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