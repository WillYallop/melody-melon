<template>
  <div>
    <div class="siteWrapper">
      
      <!-- Banner -->
      <banner 
      :heading="heading"
      :subHeading="subHeading"
      :image="image"/>

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
      subHeading: '',
      image: ''

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
