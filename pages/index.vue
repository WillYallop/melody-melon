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
      heading: 'Fruity Playlists To Fuel Your Day',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo ut porttitor suspendisse.',
      imageName: 'bannerImage.svg',
      button: ['/contact', 'contact us']

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
