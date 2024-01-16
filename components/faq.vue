<template>
    <div :class="`w-full flex flex-col items-center justify-center ${props.bg} rounded-2xl px-3`">
            <div @click="openFaq = !openFaq" class="w-full cursor-pointer flex flex-row items-center justify-between py-4 ">
              <h1 class=" text-sm sm:text-xl extraboldCabinet">
                {{$props.question}}
              </h1>

              <svg v-if="!openFaq" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="black" fill-rule="evenodd" d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707" clip-rule="evenodd"/></svg>

              <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><g transform="translate(0 15) scale(1 -1)"><path fill="black" fill-rule="evenodd" d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707" clip-rule="evenodd"/></g></svg>
            </div>
            <div data-aos="fade-down" data-aos-once="true" v-if="openFaq" class="w-full py-4">
              <p class="text-xs sm:text-sm text-left cabinet text-black paragraph">
                  {{$props.answer}}
              </p>
            </div>

    </div>
  </template>
  <script setup lang="ts">
  const openFaq = ref(false)

  const props = defineProps<{
    question: string,
    answer:string,
    bg:string
  }>()
  </script>

  <style scoped>
    h1,.cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
  }

  .extraboldCabinet{
    font-family: 'cabinetGroteskBold', sans-serif;
  }

  .blackCabinet{
    font-family: 'cabinetGroteskBlack', sans-serif;
  }

  .text-header-gradient {
    background: rgb(57, 132, 244);
    background: linear-gradient(169.4deg, #20DA97 -6.01%, #0cd3ff 36.87%, #20DA97 78.04%, #20DA97 103.77%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bg-home {
    background: url('../assets/img/pattern/home.svg');
    background-size: contain;
    background-position: center;
  }

  .bg1{
    background: #EAFFE5;
  }

  .bg2{
    background: #E1FDF4;
  }

  .bg3{
    background: #FDEBFF;
  }

  .bg4{
    background: #FFEBEC;
  }

  .bg5{
    background: #fffef7;
  }
  .bg6{
    background: #dceaff;
  }

  </style>