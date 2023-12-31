<template>
    <Dialog
    v-model:visible="props.visible"
    modal
    :pt="{
        mask: {
            style: 'backdrop-filter: blur(10px)'
        }
    }"
    >
            <div class=" w-full " style="border-radius: 12px;">
              
              <div class="w-full rounded-2xl">


                <div class="formbackground bg-[#1D3160] gap-3 w-[16rem] sm:w-[25rem] flex flex-col items-center justify-center rounded-3xl">

                    <h1 class=" py-3 w-full text-2xl sm:text-3xl text-center font-bold text-white">
                      Join Waitlist
                    </h1>

                    <div class=" w-3/4 inline-flex flex-col gap-2">
                        <label for="Name" class="text-white text-sm font-semibold">Full Name</label>
                        <InputText id="Name" :="fullName" class="bg-white-alpha-20 rounded-xl border-none p-2 sm:p-2.5 text-primary-50"></InputText>
                    </div>
                    <div class=" w-3/4 inline-flex flex-col gap-2">
                        <label for="email" class="text-white text-sm font-semibold">Email</label>
                        <InputText id="email" :="email" class="bg-white-alpha-20 rounded-xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="email"></InputText>
                    </div>
                    <div class=" w-3/4 inline-flex flex-col gap-2">
                        <label for="Country" class="text-white text-sm font-semibold">Country</label>
                        <InputText id="Country" :="country" class="bg-white-alpha-20 rounded-xl border-none p-2 sm:p-2.5 text-[#1D3160]"></InputText>
                    </div>
                    <div class=" w-3/4 flex align-items-center py-3 gap-2">
                        <Button label="Join" @click="onSubmit(),showLoader = true" text class="p-2 rounded-xl w-full bg-[#20DA97] border-black"></Button>
                        <Button label="Cancel" @click="$emit('cancel')" text class="p-2 rounded-xl w-full text-white border-1 border-[#20DA97]"></Button>
                    </div>
    
                    <ProgressSpinner v-if="showLoader" class="-mt-8" style="width: 100px; height: 100px" strokeWidth="8" fill="#ffff"
                      animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                    />

                </div>

                

              </div>
             
            </div>

            <Toast group="success" severity='success' :pt="{
                  container: {
                      style: 'background: #7fdbb4; margin: 10px; padding:5px; color: white'
                  }
            }"/>

            <Toast group="fail" severity='error' :pt="{
                  container: {
                      style: 'background: #CA3433; margin: 10px; padding:5px; color: white'
                  }
            }"/>

    </Dialog>
    
  </template>


  <script setup lang="ts">
   import { useForm } from 'vee-validate';
   import { toTypedSchema } from '@vee-validate/yup';
   import * as yup from 'yup';
   import { useToast } from "primevue/usetoast";


   const toast = useToast();
   const {addUser,nover} = useFireBase()
   const {objectToArray} = useConverters()

   const showLoader = ref(false)
  
    const props = defineProps<{
      visible: boolean
      bar?: number
    }>()


    const { errors,handleSubmit, defineInputBinds,values,resetForm } = useForm({
      validationSchema: toTypedSchema(
        yup.object({
          fullName: yup.string().required(),
          email: yup.string().email().required(),
          country: yup.string().required(),
        })
      ),
    });

    const fullName = defineInputBinds('fullName');
    const email = defineInputBinds('email');
    const country = defineInputBinds('country');


    async function onSuccess() {
      if(values.fullName && values.email && values.country){
        const response = await addUser(values.fullName,values.email,values.country)

        if (response){
          showLoader.value = false
          toast.add({ severity: 'success', summary: 'Operation Successful', detail: 'Email added to Waitlist', life: 3000, group:'success' });
          resetForm()
        }
      }

    }

    function onInvalidSubmit() {
      const errorArray = objectToArray(errors.value)
      showLoader.value = false
      errorArray.forEach((error)=>{
        toast.add({ severity: 'error', summary: error.key, detail: error.value, life: 3000, group:'fail' });
      })
      resetForm()
    }

    const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);

  </script>
  <style scoped>
  /* .formbackground{
    background: url('~/assets/img/logo/vyreLogo.png'),#1D3160;
    background-size: auto;
    background-position-x: -390%;
    background-position-y: 590%;
    background-repeat: no-repeat;
    
  } */
 </style>