<template>
  <div>
      
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :button="bannerData.button"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight/>
    <!-- contact  -->
    <contactForm :style="{ 'margin-top' : '-200px' }"/>

    <!-- Footer -->
    <footerComp/>

  </div>  
</template>

<script>
// components
import banner from '@/components/Contact/ContactBanner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import contactForm from '@/components/PageComponents/ContactForm'
import footerComp from '@/components/GlobalComponents/Footer'

export default {
  data() {
    return {
      // banner data
      bannerData: {
        heading: 'Hit Us Up',
        subHeading: 'Still have questions? Feel free to drop us a message on any questions you may have.',
        imageName: 'contactBannerImage.svg',
        button: ['submit', 'submit song']
      },

    }
  },
  components: {
    banner,
    sectionBackgroundRight,
    contactForm,
    footerComp

  },
  mounted() {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
