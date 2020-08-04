<template>
  <div>
      
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :imageName="bannerData.imageName"
    :button="bannerData.button"/>

    <!-- section background right - always make div bellow margin-top: - 160px -->
    <sectionBackgroundRight
    :heading="sectionData.playlistCards.heading"
    :subHeading="sectionData.playlistCards.subHeading"/>
    <!-- playlist cards -->
    <playlistCards :style="{ 'margin-top' : '-120px' }"/>

    <!-- Playlist finder link -->
    <playlistFinder/>

    <!-- section background left - always make div bellow margin-top: - 160px -->
    <sectionBackgroundLeft
    :heading="sectionData.faq.heading"
    :subHeading="sectionData.faq.subHeading"/>
    <!-- faq -->
    <faq :style="{ 'margin-top' : '-120px' }"/>

  </div>  
</template>

<script>
// components
import banner from '@/components/PageComponents/Banner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import playlistCards from '@/components/PageComponents/PlaylistCards'
import sectionBackgroundLeft from '@/components/PageComponents/SectionBackgroundLeft'
import playlistFinder from '@/components/PageComponents/PlaylistFinder'
import faq from '@/components/PageComponents/Faq'

export default {
  data() {
    return {
      // banner data
      bannerData: {
        heading: 'Fruity Playlists To Fuel Your Day',
        subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo ut porttitor suspendisse.',
        imageName: 'bannerImage.svg',
        button: ['/contact', 'contact us']
      },
      // section data
      sectionData: {
        playlistCards: {
          heading: 'Our Top Playlists',
          subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        faq: {
          heading: 'More about us',
          subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      },

    }
  },
  components: {
    banner,
    sectionBackgroundRight,
    playlistCards,
    sectionBackgroundLeft,
    playlistFinder,
    faq
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
