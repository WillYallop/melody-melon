<template>
    <div>
      
        <!-- Intro Section -->
        <div class="introSectionContainer">
            <div class="textWrapper">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo.</p>
                <button class="submitSongBtn">Submit Song</button>
            </div>
            <div class="imageWrapper">
                <img class="bannerImage" src="@/assets/images/contactBannerImage.svg" alt="Banner Illustration" data-not-lazy>
            </div>
        </div>

        <!-- Section 1 -->
        <div class="section1Container">

            <div class="section1BackgroundShape"></div>
        </div>

        <!-- Contact Form -->
        <contactForm/>

        <!-- Footer -->
        <footerComponent/>

    </div>
</template>

<script>
import contactForm from '@/components/Contact/Components/ContactForm'
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
        contactForm,
        footerComponent

    },
    computed: {

    },
    methods: {

    }
}
</script>

<style scoped>
/* Intro Section */
.introSectionContainer {
  margin: 80px 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.textWrapper {
  max-width: 544px;
 
}
.textWrapper h1 {
  font-size: 50px;
  margin: 0;
  padding: 0 0 20px;
  color: #FFF;
  font-weight: bold;
}
.textWrapper p {
  margin: 0;
  font-size: 20px;
  padding: 0;
  color: #EAEAEA;
}
.submitSongBtn {
  padding: 10px 40px;
  border: 2px solid #FFF;
  background-color: transparent;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  margin-top: 20px;
}

.imageWrapper {
  display: flex;
  justify-content: flex-end;
}
.bannerImage {
  width: 80%;
}

/* Section 1 */
.section1Container {
  width: 100%;
  margin: 80px 0 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 500;
}
.section1Wrapper {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  box-sizing: border-box;
  z-index: 20;
  position: relative;
  display: flex;
}
.section1TextareaWrapper {
  width: 60%;
  padding: 80px 0 70px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;

}
.section1TextareaWrapper h2 {
  margin: 0;
  color: #FFF;
  padding: 0 0 20px;
}
.section1TextareaWrapper p {
  margin: 0;
  padding: 0;
  color: #FFF;
}
.section1BackgroundShape {
  width: 70%;
  height: 400px;
  background-color: #FFF;
  opacity: 0.3;
  border-radius: 0 200px 200px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.section1BackgroundShape {width: 90%;}



@media only screen and (max-width: 1709px) {
  .bannerImage {display: none;}
}

/* For Tablets */
@media only screen and (max-width: 1024px) {
  /* Intro Section */
  .textWrapper h1 {font-size: 4vw;}
  .textWrapper p {font-size: 2vw;}
  .bannerImage {display: flex;}

  /* Section 1 */
  .section1BackgroundShape {width: 95%;}
  .section1TextareaWrapper {width: 80%;}
}

/* For Mobile */
@media screen and (max-width: 767px) {
/* Intro Section */
  .introSectionContainer {flex-wrap: wrap; padding: 0 20px;}
  .imageWrapper {padding: 50px 0 0; justify-content: flex-start;}
  .bannerImage {width: 80%;}
  .textWrapper h1 {font-size: 8vw;}
  .textWrapper p {font-size: 18px;}
  .submitSongBtn {display: none;}

  /* Section 1*/
  .section1Wrapper {padding: 0 20px}

}
</style>