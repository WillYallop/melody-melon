<template>
  <div>
      
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :imageName="bannerData.imageName"
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
import banner from '@/components/PageComponents/Banner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import contactForm from '@/components/PageComponents/ContactForm'
import footerComp from '@/components/GlobalComponents/Footer'

export default {
  data() {
    return {
      // banner data
      bannerData: {
        heading: 'Check Out Our Range of Playlists',
        subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo. Sit amet justo.',
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
