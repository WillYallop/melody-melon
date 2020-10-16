<template>
  <div class="indexCon">
      
    <!-- Banner -->
    <HomeBanner/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <HomeSectionBackgroundRight
    :heading="sectionData.playlistCards.heading"
    :subHeading="sectionData.playlistCards.subHeading"/>
    <!-- playlist cards -->
    <PlaylistCards :style="{ 'margin-top' : '-120px' }"/>

    <!-- Playlist finder link -->
    <PlaylistFinder/>

    <!-- section background left - always make div bellow margin-top: -120px if section has text else its -200px -->
    <HomeSectionBackgroundLeft
    :heading="sectionData.faq.heading"
    :subHeading="sectionData.faq.subHeading"/>
    <!-- Accordion -->
    <HomeAccordion :style="{ 'margin-top' : '-120px' }"
    :accordionData="accordionData"/>

    <!-- Spotify Plug -->
    <SpotifyPlug/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <HomeSectionBackgroundRight/>
    <!-- Info Cards -->
    <InfoCards :style="{ 'margin-top' : '-200px' }"/>

    <!-- Footer -->
    <FooterComp/>

  </div>  
</template>

<script>
// components
import HomeBanner from '@/components/Home/HomeBanner'
import HomeSectionBackgroundRight from '@/components/Home/HomeSectionBackgroundRight'
import PlaylistCards from '@/components/Home/PlaylistCards'
import HomeSectionBackgroundLeft from '@/components/Home/HomeSectionBackgroundLeft'
import PlaylistFinder from '@/components/Home/PlaylistFinder'
import HomeAccordion from '@/components/Home/HomeAccordion'
import SpotifyPlug from '@/components/Home/SpotifyPlug'
import InfoCards from '@/components/Home/InfoCards'
import FooterComp from '@/components/GlobalComponents/Footer'

export default {
  data() {
    return {
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
    HomeBanner,
    HomeSectionBackgroundRight,
    PlaylistCards,
    PlaylistFinder,
    HomeSectionBackgroundLeft,
    HomeAccordion,
    SpotifyPlug,
    InfoCards,
    FooterComp
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
.indexCon {

  overflow: hidden;
}
</style>
