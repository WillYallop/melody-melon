<template>
    <div class="sidebarCon">
        <h2>Insights you may like:</h2>
        <div class="sidebarWrapper">
            <nuxt-link :to="'/insights/' + insight.slug" class="insightCon" :key="insight.title" v-for="insight in insights">
                <img class="insightImg" loading="lazy" :src="insight.image" alt="Insight Image"/>
                <div class="bodyCon">
                    <p class="insightTitleP">{{insight.title}}</p>
                    <p class="insightBodyP">{{insight.description}}</p>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            insights: []
        }
    },
    mounted() {
        this.$content('insights').sortBy('date', 'desc').limit(2).fetch()
        .then((response) => {
            this.insights = response 
        })
        .catch((err) => {
            console.log(err)
        })
    },
    computed: {
  
    },
    methods: {

    }
}
</script>

<style scoped>
.sidebarCon {
    width: 350px;
    min-width: 350px;   
    padding-left: 10px;
    margin-top: -20px;
}
.sidebarCon h2 {
    display: none;
    font-size: 24px;
    margin-bottom: 20px;
}
.sidebarWrapper {
    width: 100%;
    position: sticky;
    top: 70px;
    border-radius: 20px;
    overflow: hidden;
}

/* Insight */
.insightCon {
    display: block;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 10px;
    text-decoration: none;
    color: #111111;
}
.insightCon:last-child {
    margin-bottom: 0;
}
.insightImg {
    width: 100%;
    height: 150px;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    z-index: 5;
    position: relative;
    transition: 0.3s;
}
.insightCon:hover .insightImg {
    transform: scale(1.1);
}
.bodyCon {
    margin-top: -4px;
    padding: 10px 20px 10px;
    border: 1px solid #EAEAEA;
    background-color: #FFFFFF;
    border-top: none;
    border-radius: 0 0 20px 20px;
    z-index: 10;
    position: relative;
}
.insightTitleP {
    font-weight: bold;
    margin-bottom: 5px;
    text-decoration: none;
} 
.insightBodyP {
    line-height: 18px;
    max-height: 54px;
    overflow: hidden;
}

@media only screen and (max-width: 1500px) {
    /* PLaylist Bar Open */
    .pageSliderOpen .sidebarCon h2 {display: flex;}
    .pageSliderOpen .sidebarCon {width: 100%;min-width: auto; padding-left: 0; margin-top: 40px;}
    .pageSliderOpen .sidebarWrapper {display: flex; flex-wrap: wrap; justify-content: space-between;}
    .pageSliderOpen .insightCon {width: 49%;}
}
@media only screen and (max-width: 1070px) {
    .sidebarCon {width: 100%;min-width: auto; padding-left: 0; margin-top: 40px;}
    .sidebarWrapper {display: flex; flex-wrap: wrap; justify-content: space-between;}
    .insightCon {width: 49%;}
}
@media only screen and (max-width: 600px) {
    .insightCon {width: 100%;}
    .pageSliderOpen .insightCon {width: 100%;}
}
</style>