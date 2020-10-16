<template>
  <div>
      
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :button="bannerData.button"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight
    :heading="sectionData.counter.heading"
    :subHeading="sectionData.counter.subHeading"/>
    <!-- Counter -->
    <counter :style="{ 'margin-top' : '-120px' }"/>

    <!-- section background left - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundLeft
    :heading="sectionData.pricingTable.heading"
    :subHeading="sectionData.pricingTable.subHeading"/>
    <!-- pricing table -->
    <pricingTable :style="{ 'margin-top' : '-120px' }"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight
    :heading="sectionData.faq.heading"
    :subHeading="sectionData.faq.subHeading"/>
    <!-- Accordion -->
    <accordion :style="{ 'margin-top' : '-120px', 'padding-bottom' : '80px' }"
    :accordionData="accordionData"/>

    <!-- Footer -->
    <footerComp/>

  </div>  
</template>

<script>
// components
import banner from '@/components/PageComponents/Banner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import counter from '@/components/PageComponents/Counter'
import footerComp from '@/components/GlobalComponents/Footer'
import sectionBackgroundLeft from '@/components/PageComponents/SectionBackgroundLeft'
import accordion from '@/components/PageComponents/Accordion'
import pricingTable from '@/components/PageComponents/PricingTable'

export default {
  data() {
    return {
      // banner data
      bannerData: {
        heading: 'For Artists',
        subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo. Sit amet justo.',
        button: ['submit', 'submit song']
      },
      // section data
      sectionData: {
        counter: {
          heading: 'What we can do for you',
          subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        pricingTable: {
          heading: 'What we can do for you',
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
    footerComp,
    sectionBackgroundLeft,
    accordion,
    counter,
    pricingTable

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
