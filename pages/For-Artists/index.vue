<template>
  <div>
      
    <!-- Banner -->
    <ForArtistsBanner/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <ForArtistsSectionBackgroundRight
    :heading="sectionData.counter.heading"
    :subHeading="sectionData.counter.subHeading"/>
    <!-- Counter -->
    <Counter :style="{ 'margin-top' : '-120px' }"/>

    <!-- section background left - always make div bellow margin-top: -120px if section has text else its -200px -->
    <ForArtistsSectionBackgroundLeft
    :heading="sectionData.pricingTable.heading"
    :subHeading="sectionData.pricingTable.subHeading"/>
    <!-- pricing table -->
    <PricingTable :style="{ 'margin-top' : '-120px' }"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <ForArtistsSectionBackgroundRight
    :heading="sectionData.faq.heading"
    :subHeading="sectionData.faq.subHeading"/>
    <!-- Accordion -->
    <ForArtistsAccordion :style="{ 'margin-top' : '-120px', 'padding-bottom' : '80px' }"
    :accordionData="accordionData"/>

    <!-- Footer -->
    <FooterComp/>

  </div>  
</template>

<script>
// components
import ForArtistsBanner from '@/components/ForArtists/ForArtistsBanner'
import ForArtistsSectionBackgroundRight from '@/components/ForArtists/ForArtistsSectionBackgroundRight'
import Counter from '@/components/ForArtists/Counter'
import ForArtistsSectionBackgroundLeft from '@/components/ForArtists/ForArtistsSectionBackgroundLeft'
import PricingTable from '@/components/ForArtists/PricingTable'
import ForArtistsAccordion from '@/components/ForArtists/ForArtistsAccordion'
import FooterComp from '@/components/GlobalComponents/Footer'

export default {
  data() {
    return {

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
    ForArtistsBanner,
    ForArtistsSectionBackgroundRight,
    ForArtistsSectionBackgroundLeft,
    Counter,
    PricingTable,
    ForArtistsAccordion,
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

</style>
