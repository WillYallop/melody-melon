<template>
    <div class="finderContainer">
        <div class="finderWrapper sitePadding"> 

            <div class="finderImgContainer">
                <div class="imgContainerMobile">
                    <!--<img class="mobileImg" loading="lazy" src="../../assets/images/playlistFinderMobile.png" alt="Playlist Finder">-->
                    <picture>
                        <source :srcSet="require('~/assets/images/playlistFinderMobile.png?webp')" type="image/webp" />
                        <source :srcSet="require('~/assets/images/playlistFinderMobile.png')" type="image/png" />
                        <img class="mobileImg" loading="lazy" :src="require('~/assets/images/playlistFinderMobile.png')" alt="Playlist Finder"/>
                    </picture>
                </div>
                <div class="imgContainerDesktop">
                    <!--<img class="desktopImg" loading="lazy" src="../../assets/images/playlistFinderDesktio.png" alt="Playlist Finder">-->
                    <picture class="desktopImgCon">
                        <source :srcSet="require('~/assets/images/playlistFinderDesktio.png?webp')" type="image/webp" />
                        <source :srcSet="require('~/assets/images/playlistFinderDesktio.png')" type="image/png" />
                        <img class="desktopImg" loading="lazy" :src="require('~/assets/images/playlistFinderDesktio.png')" alt="Playlist Finder"/>
                    </picture>
                </div>
                <div class="mobileBtnContainer">
                    <a href="https://finder.melodymelon.com" class="finderBtnStyle">find playlist</a>
                </div>
            </div>
            <div class="finderTextarea">
                <h2>Find Your Perfect Playlist</h2>
                <p>Struggle to find playlists to fuel your day?Look no further, check out Melody Melon playlist finder app that helps find your perfect playlist in 5 quick questions.</p>
                <div>
                    <a href="https://finder.melodymelon.com" class="finderBtnStyle">find playlist</a>
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
    padding-right: 80px;
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
.desktopImg {
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
    width: 224px;
    text-decoration: none;
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
}
.finderBtnStyle:hover {
    transform: scale(1.1);
}

@media screen and (max-width: 1310px) {
    .finderImgContainer {padding-right: 40px;}
}
@media screen and (max-width: 580px) {
    .imgContainerMobile {display: none;}
    .imgContainerDesktop {display: flex;}
    .finderWrapper {flex-wrap: wrap-reverse;}
    .finderImgContainer {width: 100%; padding-right: 0; margin-top: 40px;}
    .mobileBtnContainer {display: flex;}
    .finderTextarea .finderBtnStyle {display: none;}
    .finderTextarea {width: 100%; text-align: center;}
}
</style>