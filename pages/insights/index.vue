<template>
  <div>

    <!-- Banner -->
    <div class="bannerBackgroundContainer">
      <Banner 
      :heading="bannerData.heading"
      :subHeading="bannerData.subHeading"
      :button="bannerData.button"/>
      <div class="bannerBackground"></div>
    </div>
 
    <!-- Insight List -->
    <div class="insightsContainer siteWrapper sitePadding">
      <div class="listCol">
        <InsightList
        :insights="insights"
        :pinned="pinned"/>
      </div>
      <div class="sidebarCol">
        <InsightSidebar
        @insights-filter="insightFilter"/>
      </div>
    </div>


    <!-- Footer -->
    <FooterComp class="footerCon"/>

    <!-- Site Background -->
    <div class="blogBg"></div>

  </div>  
</template>

<script>
// components
import Banner from '@/components/Insights/InsightsBanner'
import InsightList from '@/components/Insights/InsightList'
import FooterComp from '@/components/GlobalComponents/Footer'
import InsightSidebar from '@/components/Insights/InsightSidebar'

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
          }
      }
  },
  components: {
    Banner,
    InsightList,
    FooterComp,
    InsightSidebar

  },
  mounted() {

  },
  computed: {

  },
  methods: {
    insightFilter(search, category) {
      this.pinned = []
      if(category === 'all') {
        if(search.length === 0) {
          this.$content('insights').sortBy('date', 'desc').limit(10).fetch()
          .then((response) => {
            this.insights = response
          })
          this.$content('insights').where({ pinned: true }).limit(1).fetch()
          .then((response) => {
            this.pinned = response
          })
        } else {
          this.$content('insights').search(search).sortBy('date', 'desc').limit(10).fetch()
          .then((response) => {
            this.insights = response
          })
        }
      } else {
        this.$content('insights').where({ tags: { $in: category } }).search(search).sortBy('date', 'desc').limit(10).fetch()
        .then((response) => {
          this.insights = response
        })
      }

    }
  }
}
</script>

<style scoped>
/* Background */
.blogBg {
  position: fixed;
  top: 0;
  bottom: -56px;
  left: 0;
  right: 0;
  background-color: #FFFCFC;
  z-index: 0;
}
.footerCon {
  z-index: 10;
  position: relative;
}
/* Banner */
.bannerBackgroundContainer {
  width: 100%;
  z-index: 10;
  position: relative;
  margin-top: -80px;
}
.bannerBackground {
  background: linear-gradient(-45deg, #EE7752, #E72B51);
  background-size: 300% 300%;
	animation: gradient 5s ease infinite;
  border-radius: 20px;  
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 0;
  z-index: 0;
}
/* Content */
.insightsContainer {
  width: 100%;
  margin-top: -20px;
  display: flex;
  padding-bottom: 80px;
  z-index: 10;
  position: relative;
} 
.listCol {
  width: 100%;
} 
.sidebarCol {
  width: 350px;
  min-width: 350px;   
  padding-left: 10px;
}

@media only screen and (max-width: 1500px) {
  .pageSliderOpen .insightsContainer {flex-wrap: wrap-reverse;}
  .pageSliderOpen .sidebarCol {width: 100%; min-width: auto; padding-left: 0; margin-bottom: 20px;}
}
@media only screen and (max-width: 1070px) {
  .insightsContainer {flex-wrap: wrap-reverse;}
  .sidebarCol {width: 100%; min-width: auto; padding-left: 0; margin-bottom: 20px;}

  .bannerBackground {top: 5px; left: 5px; right: 5px;}
}
</style>
