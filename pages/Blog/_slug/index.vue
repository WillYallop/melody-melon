<template>
    <div>
        
        <!-- Blog Content -->
        <div class="blogContent siteWrapper sitePadding">
            <!-- Banner -->
            <div class="blogBannerContainer">
                <div class="blogBanner" :style="{ backgroundImage: `url(${getImageUrl(blog.image)})`, 'background-color' : blog.accentColor}">
                    <div class="blogBanWrapper">
                        <div class="banContCon">
                            <!-- Title -->
                            <h1 class="banTitleP">{{blog.title}}</h1>
                            <!-- Tags -->
                            <div class="tagCon" :key="tag" v-for="tag in blog.tags">
                                <p>{{tag}}</p>
                            </div>
                            <!-- Blog Info -->
                            <div class="postInfoCon">
                                <div class="postInfoCol">
                                    <p><fa class="fas" :icon="['fas', 'user-circle']" />{{blog.author}}</p>
                                </div>
                                <div class="postInfoCol">
                                    <p><fa class="fas" :icon="['fas', 'calendar-alt']" />{{formatDate(blog.createdAt)}}</p>
                                </div>
                            </div>
                            <!-- Socials Share -->
                            <div class="socialLinksCon"> 
                                <client-only>
                                    <ShareNetwork class="socialCol fbCol"
                                        :network="'facebook'"
                                        :url="'https://melodymelon.com/blog/' + blog.slug"
                                        :title="blog.title"
                                        :description="blog.description">
                                        <fa class="fas" :icon="['fab', 'facebook']" />
                                    </ShareNetwork>
                                    <ShareNetwork class="socialCol emailCol"
                                        :network="'Email'"
                                        :url="'https://melodymelon.com/blog/' + blog.slug"
                                        :title="blog.title"
                                        :description="blog.description">
                                        <fa class="fas" :icon="['fas', 'envelope']" />
                                    </ShareNetwork>
                                    <ShareNetwork class="socialCol twitCol"
                                        :network="'Twitter'"
                                        :url="'https://melodymelon.com/blog/' + blog.slug"
                                        :title="blog.title"
                                        :description="blog.description">
                                        <fa class="fas" :icon="['fab', 'twitter']" />
                                    </ShareNetwork>
                                </client-only>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Blog Content -->
            <div class="blogContainer">
                <div class="breadcrumbsCon">
                    <nuxt-link to="/">Home</nuxt-link>
                    <p class="crumbSpacer">»</p>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                    <p class="crumbSpacer lastCrumbSpacer">»</p>
                    <p class="crumbSlug">{{blog.slug}}</p>
                </div>
                <nuxt-content :document="blog" />
            </div>
        </div>


        <!-- Footer -->
        <footerComp/>

    </div>  
</template>

<script>
// components
import footerComp from '@/components/GlobalComponents/Footer'

export default {
    async asyncData({ $content, params }) {
        const blog = await $content('blog', params.slug).fetch()
        return { blog }
    },
    data() {
        return {
     
        }
    },
    computed: {
        blogTitle() {
            if (this.blog) return this.blog.title
            return 'A blog'
        },
        blogDescription() {
            if (this.blog) return this.blog.description
            return 'Check out my awesome blogs at my personal website, williamyallop.com'
        },
        blogImage() {
            if (this.blog) return this.getImageUrl(this.blog.image)
            return 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }, 
    },
    head() {
        return {
            title: 'Melody Melon | ' + this.blogTitle,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.blogDescription
                },
                {
                    hid: "og:url",
                    property: 'og:url',
                    content: 'https:/melodymelon.com'
                },
                {
                    hid: "og:type",
                    property: 'og:type',
                    content: 'website'
                },
                {
                    hid: "og:title",
                    property: 'og:title',
                    content: this.blogTitle
                },
                {
                    hid: "og:description",
                    property: 'og:description',
                    content: this.blogDescription
                },
                {
                    hid: "og:image",
                    property: 'og:image',
                    content: 'https://melodymelon.com' + this.blogImage
                }
            ]
        }
    },
    components: {
        footerComp,

    },
    methods: {
        /* Format Methods */
        getImageUrl(name) {
            var images = require.context('../../../assets/images/blog/', false)
            return images('./' + name)
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>

<style scoped>
.blogContent {
    padding-bottom: 80px;
}
/* Banner */
.blogBannerContainer {
    width: calc(100% + 40px);
    border-radius: 10px;
    overflow: hidden;
    margin-left: -20px;
    border-radius: 10px;
    margin-top: -60px;
}
.blogBanner {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.blogBanWrapper {
    min-height: 100%;
    height: 100%;
    width: 100%;
    padding: 160px 40px 120px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.banContCon {
    display: flex;
    flex-wrap: wrap;
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
    background-color: #1E63EB;
    padding: 5px 10px;
    border-radius: 5px;
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
    color: #00FF5F;
}
.socialLinksCon {
    width: 100%;
    display: flex;
    margin-top: 20px;
    border-radius: 10px;
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
    max-width: 1400px;
    margin: -20px 0 0;
    transition: 0.3s;
    background-color: #1E1E1E;
    padding: 20px;
    border-radius: 10px;
    color: #FFF;
}
/* Content */
.breadcrumbsCon {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #2A2A2A;
}
.breadcrumbsCon a {
    color: #E32539;
    text-decoration: none;
} 
.crumbSlug {
    color: #D5D5D5;
}
.crumbSpacer {
    padding: 0 5px;
}


/* Media Queries */
@media only screen and (max-width: 1350px) {
    .blogContentCol {width: 100%; margin-bottom: 40px;} 
    .blogSidebarCol {width: 100%; min-width: auto;} 
}
@media only screen and (max-width: 1070px) {
    .blogBannerContainer {margin-top: -75px;width: calc(100% + 30px); margin-left: -15px;}
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
