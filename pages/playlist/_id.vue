<template>
  <div>
      
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :imageName="bannerData.imageName"
    :button="bannerData.button"/>
    
    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight/>
    <!-- playlist info -->
    <playlistInfo :style="{ 'margin-top' : '-200px' }"
    :playlistData="playlistData"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundLeft
    :heading="sectionData.contactSection.heading"
    :subHeading="sectionData.contactSection.subHeading"/>
    <!-- contact  -->
    <contactForm :style="{ 'margin-top' : '-120px' }"/>

    <!-- Footer -->
    <footerComp/>

  </div>  
</template>

<script>
//json
import playlistsJson from '@/components/Playlists.json'

// components
import banner from '@/components/PageComponents/Banner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import sectionBackgroundLeft from '@/components/PageComponents/SectionBackgroundLeft'
import playlistInfo from '@/components/PageComponents/PlaylistInfo'
import contactForm from '@/components/PageComponents/ContactForm'
import footerComp from '@/components/GlobalComponents/Footer'

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
            // banner data
            bannerData: {
                heading: 'Check Out Our Range of Playlists',
                subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo. Sit amet justo.',
                imageName: 'bannerImage.svg',
                button: ['submit', 'submit song']
            },
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
        banner,
        sectionBackgroundRight,
        sectionBackgroundLeft,
        playlistInfo,
        contactForm,
        footerComp

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
