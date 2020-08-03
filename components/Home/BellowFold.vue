<template>
    <div>
        <!-- Playlist Slider -->
        <playlistCardSlider/>

        <!-- Section 3 - Playlist Finder -->
        <div class="section3Container">
            <div class="section3Wrapper"> 
            <div class="s3ImgContainer">
                <div class="ipadImgContainer">
                <img class="mobilePhoneSiteImg" src="../../assets/images/playlistFinder2.png" alt=""> 
                <img class="desktopSiteImg" src="../../assets/images/playlistFinder5.jpg" alt="">
                </div>
                <div class="mobileBtnContainer">
                <button class="s3Button mobileShowBtn">Visit</button>
                </div>
            </div>
            <div class="s3Textarea">
                <h4>Find Your Perfect Playlist</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo ut porttitor. Suspendisse vehicula ultrices tincidunt.</p>
                <div>
                <button class="s3Button mobileHideBtn">Visit</button>
                </div>
            </div>
            </div>
        </div>

        <!-- Section 4 -->
        <div class="section4Container">
            <div class="section4Wrapper">
            <div class="section4TextareaWrapper">
                <h2>Where You Can Find Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="section4BackgroundShape"></div>
        </div>

        <!-- Section 5 - Testimonials -->
        <socialSliderSection/>

        <!-- Footer -->
        <footerComponent/>

    </div>
</template>

<script>
import playlistCardSlider from '@/components/Home/Components/PlaylistCardSlider'
import socialSliderSection from '@/components/Home/Components/SocialSliderSection.vue'
import footerComponent from '@/components/Footer.vue'

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    props: {

    },
    components: {
        playlistCardSlider,
        socialSliderSection,
        footerComponent

    },
    computed: {

    },
    methods: {

    }
}
</script>

<style scoped>
/* Section 3 */
.section3Container {
  width: 100%;
  margin: 110px 0 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 500;
}
.section3Wrapper {
  width: 100%;
  max-width: 1400px;
  padding: 0 80px;
  box-sizing: border-box;
  z-index: 20;
  position: relative;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
}    
.ipadImgContainer {
  padding: 20px 10px 40px;
  box-sizing: border-box;
  background-color: #FFF;
  border-radius: 20px;
} 
.ipadImgContainer img {
  border-radius: 10px;
  max-height: 400px;
} 

.s3Textarea {
  width: 60%;
  padding-left: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
} 
.s3Textarea h4 {
  font-size: 24px;
  color: #FFF;
  margin: 0 0 20px;
} 
.s3Textarea p {
  font-size: 16px;
  color: #FFF;
  margin: 0 0 40px;
} 
.s3Button {
  padding: 10px 60px;
  border: 2px solid #FFF;
  background-color: transparent;
  color: #FFF;
  border-radius: 20px;
  font-weight: bold;
}
.mobileBtnContainer {
  display: flex;
  justify-content: center;
}
.mobileShowBtn {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}

/* Section 4 */
.section4Container {
  width: 100%;
  margin: 120px 0 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 500;
}
.section4Wrapper {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  box-sizing: border-box;
  z-index: 20;
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.section4TextareaWrapper {
  width: 60%;
  padding: 80px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;

}
.section4TextareaWrapper h2 {
  margin: 0;
  color: #FFF;
  padding: 0 0 20px;
}
.section4TextareaWrapper p {
  margin: 0;
  padding: 0;
  color: #FFF;
}
.section4BackgroundShape {
  width: 90%;
  height: 400px;
  background-color: #FFF;
  opacity: 0.3;
  border-radius: 200px 20px 20px 200px;
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 10;
}




@media only screen and (max-width: 1245px) {
  .section3Wrapper {padding: 0 40px;}
  .s3Textarea {width: 50%;}
}


@media only screen and (max-width: 1024px) {
  /* Section 3 */
  .section3Wrapper {padding: 0 20px;}

  /* section 4 */
  .section4BackgroundShape {width: 95%; border-radius: 200px 0 0 200px; right: 0;}
  .section4TextareaWrapper {width: 80%;}
}

/* For Mobile */
@media screen and (max-width: 767px) {
  /* Section 4*/
  .section4Wrapper {padding: 0 20px}
}
@media screen and (min-width: 570.1px) {
  /* Section 3 */
  .desktopSiteImg {display: none;} 
  .mobileBtnContainer {display: none;} 
}
@media screen and (max-width: 570px) {
  /* Section 3 */
  .s3Textarea {width: 100%; padding-left: 0px; text-align: center;}
  .mobilePhoneSiteImg {display: none;} 
  .s3ImgContainer {width: 100%;}
  .ipadImgContainer img {width: 100%;}
  .ipadImgContainer {padding: 10px 10px 10px 20px;}
  .mobileHideBtn {display: none;} 
  
}
</style>