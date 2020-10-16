<template>
  <div>
      
    <!-- Banner -->
    <ContactBanner/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <ContactSectionBackgroundRight/>
    <!-- contact  -->
    <ContactForm :style="{ 'margin-top' : '-200px' }"/>

    <!-- Footer -->
    <FooterComp/>

  </div>  
</template>

<script>
// components
import ContactBanner from '@/components/Contact/ContactBanner'
import ContactSectionBackgroundRight from '@/components/Contact/ContactSectionBackgroundRight'
import ContactForm from '@/components/PageComponents/ContactForm'
import FooterComp from '@/components/GlobalComponents/Footer'

export default {
  data() {
    return {

    }
  },
  components: {
    ContactBanner,
    ContactSectionBackgroundRight,
    ContactForm,
    FooterComp

  },
}
</script>

<style scoped>

</style>
