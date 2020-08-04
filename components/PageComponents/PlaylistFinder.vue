<template>
    <div class="finderContainer">
        <div class="finderWrapper sitePadding"> 

            <div class="finderImgContainer">
                <div class="imgContainerMobile">
                    <img class="mobileImg" src="../../assets/images/playlistFinder2.png" alt=""> 
                </div>
                <div class="imgContainerDesktop">
                    <img class="desktopImg" src="../../assets/images/playlistFinder5.jpg" alt="">
                </div>
                <div class="mobileBtnContainer">
                    <button class="finderBtnStyle">visit</button>
                </div>
            </div>
            <div class="finderTextarea">
                <h4>Find Your Perfect Playlist</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sit amet justo ut porttitor. Suspendisse vehicula ultrices tincidunt.</p>
                <div>
                    <button class="finderBtnStyle">visit</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.finderContainer {
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 500;
}
.finderWrapper {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
}    

/* img container */
.finderImgContainer { 
    display: flex;
    flex-wrap: wrap;
    padding-right: 40px;
}
.imgContainerMobile {
    padding: 20px 10px 10px;
    border-radius: 10px;
    background-color: #FFF;
}
.imgContainerDesktop {
    display: none;
    padding: 10px; 
    border-radius: 20px; 
    background-color: #FFF;
    width: 100%;
}
.mobileImg  {
    width: auto;
    max-height: 400px;
    border-radius: 10px;
}
.desktopImg  {
    width: 100%;
    border-radius: 10px;
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
.finderTextarea h4 {
    font-size: 24px;
    color: #FFF;
    margin: 0 0 20px;
}
.finderTextarea p {
    color: #FFF;
}
/* btn style */
.finderBtnStyle {
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