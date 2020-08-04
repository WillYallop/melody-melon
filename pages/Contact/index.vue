<template>
  <div>
    <div class="siteWrapper">
      
      <!-- Banner -->
      <banner 
      :heading="heading"
      :subHeading="subHeading"
      :imageName="imageName"
      :button="button"/>

    </div> 
  </div>  
</template>

<script>
// components
import banner from '@/components/PageComponents/Banner'

export default {
  data() {
    return {
      // banner data
      heading: 'Contact Us',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo. Sit amet justo.',
      imageName: 'contactBannerImage.svg',
      button: ['submit', 'submit song']

    }
  },
  components: {
    banner
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
