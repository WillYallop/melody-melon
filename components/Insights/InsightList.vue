<template>
    <div>

        <!-- Pinned Blog -->
        <div class="insightRow" :key="pinned.slug + ' 1'" v-for="pinned in pinned">
            <nuxt-link :to="'/insights/'+ pinned.slug" class="insightRowInner">
                <!-- Insights Image -->
                <div class="insightImgCon">
                    <img class="insightImg" :src="pinned.image" :alt="pinned.title">
                    <div class="imgOverlay"></div>
                    <!-- Insights Tags -->
                    <div class="tagsContainer">
                        <div class="tag" :key="tag" v-for="tag in pinned.tags">
                            <p>{{tag}}</p>
                        </div>
                        <div class="tag pinnedTag">
                            <p>Pinned</p>
                        </div>
                    </div>
                </div>
                <!-- Insights Body -->
                <div class="insightBody">
                    <!-- Insights Text -->
                    <h2 class="insightsTitleP">{{pinned.title}}</h2>
                    <p class="insightsBodyP">{{pinned.description}}</p>
                    <!-- Insights Info -->
                    <div class="insightsInfoCon">
                        <div class="insightsInfoCol">
                            <p><fa class="fas" :icon="['fas', 'user-circle']" />{{pinned.author}}</p>
                        </div>
                        <div class="insightsInfoCol">
                            <p><fa class="fas" :icon="['fas', 'calendar-alt']" />{{formatDate(pinned.date)}}</p>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>

        <!-- Blog Row -->
        <div class="insightRow" :key="insight.slug" v-for="insight in insights">
            <nuxt-link :to="'/insights/'+ insight.slug" class="insightRowInner" v-if="pinned.length === 0 || !insight.pinned">
                <!-- Insights Image -->
                <div class="insightImgCon">
                    <img class="insightImg" :src="insight.image" :alt="insight.title">
                    <div class="imgOverlay"></div>
                    <!-- Insights Tags -->
                    <div class="tagsContainer">
                        <div class="tag" :key="tag" v-for="tag in insight.tags">
                            <p>{{tag}}</p>
                        </div>
                    </div>
                </div>
                <!-- Insights Body -->
                <div class="insightBody">
                    <!-- Insights Text -->
                    <h2 class="insightsTitleP">{{insight.title}}</h2>
                    <p class="insightsBodyP">{{insight.description}}</p>
                    <!-- Insights Info -->
                    <div class="insightsInfoCon">
                        <div class="insightsInfoCol">
                            <p><fa class="fas" :icon="['fas', 'user-circle']" />{{insight.author}}</p>
                        </div>
                        <div class="insightsInfoCol">
                            <p><fa class="fas" :icon="['fas', 'calendar-alt']" />{{formatDate(insight.date)}}</p>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
         
        }
    },
    props: {
        insights: Array,
        pinned: Array

    },
    methods: {
        /* Format Methods */
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
    }
}
</script>

<style scoped>
.insightRow {
    width: 100%;
} 
.insightRowInner {
    display: block;
    width: 100%;
    border-radius: 20px;
    border: 1px solid #EAEAEA;
    background-color: #FFFFFF;
    padding: 10px;
    position: relative;
    text-decoration: none;
    margin-bottom: 10px;
} 
/* Image Con */
.insightImgCon {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
} 
.insightImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    position: relative;
    z-index: 0;
    transition: 0.3s;
} 
.insightRowInner:hover .insightImg {
    transform: scale(1.1);
}
.imgOverlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 5;
    border-radius: 10px;
}
.tagsContainer {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    z-index: 10;
} 
.tag {
    padding: 5px 10px;
    border-radius: 20px;
    background-color: #3DA389;
    margin-right: 10px;
    text-transform: capitalize;
} 
.tag:last-child {
    margin-right: 0;
}
.tag p {
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
}
.pinnedTag {
    background-color: #FF2F45;
} 
/* Body Con */
.insightBody {
    padding: 10px;
}
.insightsInfoCon {
    display: flex;
}
.insightsInfoCol {
    margin-right: 20px;
    cursor: default;
}
.insightsInfoCol:last-child {
    margin-right: 0;
}
.insightsInfoCol p {
    color: #313131;
}
.insightsInfoCol p .fas {
    margin-right: 5px;
    color: #5CE9C5;
}
.insightsTitleP {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 10px;
    color: #000000;
} 
.insightsBodyP {
    color: #000000;
    margin: 0 0 10px;
}

/* Media Queries */
@media only screen and (max-width: 400px) {
    .insightsInfoCon {flex-wrap: wrap;}
}
</style>