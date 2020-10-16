<template>
  <div>
    
    <!-- Banner -->
    <BlogBanner/>

    <!-- section background right - always make div bellow margin-top: -120px if section has text else its -200px -->
    <BlogSectionBackgroundRight/>
    <!-- Blog List -->
    <BlogList :style="{ 'margin-top' : '-200px' }"
    :blogs="blogs"
    :pinned="pinned"/>

    <!-- Footer -->
    <FooterComp/>

  </div>  
</template>

<script>
// components
import BlogBanner from '@/components/Blog/BlogBanner.vue'
import BlogSectionBackgroundRight from '@/components/Blog/BlogSectionBackgroundRight'
import BlogList from '@/components/Blog/Slug/BlogList'
import FooterComp from '@/components/GlobalComponents/Footer'

export default {
    async asyncData({ $content }) {
        const blogs = await $content('blog').sortBy('createdAt', 'desc').limit(10).fetch()
        const pinned = await $content('blog').where({ pinned: true }).limit(1).fetch()
        return { blogs, pinned }
    },
    data() {
        return {

        }
    },
    components: {
        BlogBanner,
        BlogSectionBackgroundRight,
        BlogList,
        FooterComp,

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
