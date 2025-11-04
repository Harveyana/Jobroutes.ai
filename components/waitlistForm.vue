<template>
    <Dialog
    v-model:visible="props.visible"
    :closable="false"
    :closeOnEscape="true"
    :dismissableMask="true"
    modal
    :pt="{
        mask: {
            style: 'backdrop-filter: blur(10px)'
        }
    }"
    >
            <div class=" w-full rounded-2xl" style="border-radius: 12px;">
              
              <div class="w-fit rounded-2xl">
                <svg @click="$emit('cancel')" class="cursor-pointer my-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g transform="translate(0 32) scale(1 -1)"><path fill="black" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="black" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></g></svg>

                <div class="w-full sm:w-[25rem] rounded-3xl">
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdFlH4_m-lB8cwf-zPGCs5mtkaJg994hy2ZXP5xEmuuBzUl9w/viewform?embedded=true" class="w-full h-[30rem]" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>

                

              </div>
             
            </div>

    </Dialog>
    
  </template>


  <script setup lang="ts">
   
  
    const props = defineProps<{
      visible: boolean
      bar?: number
    }>()

  </script>
  <style scoped>
  
 </style>