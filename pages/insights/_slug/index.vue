<template>
    <div>

        <!-- Banner -->
        <div class="blogBannerContainer">
            <div class="blogBanner" :style="{ backgroundImage: `url(${insights.image})`, 'background-color' : insights.accentColor}">
                <div class="blogBanWrapper">
                    <div class="banContCon">
                        <!-- Title -->
                        <h1 class="banTitleP">{{insights.title}}</h1>
                        <!-- Tags -->
                        <div class="tagCon" :key="tag" v-for="tag in insights.tags">
                            <p>{{tag}}</p>
                        </div>
                        <!-- Blog Info -->
                        <div class="postInfoCon">
                            <div class="postInfoCol">
                                <p><fa class="fas" :icon="['fas', 'user-circle']" />{{insights.author}}</p>
                            </div>
                            <div class="postInfoCol">
                                <p><fa class="fas" :icon="['fas', 'calendar-alt']" />{{formatDate(insights.date)}}</p>
                            </div>
                        </div>
                        <!-- Socials Share -->
                        <div class="socialLinksCon"> 
                            <client-only>
                                <ShareNetwork class="socialCol fbCol"
                                    :network="'facebook'"
                                    :url="'https://melodymelon.com/insights/' + insights.slug"
                                    :title="insights.title"
                                    :description="insights.description">
                                    <fa class="fas" :icon="['fab', 'facebook']" />
                                </ShareNetwork>
                                <ShareNetwork class="socialCol emailCol"
                                    :network="'Email'"
                                    :url="'https://melodymelon.com/insights/' + insights.slug"
                                    :title="insights.title"
                                    :description="insights.description">
                                    <fa class="fas" :icon="['fas', 'envelope']" />
                                </ShareNetwork>
                                <ShareNetwork class="socialCol twitCol"
                                    :network="'Twitter'"
                                    :url="'https://melodymelon.com/insights/' + insights.slug"
                                    :title="insights.title"
                                    :description="insights.description">
                                    <fa class="fas" :icon="['fab', 'twitter']" />
                                </ShareNetwork>
                            </client-only>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Blog Content -->
        <div class="blogContent siteWrapper sitePadding">
            <!-- Blog Content -->
            <div class="blogContainer">
                <ul class="breadcrumbsCon">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><p class="crumbSpacer">»</p></li>
                    <li><nuxt-link to="/insights">Insights</nuxt-link></li>
                    <li><p class="crumbSpacer lastCrumbSpacer">»</p></li>
                    <li><p class="crumbSlug">{{insights.slug}}</p></li>
                </ul>
                <nuxt-content :document="insights"/>
                <PlaylistEmbed v-if="insights.playlist"
                :playlist="insights.playlist"/>
                <p class="signatureP">Melody Melon - Fruity playlist to fuel your day</p>
            </div>
            <SlugSidebar/>
        </div>

        <!-- Footer -->
        <footerComp class="footerCon"/>

        <!-- Site Background -->
        <div class="blogBg"></div>

    </div>  
</template>

<script>
// components
import PlaylistEmbed from '@/components/Insights/Slug/PlaylistEmbed'
import footerComp from '@/components/GlobalComponents/Footer'
import SlugSidebar from '@/components/Insights/Slug/SlugSidebar'

export default {
    async asyncData({ $content, params }) {
        const insights = await $content('insights', params.slug).fetch()
        return { insights }
    },
    data() {
        return {
           
        }
    },
    computed: {
        insightsTitle() {
            if (this.insights) return this.insights.title
            return 'Melody Melon | Insights'
        },
        insightsDescription() {
            if (this.insights) return this.formatDate(this.insights.createdAt) + ' - ' + this.insights.description
            return 'Check our awesome industry and insider insights at Melody Melon.'
        },
        insightsUrl() {
            if (this.insights) return 'https://melodymelon.com/insights/' + this.insights.slug
            return 'https://melodymelon.com'
        }, 
    },
    head() {
        return {
            title: this.insightsTitle,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.insightsDescription
                },
                {
                    hid: "og:url",
                    property: 'og:url',
                    content: this.insightsUrl
                },
                {
                    hid: "og:type",
                    property: 'og:type',
                    content: 'website'
                },
                {
                    hid: "og:title",
                    property: 'og:title',
                    content: this.insightsTitle
                },
                {
                    hid: "og:description",
                    property: 'og:description',
                    content: this.insightsDescription
                },
                {
                    hid: "og:image",
                    property: 'og:image',
                    content: this.insights.image
                }
            ],
            link: [
                {
                    rel: 'canonical',
                    href: this.insightsUrl
                }
            ]
        }
    },
    components: {
        PlaylistEmbed,
        footerComp,
        SlugSidebar,

    },
    methods: {
        /* Format Methods */
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
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
/* Site  */
.blogContent {
    padding-bottom: 80px;
    z-index: 10;
    position: relative;
    display: flex;
}
.footerCon {
    z-index: 10;
    position: relative;
}
/* Banner */
.blogBannerContainer {
    padding: 10px 10px 0;
    width: 100%;
    border-radius: 20px;
    margin-top: -80px;
    z-index: 10;
    position: relative;
}
.blogBanner {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    overflow: hidden;
}
.blogBanWrapper {
    min-height: 100%;
    height: 100%;
    width: 100%;
    padding: 180px 30px 120px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}
.banContCon {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 650px;
    flex-direction: column;
    align-items: center;
}
.banTitleP {
    color: #FFF;
    font-size: 40px;
    max-width: 950px;
    text-align: center;
}
.tagCon {
    margin: 20px 0;
    background-color: #E32539;
    padding: 5px 15px;
    border-radius: 20px;
    cursor: default;
}
.tagCon p {
    font-size: 14px;
    color: #FFF;
}
.postInfoCon {
    display: flex;
}
.postInfoCol {
    padding: 0 10px;
    cursor: default;
}
.postInfoCol p {
    color: #FFF;
}
.postInfoCol p .fas {
    margin-right: 5px;
    color: #5CE9C5;
}
.socialLinksCon {
    width: 100%;
    display: flex;
    margin-top: 20px;
    border-radius: 20px;
    overflow: hidden;
}
.socialCol {
    width: 33.33%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
}
.socialCol .fas {
    color: #FFF;
    font-size: 20px;
}
.fbCol {background-color: #1778F2;} 
.fbCol:hover {background-color: #1260C2;}
.emailCol {background-color: #EA4335;} 
.emailCol:hover {background-color: #BB362A;}
.twitCol {background-color: #1DA1F2;} 
.twitCol:hover {background-color: #1781C2;}

/* Blog Content */
.blogContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    margin: -20px 0 0;
    transition: 0.3s;
    background-color: #FFFFFF;
    border: 1px solid #EAEAEA;
    padding: 20px;
    border-radius: 20px;
}
/* Content */
.breadcrumbsCon {
    width: 100%;
    display: flex;
    border-radius: 20px;
    background-color: #F3F3F3;
    padding: 10px 20px;
    list-style-type: none;
}
.breadcrumbsCon a {
    color: #000000;
    text-decoration: none;
} 
.breadcrumbsCon a:hover {
    color: #FF2F45;
}
.crumbSlug {
    color: #2D2D2D;
}
.crumbSpacer {
    padding: 0 5px;
}

.signatureP {
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid #E4E4E4;
    font-size: 18px;
}



/* Media Queries */
@media only screen and (max-width: 1500px) {
    .pageSliderOpen .blogContent {flex-wrap: wrap;}
}

@media only screen and (max-width: 1070px) {
    .blogBannerContainer {padding: 5px 5px 0;}
    .blogBanWrapper {padding: 175px 15px 120px;}
}
@media only screen and (max-width: 768px) {
    .crumbSlug {display: none;}
    .lastCrumbSpacer {display: none;}
}
@media only screen and (max-width: 500px) {
    .banTitleP {font-size: 30px;}
}
@media only screen and (max-width: 400px) {
    .postInfoCon {flex-wrap: wrap; text-align: center;}
    .postInfoCol {width: 100%;}
    .postInfoCol:last-child {margin-top: 5px;}
}
</style>

<style>
/* Blog Content Styling */
.nuxt-content a {
    color: #E32539;
    text-decoration: none;
}
.nuxt-content h2 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: 20px;
    color: #111A2C;
}
.nuxt-content h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    color: #111A2C;
}
.nuxt-content p {
    margin-bottom: 20px;
    font-size: 18px;
}
.nuxt-content ul {
    margin-top: 10px;
    margin-bottom: 20px;
    padding-left: 20px;
    font-size: 18px;
}
.nuxt-content .blogImg {
    width: 100%;
    border-radius: 10px;
}
.nuxt-content-highlight {
    margin-bottom: 20px;
}
.nuxt-content blockquote {
    margin-top: 10px;
    padding: 0 1em;
    color: #6a737d;
    border-left: .25em solid #dfe2e5;
}
</style>