<template>
    <div class="finderContainer">
        <div class="finderWrapper sitePadding"> 


            <div class="finderTextarea">
                <h2>Follow us on Spotify</h2>
                <p>What are you waiting for? Follow Melody Melon on Spotify now so you always have an up to date playlist to jam out to, no matter where you are.</p>
                <div>
                    <a class="finderBtnStyle" href="https://open.spotify.com/user/9b0arwvohrpgzewx9e4bjkr1y">follow us</a>
                </div>
            </div>
            <div class="finderImgContainer">
                <div class="imgContainerMobile">
                    <!--<img class="mobileImg" loading="lazy" src="../../assets/images/spotifyMobile.png" alt="Follow us on Spotify"> -->
                    <picture>
                        <source :srcSet="require('~/assets/images/spotifyMobile.png?webp')" type="image/webp" />
                        <source :srcSet="require('~/assets/images/spotifyMobile.png')" type="image/png" />
                        <img class="mobileImg" loading="lazy" :src="require('~/assets/images/spotifyMobile.png')" alt="Follow us on Spotify"/>
                    </picture>
                </div>
                <div class="imgContainerDesktop">
                    <!--<img class="desktopImg" loading="lazy" src="../../assets/images/spotifyDesktop.png" alt="Follow us on Spotify">-->
                    <picture class="desktopImgCon">
                        <source :srcSet="require('~/assets/images/spotifyDesktop.png?webp')" type="image/webp" />
                        <source :srcSet="require('~/assets/images/spotifyDesktop.png')" type="image/png" />
                        <img class="desktopImg" loading="lazy" :src="require('~/assets/images/spotifyDesktop.png')" alt="Follow us on Spotify"/>
                    </picture>
                </div>
                <div class="mobileBtnContainer">
                    <a href="https://open.spotify.com/user/9b0arwvohrpgzewx9e4bjkr1y" class="finderBtnStyle">follow us</a>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.finderContainer {
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 500;
}
.finderWrapper {
  display: flex;
  justify-content: center;
  max-width: 900px;
}    

/* img container */
.finderImgContainer { 
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-left: 80px;
}
.imgContainerDesktop {
    display: none;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
}
.mobileImg  {
    width: auto;
    max-height: 400px;
    border-radius: 10px;
}
.desktopImgCon {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.desktopImg  {
    width: 80%;
}
.mobileBtnContainer  {
    display: none;
    justify-content: center;
    width: 100%;
}
/* textarea */
.finderTextarea {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.finderTextarea h2 {
    font-size: 24px;
    color: #FFF;
    margin: 0 0 20px;
}
.finderTextarea p {
    color: #FFF;
}
/* btn style */
.finderBtnStyle {
    display: block;
    width: 200px;
    margin-top: 40px;
    padding: 10px 60px;
    border-radius: 20px;
    border: 2px solid #FFF;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
}
.finderBtnStyle:hover {
    transform: scale(1.1);
}

@media screen and (max-width: 1310px) {
    .finderImgContainer {padding-left: 40px;}
}
@media screen and (max-width: 580px) {
    .imgContainerMobile {display: none;}
    .imgContainerDesktop {display: flex;}
    .finderWrapper {flex-wrap: wrap;}
    .finderImgContainer {width: 100%; padding-left: 0; margin-top: 40px;}
    .mobileBtnContainer {display: flex;}
    .finderTextarea .finderBtnStyle {display: none;}
    .finderTextarea {width: 100%; text-align: center;}
}
</style>