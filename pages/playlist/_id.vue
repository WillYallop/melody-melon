<template>
  <div>
      
    <!-- Banner -->
    <PlaylistBanner/>
    
    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <PlaylistSectionBackgroundRight/>
    <!-- playlist info -->
    <PlaylistInfo :style="{ 'margin-top' : '-200px' }"
    :playlistData="playlistData"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <PlaylistSectionBackgroundLeft
    :heading="sectionData.contactSection.heading"
    :subHeading="sectionData.contactSection.subHeading"/>
    <!-- contact  -->
    <ContactForm :style="{ 'margin-top' : '-120px' }"/>

    <!-- Footer -->
    <FooterComp/>

  </div>  
</template>

<script>
//json
import playlistsJson from '@/components/Playlists.json'

// components
import PlaylistBanner from '@/components/Playlists/PlaylistBanner'
import PlaylistSectionBackgroundRight from '@/components/Playlists/PlaylistSectionBackgroundRight'
import PlaylistSectionBackgroundLeft from '@/components/Playlists/PlaylistSectionBackgroundLeft'
import PlaylistInfo from '@/components/Playlists/PlaylistInfo'
import ContactForm from '@/components/PageComponents/ContactForm'
import FooterComp from '@/components/GlobalComponents/Footer'

export default {
    validate ({ params }) {
        //Check against json array
        const checkUrl = playlistsJson.find( ({ playlistUrl }) => playlistUrl === params.id )
        if (checkUrl) {
            return true
        } else {
            return false
        }
    },
    data() {
        return {
            //json
            playlistObject: playlistsJson,
            // section data
            sectionData: {
                contactSection: {
                    heading: 'Get placed on our playlist!',
                    subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                }
            }
        }
    },
    components: {
        PlaylistBanner,
        PlaylistSectionBackgroundRight,
        PlaylistInfo,
        PlaylistSectionBackgroundLeft,
        ContactForm,
        FooterComp

    },
    mounted() {

    },
    computed: {
        playlistData() {
          //Check against json array
          const checkUrl = playlistsJson.find( ({ playlistUrl }) => playlistUrl === this.$route.params.id )
          return checkUrl
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
