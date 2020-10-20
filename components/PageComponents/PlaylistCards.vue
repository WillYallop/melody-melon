<template>
    <div class="playlistCardComponent siteWrapper">
        
        <!-- Slider -->
        <div v-if="showSlider" class="cardContainer">
            <div class="playlistCardContainer" v-swiper:mySwiper="swiperOptions">
                <div class="swiper-wrapper">
                    <!-- Slide V-For -->
                    <div class="playlistPreviewCol swiper-slide" :key="playlist.playlistName" v-for="playlist in playlists">
                        <nuxt-link :to="'/playlist/' + playlist.playlistUrl" class="playlistPreviewColInner">
                            <div class="colHeader"> 
                                <picture class="playlistIconCon">
                                    <source :srcSet="require('~/assets/images/playlistIcons/'+playlist.icon+'?webp')" type="image/webp" />
                                    <source :srcSet="require('~/assets/images/playlistIcons/'+playlist.icon)" type="image/jpg" />
                                    <img class="playlistIcon" loading="lazy" :src="require('~/assets/images/playlistIcons/'+playlist.icon)" alt="Playlist Artwork"/>
                                </picture>
                               
                                <div class="colHeaderBackgroundImageOverlay"></div>

                                <picture>
                                    <source :srcSet="require('~/assets/images/playlistIcons/'+playlist.icon+'?webp')" type="image/webp" />
                                    <source :srcSet="require('~/assets/images/playlistIcons/'+playlist.icon)" type="image/jpg" />
                                    <img class="colHeaderBackgroundImage" loading="lazy" :src="require('~/assets/images/playlistIcons/'+playlist.icon)" alt="Playlist Artwork Background"/>
                                </picture>
                                <!--<div class="colHeaderBackgroundImage" :style="{ backgroundImage: `url(${getImageUrl(playlist.icon)})` }"></div>-->
                            </div>
                            <div class="playlistIframeContainer">
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
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- Slider Loading -->
        <div v-if="!showSlider" class="slideLoading"></div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            siteHeight: 0,
            showSlider: true,
            //Swiper options
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
                    playlistName: "House Party Hits", 
                    icon: "houseparty.jpg", 
                    playlistId: 1,
                    playlistUrl: "house-party-hits",
                    songs: [
                        {number: 1, songName: "Pursuit Of Happiness (Nightmare)", songArtist: "Kid Cudi, MGMT, Ratatat", songDuration: "4:55"},
                        {number: 2, songName: "In My Mind", songArtist: "Dynoro, Gigi D'Agostino", songDuration: "3:05"},
                        {number: 3, songName: "Lady (Hear Me Tonight)", songArtist: "Modjo", songDuration: "4:34"},
                        {number: 4, songName: "Groovejet", songArtist: "Spiller", songDuration: "7:30"},
                        {number: 5, songName: "Deep Inside", songArtist: "Hardrive", songDuration: "6:31"}
                    ]
                },
                {
                    playlistName: "In my feels", 
                    icon: "inmyfeels.jpg", 
                    playlistId: 2,
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
                    playlistName: "Chill Rap", 
                    icon: "chillrap.jpg", 
                    playlistId: 3,
                    playlistUrl: "chill-rap",
                    songs: [
                        {number: 1, songName: "Laugh Now Cry Later (feat. Lil Durk)", songArtist: "Drake, Lil Durk", songDuration: "4:21"},
                        {number: 2, songName: "Love is Only a Feeling", songArtist: "Joey Bada$$", songDuration: "2:32"},
                        {number: 3, songName: "Dapper (feat. Anderson .Paak)", songArtist: "Domo Genesis, Anderson .Paak", songDuration: "3:13"},
                        {number: 4, songName: "After Hours", songArtist: "The Weeknd", songDuration: "6:01"},
                        {number: 5, songName: "SKELETONS", songArtist: "Travis Scott", songDuration: "2:56"}
                    ]
                },
                {
                    playlistName: "Summer Chillouts", 
                    icon: "summerchillouts.jpg", 
                    playlistId: 4,
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
                    playlistName: "Summer 2020", 
                    icon: "summer2020.jpg", 
                    playlistId: 5,
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
                    playlistId: 6,
                    playlistUrl: "the-big-pre-playlist",
                    songs: [
                        {number: 1, songName: "Get on Your Knees", songArtist: "MC Pat Flynn", songDuration: "4:47"},
                        {number: 2, songName: "Who's That What's That", songArtist: "Niko B", songDuration: "4:00"},
                        {number: 3, songName: "Me & U", songArtist: "Marty Guilfoyle, John Gibbons", songDuration: "2:39"},
                        {number: 4, songName: "Flowers (feat. Jaykae)", songArtist: "Nathan Dawe, Jaykae", songDuration: "3:17"},
                        {number: 5, songName: "Pursuit Of Happiness (Nightmare)", songArtist: "Kid Cudi, MGMT, Ratatat", songDuration: "4:55"}
                    ]
                },

            ],
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.checkAndSetOptions);
        })
        this.setSwiperOptions()
    },
    computed: {
        sliderOpen() {
            return this.$store.state.playlistSlider.status
        },
    },
    methods: {
        getImageUrl(name) {
            var images = require.context('../../assets/images/playlistIcons/', false)
            return images('./' + name)
        },
        navigateToPlaylist(id) {
            this.$router.push('/playlist/' + id)
        },
        checkAndSetOptions() {
            if (process.client) {
                // if new height matches old check width
                if(this.siteHeight == window.innerHeight) {
                    if(window.innerWidth >= 590) {
                        this.swiperOptions = {
                            slidesPerView: 'auto',
                            loop: true,
                            autoplay: {
                                delay: 2500,
                            },
                        }
                        this.reloadSlider()
                    }
                }
                // set new height
                this.siteHeight = window.innerHeight
            }
        },
        reloadSlider() {
            this.showSlider = false
            setTimeout(() => {
                this.showSlider = true
            }, 300)
        },
        setSwiperOptions() {
            if (process.client) {
                if(window.innerWidth <= 580) {
                    this.swiperOptions = {
                        effect: 'coverflow',
                        slidesPerView: 'auto',
                        centeredSlides: true,

                        loop: true,
                        autoplay: {
                            delay: 2500,
                        },
                        coverflowEffect: { 
                            rotate: 45,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows : false
                        }
                    }
                    this.reloadSlider()
                } else {
                    this.swiperOptions = {
                        slidesPerView: 'auto',
                        loop: true,
                        autoplay: {
                            delay: 2500,
                        },
                    }
                    this.reloadSlider()
                }
            }
        }
    },
    watch: {
        sliderOpen: function (val) {
            this.checkAndSetOptions()
        }
    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.checkAndSetOptions); 
    },
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
.cardContainer {
    width: 100%;
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
    background-color: #4A4A4A;  
    position: relative;  
    text-decoration: none;
    transition: 0.3s;
}
/* Playlist Slide design */
.colHeader {
    width: 100%;
    position: relative;
    padding: 30px 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
}
.playlistIconCon {
    width: 100%;
    text-align: center;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    border-radius: 0 0 20px 20px;
    overflow: hidden;
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
    .pageSliderOpen .playlistPreviewCol {width: 50%;}
}
@media screen and (max-width: 1070px) {
    .playlistPreviewCol {width: 33.33% !important;}
    .playlistCardComponent {padding: 10px;}
}
@media screen and (max-width: 767px) {
    .playlistPreviewCol {width: 50% !important;}
}
@media screen and (max-width: 590px) {
    .playlistCardComponent {padding: 0;}
    .playlistPreviewCol {width: 80% !important;}
    .playlistCardContainer {border-radius: none; overflow: visible;}
}
</style>