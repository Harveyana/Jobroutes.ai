<template>
  <div class="w-full overflow-hidden bg-home pt-24 sm:pt-36">
    <Navbar color="#D6DA20" @openForm="openDialog()" />
    <!-- Hero section -->
    <section class="w-full">
      
      <BaseSection>
        <div class="col-span-12 flex flex-col sm:flex-row items-center justify-center mt-6 px-4 space-x-3 mb-20 sm:px-0">
          <div v-for="resource in resources" :key="resource.name" class="w-full sm:w-[23%] p-5 sm:py-5 sm:px-3 bg-white flex flex-col items-center justify-center rounded-2xl">
              <img
                
                :src=resource.image
                class="w-full sm:w-[80%]"
                alt=""
              />

              <div class="w-full flex items-start justify-start mb-4">
                <baseButton
                class="border hover:bg-black hover:text-white mt-3 border-black w-[40] px-3 py-1 bg-white text-xs text-black flex items-center justify-center"
                >
                  <span>Coming Soon</span>
                </baseButton>
              </div>
              

              <div class="w-full flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl extraboldCabinet"
                >
                 {{resource.name}}
                </h1>
                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class=" text-xs lg:text-sm cabinet text-gray-500 paragraph">
                  {{resource.about}}
                </p>
              </div>


          </div>
        </div>
        
      </BaseSection>

      

    </section>
    <waitlistForm :visible="visible" @cancel="visible = false"/>

    <Footer />

  </div>
</template>
<script setup lang="ts">

import youtubeImage from '~/assets/img/youtube.svg'
import newsLetterImage from '~/assets/img/newsletter.svg'
import podcastImage from '~/assets/img/podcast.svg'
import eventsImage from '~/assets/img/events.svg'


const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}

const resources:{name:string;about:string;image:string}[] = [
  {
    name:'Youtube',
    about:'Learn from industry experts in our network who have successfully landed international career opportunities.',
    image: youtubeImage
  },
  {
    name:'Newsletter',
    about:'Access all the resources you need to succeed in your career either as a newbie, mid-level, senior level, or Expat talent in your field and region.',
    image: newsLetterImage
  },
  {
    name:'Podcast',
    about:'Listen to insightful career and relocation advice on the go shared by experts who are succeeding in their career.',
    image: podcastImage
  },
  {
    name:'Events',
    about:'Attend our virtual and physical events hosted for global talents by global talents like you.',
    image: eventsImage
  }

]
     
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #0cd3ff -6.01%, #DAA520 36.87%, #DAA520 78.04%, #0cd3ff 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1,.cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }

</style>