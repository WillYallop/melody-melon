<template>
  <div>
    
    <!-- Banner -->
    <banner 
    :heading="bannerData.heading"
    :subHeading="bannerData.subHeading"
    :button="bannerData.button"/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <sectionBackgroundRight/>
    <!-- Blog List -->
    <BlogList :style="{ 'margin-top' : '-200px' }"
    :blogs="blogs"
    :pinned="pinned"/>

    <!-- Footer -->
    <footerComp/>

  </div>  
</template>

<script>
// components
import banner from '@/components/Blog/BlogBanner.vue'
import sectionBackgroundRight from '@/components/PageComponents/SectionBackgroundRight'
import BlogList from '@/components/Blog/Slug/BlogList'
import footerComp from '@/components/GlobalComponents/Footer'

export default {
    async asyncData({ $content }) {
        const blogs = await $content('blog').sortBy('createdAt', 'desc').limit(10).fetch()
        const pinned = await $content('blog').where({ pinned: true }).limit(1).fetch()
        return { blogs, pinned }
    },
    data() {
        return {
        // banner data
        bannerData: {
            heading: 'Fruity Blogs',
            subHeading: 'Creator tips, news, event coverage and industry insights, all with the Melody Melon fruity blog.',
            button: ['/contact', 'contact us']
        },

        }
    },
    components: {
        banner,
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
