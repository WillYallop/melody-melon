<template>
  <div>
      
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :imageName="bannerData.imageName"
    :button="bannerData.button"/>

    <sectionBackgroundRight/>

  </div>  
</template>

<script>
// components
import banner from '@/components/PageComponents/Banner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'

export default {
  data() {
    return {
      // banner data
      bannerData: {
        heading: 'Contact Us',
        subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo. Sit amet justo.',
        imageName: 'contactBannerImage.svg',
        button: ['submit', 'submit song']
      },

    }
  },
  components: {
    banner,
    sectionBackgroundRight

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
