<template>
    <div class="playlistCardComponent siteWrapper">

        <div v-if="showSlider" class="playlistCardContainer" v-swiper:mySwiper="swiperOptions">
            <div class="swiper-wrapper">
                <!-- Slide V-For -->
                <div class="playlistPreviewCol swiper-slide" :key="playlist.playlistName" v-for="playlist in playlists">
                    <div class="playlistPreviewColInner" v-on:click="navigateToPlaylist(playlist.playlistUrl)">
                        <div class="colHeader"> 
                            <img class="playlistIcon" :src="getImageUrl(playlist.icon)" alt="" data-not-lazy>
                            <div class="colHeaderBackgroundImageOverlay"></div>
                            <div class="colHeaderBackgroundImage" :style="{ backgroundImage: `url(${getImageUrl(playlist.icon)})` }"></div>
                        </div>
                        <div class="playlistIframeContainer">
                            <!-- Song 1 -->
                            <div class="songRow" :key="song.number" v-for="song in playlist.songs">
                                <div class="rowTextareHeader">
                                    <p class="songNumberP">{{song.number}}</p>
                                    <p class="songTimeP">{{song.songDuration}}</p>
                                </div>
                                <div class="rowTextArea">
                                    <p class="songTitleP">{{song.songName}}</p>
                                    <p class="songArtistP">{{song.songArtist}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div v-if="!showSlider" class="slideLoading">

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            showSlider: true,
            //For mobile
            swiperOptions: {
                slidesPerView: 'auto',
                loop: true,
                autoplay: {
                    delay: 2500,
                },
            },
            //PLaylist Array
            playlists: [
                {
                    playlistName: "Summer Chillouts", 
                    icon: "summerchillouts.jpg", 
                    playlistId: 1,
                    playlistUrl: "summer-chillouts",
                    songs: [
                        {number: 1, songName: "Are You With Me - Radio Edit", songArtist: "Lost Frequencies", songDuration: "2:18"},
                        {number: 2, songName: "Prayer in C - Robin Schulz Radio Edit", songArtist: "Lily Wood and The Prick, Robin Schulz", songDuration: "3:09"},
                        {number: 3, songName: "Stay High - Habits Remix", songArtist: "Tove Lo, Hippie Sabotage", songDuration: "4:18"},
                        {number: 4, songName: "High For This", songArtist: "Ellie Goulding", songDuration: "4:19"},
                        {number: 5, songName: "Memo", songArtist: "Years & Years", songDuration: "3:24"}
                    ]
                },
                {
                    playlistName: "Summer Road Trip", 
                    icon: "summerroadtrip.jpg", 
                    playlistId: 2,
                    playlistUrl: "summer-road-trip",
                    songs: [
                        {number: 1, songName: "Odessa", songArtist: "Caribou", songDuration: "5:15"},
                        {number: 2, songName: "The Look", songArtist: "Metronomy", songDuration: "4:38"},
                        {number: 3, songName: "Low Rider", songArtist: "War", songDuration: "3:11"},
                        {number: 4, songName: "Need You Tonight", songArtist: "INXS", songDuration: "3:01"},
                        {number: 5, songName: "Brandy (You're a Fine Girl)", songArtist: "Looking Glass", songDuration: "3:07"}
                    ]
                },
                {
                    playlistName: "Summer 2020", 
                    icon: "summer2020.jpg", 
                    playlistId: 3,
                    playlistUrl: "summer-2020",
                    songs: [
                        {number: 1, songName: "Blinding Lights", songArtist: "The Weeknd", songDuration: "3:22"},
                        {number: 2, songName: "ily (i love you baby)(feat.Emilee)", songArtist: "Surf Mesa, Emilee", songDuration: "2:57"},
                        {number: 3, songName: "This Girl", songArtist: "Yann Muller, Benjamin Bocconi", songDuration: "3:16"},
                        {number: 4, songName: "Superlonely", songArtist: "BENEE, Gus Dapperton", songDuration: "3:43"},
                        {number: 5, songName: "Blueberry Faygo", songArtist: "Lil Mosey", songDuration: "2:43"}
                    ]
                },
                {
                    playlistName: "The BIG Pre's Playlist", 
                    icon: "preplaylist.jpg", 
                    playlistId: 4,
                    playlistUrl: "the-big-pre-playlist",
                    songs: [
                        {number: 1, songName: "Get on Your Knees", songArtist: "MC Pat Flynn", songDuration: "4:47"},
                        {number: 2, songName: "Who's That What's That", songArtist: "Niko B", songDuration: "4:00"},
                        {number: 3, songName: "Me & U", songArtist: "Marty Guilfoyle, John Gibbons", songDuration: "2:39"},
                        {number: 4, songName: "Flowers (feat. Jaykae)", songArtist: "Nathan Dawe, Jaykae", songDuration: "3:17"},
                        {number: 5, songName: "Pursuit Of Happiness (Nightmare)", songArtist: "Kid Cudi, MGMT, Ratatat", songDuration: "4:55"}
                    ]
                },
                {
                    playlistName: "In my feels", 
                    icon: "inmyfeels.jpg", 
                    playlistId: 5,
                    playlistUrl: "in-my-feels",
                    songs: [
                        {number: 1, songName: "I Fall Apart", songArtist: "Post Malone", songDuration: "3:43"},
                        {number: 2, songName: "changes", songArtist: "XXXTENTACION", songDuration: "2:02"},
                        {number: 3, songName: "Falling", songArtist: "Trevor Daniel", songDuration: "2:39"},
                        {number: 4, songName: "Robbery", songArtist: "Juice WRLD", songDuration: "4:00"},
                        {number: 5, songName: "Ivy", songArtist: "Frank Ocean", songDuration: "4:09"}
                    ]
                },
                {
                    playlistName: "House Party Hits", 
                    icon: "houseparty.jpg", 
                    playlistId: 6,
                    playlistUrl: "house-party-hits",
                    songs: [
                        {number: 1, songName: "Pursuit Of Happiness (Nightmare)", songArtist: "Kid Cudi, MGMT, Ratatat", songDuration: "4:55"},
                        {number: 2, songName: "In My Mind", songArtist: "Dynoro, Gigi D'Agostino", songDuration: "3:05"},
                        {number: 3, songName: "Lady (Hear Me Tonight)", songArtist: "Modjo", songDuration: "4:34"},
                        {number: 4, songName: "Groovejet", songArtist: "Spiller", songDuration: "7:30"},
                        {number: 5, songName: "Deep Inside", songArtist: "Hardrive", songDuration: "6:31"}
                    ]
                },

            ],
        }
    },
    computed: {
        sliderOpen() {
            return this.$store.state.playlistSlider.status
        },
        show() {
            
        }
    },
    methods: {
        getImageUrl(name) {
            var images = require.context('../../assets/images/playlistIcons/', false)
            return images('./' + name)
        },
        navigateToPlaylist(id) {
            this.$router.push('/playlist/' + id)
        }
    },
    watch: {
        sliderOpen: function (val) {
            this.showSlider = false
            setTimeout(() => {
                this.showSlider = true
            }, 300)
        }
    }
}
</script>

<style scoped>
.playlistCardComponent {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 600;
  padding: 0 30px;
}
.playlistCardContainer {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
}
.playlistPreviewCol {
    padding: 0 10px;
    border-radius: 20px;
    width: 33.33%;
}
.playlistPreviewColInner {
    overflow: hidden;
    border-radius: 20px;
    background-color: #4A4A4A;  
    position: relative;  
}

/* Playlist Slide design */
.colHeader {
    width: 100%;
    position: relative;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.playlistIcon {
    width: 50%;
    z-index: 20;
    position: relative;
    border-radius: 10px;
}
.colHeaderBackgroundImageOverlay {
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
}
.colHeaderBackgroundImage {
    background-size: cover;
    background-position: center;
    filter: blur(6px);
    transform: scale(1.1); 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
}

.playlistIframeContainer {
    background-color: #181818;
}
.spotifyPlaylistIframe {
    height: 100%;
    width: 100%;
}

/* Song Row */
.songRow {
    display: flex;
    width: 100%;
    position: relative;
    padding: 8px 0;
    transition: background 0.1s;
    cursor: pointer;
}
.songRow:hover{
    background-color: #242424;
}
.rowTextareHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    padding: 0 20px;
    
} 
.songNumberP {
    color: #A5A5A5;
    font-size: 14px;
    margin: 0;
    padding: 0;
}
.songTimeP {
    color: #A5A5A5;
    margin: 0;
    padding: 0;
    font-size: 14px;
}
.rowTextArea {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 60px 0 40px;
    
} 
.songTitleP {
    color: #FFF;
    margin: 0;
    padding: 0;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    overflow: hidden
}
.songArtistP {
    color: #A5A5A5;
    margin: 0;
    padding: 0;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    overflow: hidden
}

.slideLoading {
    height: 492px;
    width: 100%;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.15);
}


@media screen and (max-width: 1250px) {
.playlistPreviewCol {width: 50%;}
}
@media screen and (max-width: 1024px) {
    .playlistPreviewCol {width: 33.33%;}
    .playlistCardComponent {padding: 10px;}
}
@media screen and (max-width: 767px) {
    .playlistPreviewCol {width: 50%;}
}
@media screen and (max-width: 590px) {
    .playlistPreviewCol {width: 100%;}
}
</style>