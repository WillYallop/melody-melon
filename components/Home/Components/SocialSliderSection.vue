<template>
    <div class="section5Container">
        <div class="section5Wrapper">

            <div class="socialSliderContainer">

                <div class="swiperContainer" v-swiper:mySwiper="swiperOptions">
                    <div class="swiper-wrapper">
                        <!-- Slide 1 -->
                        <div class="slideContainer swiper-slide" lazy-background="~/assets/images/socialSliderBgs/1.jpg">
                            <img class="socialIcon" src="../../../assets/images/socialIcons/spotify.png" alt="">
                            <div class="slideBackgroundOverlay"></div>
                        </div>
                        <!-- Slide 2 -->
                        <div class="slideContainer swiper-slide" lazy-background="~/assets/images/socialSliderBgs/2.jpg">
                            <img class="socialIcon" src="../../../assets/images/socialIcons/tidal.png" alt="" >
                            <div class="slideBackgroundOverlay"></div>
                        </div>
                        <!-- Slide 3 -->
                        <div class="slideContainer swiper-slide" lazy-background="~/assets/images/socialSliderBgs/3.jpg">
                            <img class="socialIcon" src="../../../assets/images/socialIcons/applemusic.png" alt="" >
                            <div class="slideBackgroundOverlay"></div>
                        </div>
                        <!-- Slide 4 -->
                        <div class="slideContainer swiper-slide" lazy-background="~/assets/images/socialSliderBgs/4.jpg">
                            <img class="socialIcon" src="../../../assets/images/socialIcons/instagram.png" alt="" >
                            <div class="slideBackgroundOverlay"></div>
                        </div>
                        <!-- Slide 3 -->
                        <div class="slideContainer swiper-slide" lazy-background="~/assets/images/socialSliderBgs/1.jpg">
                            <img class="socialIcon" src="../../../assets/images/socialIcons/snapchat.png" alt="" >
                            <div class="slideBackgroundOverlay"></div>
                        </div>
                        <!-- Slide 4 -->
                        <div class="slideContainer swiper-slide" lazy-background="~/assets/images/socialSliderBgs/2.jpg">
                            <img class="socialIcon" src="../../../assets/images/socialIcons/facebook.png" alt="" >
                            <div class="slideBackgroundOverlay"></div>
                        </div>

                    </div>
                    <div class="swiper-pagination" slot="pagination"></div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOptions: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                }
            },

        }
    },
    components: {
        
    },
}
</script>

<style scoped>
/* Section 5 */
.section5Container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 500;
    margin: 0 0 80px
} 
.section5Wrapper {
    width: 100%;
    max-width: 1400px;
    padding: 0 40px;
    box-sizing: border-box;
    z-index: 20;
    position: relative;
    display: flex;
}
.socialSliderContainer {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
}
.swiperContainer {
    width: 100%;
}
.slideContainer {
    width: 25%;
    height: 300px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.slideContainer:first-child {
    border-radius: 20px 0 0 20px;
}
.slideContainer:last-child {
    border-radius: 0 20px 20px 0;
}
.socialIcon {
    width: 50%;
    z-index: 20;
    position: relative;
}
.slideBackgroundOverlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}


@media only screen and (max-width: 1024px) {
    .section5Wrapper {padding: 0 20px;}
}
@media only screen and (max-width: 675px) {
    .slideContainer {width: 50%;}
}
</style>