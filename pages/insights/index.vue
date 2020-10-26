<template>
  <div>
    
    <!-- Banner -->
    <Banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :button="bannerData.button"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight/>
    <!-- Blog List -->
    <BlogList :style="{ 'margin-top' : '-200px' }"
    :insights="insights"
    :pinned="pinned"/>

    <!-- Footer -->
    <footerComp/>

  </div>  
</template>

<script>
// components
import Banner from '@/components/Insights/InsightsBanner'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import BlogList from '@/components/Insights/Slug/BlogList'
import footerComp from '@/components/GlobalComponents/Footer'

export default {
    async asyncData({ $content }) {
        const insights = await $content('insights').sortBy('date', 'desc').limit(10).fetch()
        const pinned = await $content('insights').where({ pinned: true }).limit(1).fetch()
        return { insights, pinned }
    },
    head() {
      return {
        title: 'Fruity insights | Melody Melon',
        meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Creator tips, news, event coverage and industry insights, all with the Melody Melon fruity insights.'
            },
            {
              hid: "og:url",
              property: 'og:url',
              content: 'https://melodymelon.com/insights'
            },
            {
              hid: "og:type",
              property: 'og:type',
              content: 'website'
            },
            {
              hid: "og:title",
              property: 'og:title',
              content: 'Fruity insights | Melody Melon'
            },
            {
              hid: "og:description",
              property: 'og:description',
              content: 'Creator tips, news, event coverage and industry insights, all with the Melody Melon fruity insights.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://melodymelon.com/insights'
            }
        ]
      }
  },
    data() {
        return {
            // banner data
            bannerData: {
                heading: 'Fruity Insights',
                subHeading: 'Creator tips, news, event coverage and industry insights, all with the Melody Melon fruity insights.',
                button: ['/contact', 'contact us']
            },

        }
    },
    components: {
        Banner,
        sectionBackgroundRight,
        BlogList,
        footerComp,

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
