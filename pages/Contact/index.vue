<template>
  <div>
      
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :button="bannerData.button"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight/>
    <!-- contact  -->
    <contactForm :style="{ 'margin-top' : '-200px' }"/>

    <!-- Footer -->
    <footerComp/>

  </div>  
</template>

<script>
// components
import banner from '@/components/Contact/ContactBanner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import contactForm from '@/components/PageComponents/ContactForm'
import footerComp from '@/components/GlobalComponents/Footer'

export default {
    head() {
      return {
        title: 'Contact us | Melody Melon',
        meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Got a question for the Melody Melon team or just want to tell us something? Hit us up! We always love to hear from our fans.'
            },
            {
              hid: "og:url",
              property: 'og:url',
              content: 'https://melodymelon.com/contact'
            },
            {
              hid: "og:type",
              property: 'og:type',
              content: 'website'
            },
            {
              hid: "og:title",
              property: 'og:title',
              content: 'Contact us | Melody Melon'
            },
            {
              hid: "og:description",
              property: 'og:description',
              content: 'Got a question for the Melody Melon team or just want to tell us something? Hit us up! We always love to hear from our fans.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://melodymelon.com/contact'
            }
        ]
      }
  },
  data() {
    return {
      // banner data
      bannerData: {
        heading: 'Hit Us Up',
        subHeading: 'Still have questions? Feel free to drop us a message on any questions you may have.',
        imageName: 'contactBannerImage.svg',
        button: ['submit', 'submit song']
      },

    }
  },
  components: {
    banner,
    sectionBackgroundRight,
    contactForm,
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

</style>
