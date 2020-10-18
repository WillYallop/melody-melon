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
          subHeading: 'Checkout our top playlists that are currently booming on Spotify. We have some of the Fruitiest Spotify Playlists out there. Melody Melon playlists feature some of the best new and upcoming artists the world has to offer.',
        },
        faq: {
          heading: 'Frequently Asked Questions',
          subHeading: "Get quick answers to some of our most commonly asked questions about Melody Melon. If we don't answer your question here, pop us a message on our contact form.",
        },
      },
      accordionData: [
        { id: 1, action: false, title: "How often do you update your playlists?", body: "We aim to update all of our playlists on a monthly basis so the playlists never get stale. However there are some special exceptions such as special event playlists which are fixed to capture their essence."},
        { id: 2, action: false, title: "How Can I work with Melody Melon", body: "We are always looking for ways we can work with others so if you have a proposal, just hit us up on our contact form and we will get back to you as soon as possible. Or send us an email at hello@melodymelon.com"},
        { id: 3, action: 'submit', title: "Can I submit my song to Melody Melon Playlists?", body: "If you are an independent artist or manager you can submit tracks to us using our submit track link as seen bellow. We also have a campaign manager tool coming soon so stay tuned."},
        { id: 4, action: 'socials', title: "Are you guys on any social media platforms?", body: "Yes you can find us on a number of social medias, the links for those are bellow. Our Instagram and twitter are the places to be. PS. We also do giveaways ;)"}
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
