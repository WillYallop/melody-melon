<template>
    <div class="modalContainer">
        <div class="modalWrapper">
            <!-- Form -->
            <div class="modalContent">
                <div class="formHeader">
                    <h4>Submit a song</h4>
                    <p>If you have a song you want to get in one of our playlists, submit your song to us and we will get in touch.</p>
                    <button class="toggleModalBtn" v-on:click="$store.commit('toggleModal')"><fa class="fas" :icon="['fas', 'times']" /></button>
                </div>
                <div class="formContainer">
                    <label for="fullName" class="label">Full Name *</label>
                    <input id="fullName" class="inputStyle" type="text" v-model="formData.name" :class="{ 'inputError' : verifyName == false }">

                    <label for="emailAdd" class="label">Email Address *</label>
                    <input id="emailAdd" class="inputStyle" type="text" v-model="formData.email" :class="{ 'inputError' : verifyEmail == false }">

                    <label for="songUrl" class="label">Spotify Track URL *</label>
                    <input id="songUrl" class="inputStyle" type="text" v-model="formData.url" :class="{ 'inputError' : verifyUrl == false }">

                    <label for="additionalNotes" class="label">Additional Notes</label>
                    <textarea id="additionalNotes" class="textareaStyle" v-model="formData.text"></textarea>
                    
                    <!-- responce -->
                    <div class="responceArea" v-if="messageSent || error"> 
                        <!-- Error -->
                        <p v-if="error">{{error}}</p>
                        <p v-if="messageSent">Your song has been submitted. We'll get in touch with you soon!</p>
                    </div>

                    <!-- submit -->
                    <button class="formBtn" v-on:click="submitTrack"><span v-if="!sending">submit song</span><span v-if="sending">sending</span></button>
                </div>
            </div>
            <!-- overlay -->
            <div class="modalBackground" v-on:click="$store.commit('toggleModal')"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                url: '',
                text: '',
            },
            dataComplete: [false, false, false],

            error: false,
            messageSent: false,
            sending: false,
        }
    },
    mounted() {

    },
    computed: {
        verifyName() {
            if(this.formData.name.length > 0) {
                var regex = /\d/
                if(!regex.test(this.formData.name)) {
                    this.dataComplete[0] = true
                    return true
                } else {
                    this.dataComplete[0] = false
                    return false
                }
            } else {
                this.dataComplete[0] = false
                return false
            }
        },
        verifyEmail() {
            if(this.formData.email.length > 0) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(regex.test(this.formData.email)) {
                    this.dataComplete[1] = true
                    return true
                } else {
                    this.dataComplete[1] = false
                    return false
                }
            } else {
                this.dataComplete[1] = false
                return false
            }
        },
        verifyUrl() {
            if(this.formData.url.length > 0) {
                var regex = /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g
                if(regex.test(this.formData.url)) {
                    this.dataComplete[2] = true
                    return true
                } else {
                    this.dataComplete[2] = false
                    return false
                }
            } else {
                this.dataComplete[2] = false
                return false
            }
        }
    },
    methods: {
        verifyData() {
            let checker = arr => arr.every(Boolean);
            if(checker(this.dataComplete)) {
                return true
            } else {
                return false
            }
        },
        submitTrack() {
            if(this.verifyData()) {
                this.sending = true
                // Api call
                let header = {
                    headers: {
                        Authorization: process.env.authHeader,
                    }
                }
                axios.post(process.env.apiBaseUrl + '/email/submit-track', {
                    name: this.formData.name,
                    email: this.formData.email,
                    url: this.formData.url,
                    text: this.formData.text
                }, header)
                .then((res) => {
                    if(res.data.message == 'Success') {
                        this.messageSent = true
                        this.sending = false
                        //reset
                        this.formData = {
                            name: '',
                            email: '',
                            url: '',
                            text: '',
                        }
                    }
                })
                .catch((err) => {
                    this.error = err
                    this.sending = false
                })

            } else {
                this.error = 'Make sure to complete all text fields.'
            }
        }
    }
}
</script>

<style scoped>
.modalContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: -56px;
    padding-bottom: 56px;
    z-index: 2000;
}
.modalWrapper {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    padding: 40px;
    position: relative;
    z-index: 20;
    scrollbar-width: none;  /* Firefox */
}
.modalWrapper::-webkit-scrollbar {
  display: none;
}
.modalContent {
    margin: auto;
    background-color: #FFF;
    pointer-events: all;
    position: relative;
    z-index: 20;
    max-width: 1200px;
    width: 100%;
    padding: 30px;
    border-radius: 20px;
}
.formHeader {
    padding: 0 0 30px;
}
.formHeader h4 {
    font-size: 24px;
    color: #000;
    margin-bottom: 20px;
}
.formHeader p {
    color: #272727;
}
.toggleModalBtn {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 35px;
    width: 35px;
    border: none;
    border-radius: 50%;
    background-color: #F2F2F2;
    cursor: pointer;
}
.toggleModalBtn .fas {
    color: #898989;
    transition: 0.3s;
}
.toggleModalBtn:hover .fas {
    color: #E32539;
}

/* form */
.label {
    width: 100%;
    padding: 0 5px 0;
    color: #656565;
}
.inputStyle {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px 5px 0 0;
    background-color: #F6F6F6;
    margin: 5px 0 15px;
    padding: 0 10px;
    font-size: 16px;
}
.inputStyle:focus {
    border-bottom: 2px solid #3DA389;
}  
.inputError:focus {
    border-bottom: 2px solid #E32539;
}
.textareaStyle {
    width: 100%;
    resize: none;
    background-color: #F6F6F6;
    height: 150px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 5px 0 0;
    font-size: 16px;
}
.formBtn {
    padding: 10px 40px;
    border-radius: 20px;
    background-color: #E32539;
    border: none;
    color: #FFF;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 20px;
}
.formBtn:hover {
    transform: scale(1.1);
}

.responceArea {
    padding: 20px 0 0;
}

/* overlay */
.modalBackground {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: -56px;
    padding-bottom: 56px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
    cursor: pointer;
}

@media only screen and (max-width: 1070px) {
    .modalWrapper {padding: 20px;}
    .modalContent {padding: 40px 20px;}
}
</style>