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
    <!-- Accordion -->
    <accordion :style="{ 'margin-top' : '-120px' }"
    :accordionData="accordionData"/>

  </div>  
</template>

<script>
// components
import banner from '@/components/PageComponents/Banner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import playlistCards from '@/components/PageComponents/PlaylistCards'
import sectionBackgroundLeft from '@/components/PageComponents/SectionBackgroundLeft'
import playlistFinder from '@/components/PageComponents/PlaylistFinder'
import accordion from '@/components/PageComponents/Accordion'

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
      accordionData: [
        { id: 1, title: "This is a title", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo ut porttitor. Suspendisse vehicula ultrices tincidunt."},
        { id: 2, title: "This is a title", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo ut porttitor. Suspendisse vehicula ultrices tincidunt."},
        { id: 3, title: "This is a title", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo ut porttitor. Suspendisse vehicula ultrices tincidunt."},
        { id: 4, title: "This is a title", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo ut porttitor. Suspendisse vehicula ultrices tincidunt."}
      ]

    }
  },
  components: {
    banner,
    sectionBackgroundRight,
    playlistCards,
    sectionBackgroundLeft,
    playlistFinder,
    accordion
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
