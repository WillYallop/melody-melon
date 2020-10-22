<template>
  <div class="indexCon">
      
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :button="bannerData.button"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight
    :heading="sectionData.playlistCards.heading"
    :subHeading="sectionData.playlistCards.subHeading"/>
    <!-- playlist cards -->
    <playlistCards :style="{ 'margin-top' : '-120px' }"/>

    <!-- Playlist finder link -->
    <playlistFinder/>

    <!-- section background left - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundLeft
    :heading="sectionData.faq.heading"
    :subHeading="sectionData.faq.subHeading"/>
    <!-- Accordion -->
    <accordion :style="{ 'margin-top' : '-120px' }"
    :accordionData="accordionData"/>

    <!-- Spotify Plug -->
    <spotifyPlug/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight/>
    <!-- Info Cards -->
    <infoCards :style="{ 'margin-top' : '-200px' }"/>

    <!-- Footer -->
    <footerComp/>

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
import spotifyPlug from '@/components/PageComponents/SpotifyPlug'
import infoCards from '@/components/PageComponents/InfoCards'
import footerComp from '@/components/GlobalComponents/Footer'

export default {
  head: {
    title: 'Melody Melon | Fruity playlist to fuel your day',
    meta: [
      {
        name: 'description',
        content: 'Discover your perfect playlist today with Melody Melon. We have playlists for every mood and genre, whats more, they are all updated monthly to stay fresh.'
      },
      {
        property: 'og:url',
        content: 'https://melodymelon.com'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'Melody Melon | Fruity playlist to fuel your day'
      },
      {
        property: 'og:description',
        content: 'Discover your perfect playlist today with Melody Melon. We have playlists for every mood and genre, whats more, they are all updated monthly to stay fresh.'
      }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://melodymelon.com'
        }
    ]
  },
  data() {
    return {
      // banner data
      bannerData: {
        heading: 'Fruity Playlists To Fuel Your Day',
        subHeading: 'Discover your perfect playlist today with Melody Melon! We have playlists for every mood and genre, that are updated monthly to stay fresh!',
        button: ['/contact', 'contact us']
      },
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
        { id: 1, action: false, title: "How often do you update your playlists? ", body: "We aim to update all of our playlists on a monthly basis so the playlists never get stale. However there are some special exceptions such as special event playlists which are fixed to capture their essence."},
        { id: 2, action: false, title: "How Can I work with Melody Melon", body: "We are always looking for ways we can work with others so if you have a proposal, just hit us up on our contact form and we will get back to you as soon as possible. Or send us an email at hello@melodymelon.com"},
        { id: 3, action: 'submit', title: "Can I submit my song to Melody Melon Playlists?", body: "If you are an independent artist or manager you can submit tracks to us using our submit track link as seen bellow. We also have a campaign manager tool coming soon so stay tuned."},
        { id: 4, action: 'socials', title: "Are you guys on any social media platforms?", body: "Yes you can find us on a number of social medias, the links for those are bellow. Our Instagram and twitter are the places to be. PS. We also do giveaways ;)"}
      ]

    }
  },
  components: {
    banner,
    sectionBackgroundRight,
    playlistCards,
    sectionBackgroundLeft,
    playlistFinder,
    accordion,
    spotifyPlug,
    infoCards,
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
.indexCon {

  overflow: hidden;
}
</style>
