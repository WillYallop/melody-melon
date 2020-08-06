<template>
    <div class="playlistComponentContainer">
        <div class="playlistComponentWrapper siteWrapper sitePadding">
            
            <div class="playlistContainer">
                <div class="col1">
                    <h4>{{playlistData.playlistName}}</h4>
                    <p>{{playlistData.playlistDescription}}</p>
                    <div class="imageContainer">
                        <img class="playlistImage" :src="getImageUrl(playlistData.icon)" alt="Playlist Artwork">
                        <div class="backgrounImageOverlay"></div>
                        <img :src="getImageUrl(playlistData.icon)" alt="playlist artwork" class="backgrounImage">
                    </div>
                    <button class="followPlaylistBtn">follow</button> 
                </div>
                <div class="col2">
                    <iframe :src="'https://open.spotify.com/embed/playlist/' + playlistData.playlistSpotifyUrl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <div class="col2BtnArea">
                        <button class="followPlaylistBtn">follow</button>  
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        playlistData: {type: Object}, 
    },
    methods: {
        //Gets the dynamic image url for each program
        getImageUrl(name) {
            var images = require.context('../../assets/images/playlistIcons/', false)
            return images('./' + name)
        },
    }
}
</script>

<style scoped>
.playlistComponentContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 500;
    padding: 0 0 80px;
}
.playlistComponentWrapper {
    width: 100%;
    z-index: 20;
    position: relative;
    display: flex;
}

/* Main Content */
.playlistContainer {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
}
.col1 {
    width: 300px;
    height: 100%;
    background-color: #131313;
    padding: 30px;
    position: relative;
}
.col1 h4 {
    font-size: 24px;
    text-transform: capitalize;
    margin-bottom: 10px;
    color: #FFF;
}
.col1 p {
    color: #EBEBEB;
}
.imageContainer {
    width: 300px;
    height: 300px;
    position: relative;
    margin-top: 40px;
}
.playlistImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    border-radius: 20px;
    z-index: 20;
}
.backgrounImageOverlay {
    background-color: rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
}
.backgrounImage {
    filter: blur(10px);
    transform: scale(1.1); 
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 5;
}
.followPlaylistBtn {
    background-color: #3DA389;
    padding: 10px 40px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    color: #FFF;
    margin-top: 40px;
    cursor: pointer;
    transition: 0.3s;
}
.followPlaylistBtn:hover {
    transform: scale(1.1);
}


.col2 {
    width: calc(100% - 300px);
    height: 100%;
    background-color: #1E1E1E;
    padding: 30px 30px 30px 60px;
    position: relative;
}
.col2 iframe {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: 10;
    position: relative;
}
.col2BtnArea {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    padding: 0 20px 20px;
}

@media only screen and (min-width: 1250.1px) {
    .backgrounImage {display: none;}
    .backgrounImageOverlay {display: none;}
}
@media only screen and (max-width: 1250px) {
    .playlistContainer {flex-wrap: wrap;}

    .col1 {width: 100%; height: auto; background-color: #1E1E1E;}
    .imageContainer {width: 100%; height: auto; display: flex; justify-content: center; background-color: #1E1E1E; padding: 40px; border-radius: 20px; overflow: hidden;}
    .playlistImage {width: 100%;max-width:300px;height: auto;position: relative;border-radius: 10px;overflow: hidden;object-fit: cover;position: relative;z-index: 20;background-color: rgba(255, 255, 255, 0.2);}
    .playlistBoxInner::after {content: "";display: block;padding-bottom: 100%;}
    .col1 .followPlaylistBtn {display: none;}
    .col2 {width: 100%;  padding: 0;  height: 500px;}
    .col2 iframe {border-radius: 0;}

    .col2BtnArea {display: flex;}
    .followPlaylistBtn {margin: 0; width: 100%;}
    .followPlaylistBtn:hover {transform: scale(1.05);}
}

@media screen and (max-width: 767px) {
    .playlistComponentWrapper {padding: 0 20px;}
    .col1 {padding: 40px 20px;}
}
</style>