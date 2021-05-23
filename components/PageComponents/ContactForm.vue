<template>
    <div class="contactFormComponentContainer">
        <div class="contactFormWrapper siteWrapper sitePadding">
            
            <!-- form -->
            <div class="contactFormContainer"> 
                <h4>Send us a Message</h4> 
                <!-- Full Name -->
                <div class="inputContainer">
                    <label class="inputLabel">
                        <p>Full Name</p> 
                        <input type="text" class="inputStyle" v-model="formData.name" :class="{ 'inputError' : verifyName == false }">
                    </label>
                </div>
                <!-- Email -->
                <div class="inputContainer">
                    <label class="inputLabel">
                        <p>Email</p> 
                        <input type="text" class="inputStyle" v-model="formData.email" :class="{ 'inputError' : verifyEmail == false }">
                    </label>
                </div>
                <!-- Subject -->
                <div class="inputContainer">
                    <label class="inputLabel">
                        <p>Subject</p> 
                        <select class="inputStyle selectStyle" v-model="formData.subject" :class="{ 'inputError' : verifySubject == false }" >
                            <option>Question</option>
                            <option>Business Inquiry</option>
                            <option>More Information</option>
                            <option>Other</option>
                        </select>
                    </label>
                </div>
                <!-- Message -->
                <div class="inputContainer">
                    <label class="inputLabel">
                        <p>Message</p> 
                        <textarea type="text" class="textAreaInput" v-model="formData.text" :class="{ 'inputError' : verifyText == false }"></textarea>
                    </label>
                </div>
                <!-- Error -->
                <p v-if="error" class="errorMessage">{{error}}</p>
                <p v-if="messageSent" class="messageSentP">Your message has been sent</p>
                <!-- Send Btn -->
                <button v-on:click="sendMessage" class="contactFormBtn"><span v-if="!sending">send</span><span v-if="sending">sending</span></button>
            </div>

            <!-- Next steps -->
            <div class="nextStepsCon">
                <div class="nextStepsRowContainer"> 
                    <div class="nextStepsHeader">
                        <h4>Submitting a song</h4>
                     </div>
                    <div class="nextStepsRow">
                        <div class="rowIcon">

                        </div>
                        <div class="iconLineDown"></div>
                        <div class="rowTextarea">
                            <h4>1. We will review the song.</h4>
                            <p>When we recieve a song submit we will review the song and judge its potential on our playlists.</p>
                        </div>
                    </div>
                    <div class="nextStepsRow">
                        <div class="rowIcon">

                        </div>
                        <div class="iconLineDown"></div>
                        <div class="rowTextarea">
                            <h4>2. Discuss payment.</h4>
                            <p>If we approve your song for our playlists we will return with a list of playlists and their costs.</p>
                        </div>    
                    </div>
                    <div class="nextStepsRow">
                        <div class="rowIcon">

                        </div>
                        <div class="iconLineDown"></div>
                        <div class="rowTextarea">
                            <h4>3. Place it on our playlists.</h4>
                            <p>Your track will get exposure on our playlists and your results will flood in.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="contactFormBtn" style="margin-top: 40px" v-on:click="$store.commit('toggleModal')">submit song</button>
                </div>
            </div>  

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
                subject: 'Question',
                text: '',
            },
            dataComplete: [false, false, false, false],
            error: false,
            messageSent: false,
            sending: false,
        }
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
        verifySubject() {
            if(this.formData.subject.length > 0) {

                if(this.formData.subject == 'Question') {
                    this.dataComplete[2] = true
                    return true
                } else if (this.formData.subject == 'Business Inquiry') {
                    this.dataComplete[2] = true
                    return true
                } else if (this.formData.subject == 'More Information') {
                    this.dataComplete[2] = true
                    return true
                } else if (this.formData.subject == 'Other') {
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
        },
        verifyText() {
            if(this.formData.text.length > 0) {
                this.dataComplete[3] = true
                return true
            } else {
                this.dataComplete[3] = false
                return false
            }
        },
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
        sendMessage() {
            if(this.verifyData()) {
                this.sending = true
                // Api call
                let header = {
                    headers: {
                        Authorization: process.env.authHeader,
                    }
                }
                axios.post(process.env.apiBaseUrl + '/email', {
                    name: this.formData.name,
                    email: this.formData.email,
                    subject: this.formData.subject,
                    text: this.formData.text
                }, header)
                .then((res) => {
                    if(res.data.message == 'Success') {
                        this.messageSent = true
                        this.sending = false
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
.contactFormComponentContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 100;
    padding: 0 0 80px;
}
.contactFormWrapper {
    display: flex;
}
.contactFormContainer {
    width: 100%;
    background-color: #1e1e1e ;
    border-radius: 20px 0 0 20px;
    padding: 30px;
}
.contactFormContainer h4 {
    font-size: 24px;
    margin-bottom: 30px;
    color: #FFF;
}
.inputContainer {
    width: 100%;
    margin-bottom: 20px;
}
.inputLabel p {
    margin-bottom: 5px;
    color: #A5A5A5;
}
.inputStyle {
    width: 100%;
    border: none;
    font-size: 16px;
    padding: 0 10px;
    background-color: #131313;
    border-radius: 5px;
    height: 45px;
    color: #FFF;
    border-bottom: 2px solid #131313;
}
.inputStyle:focus {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #3DA389;
}
.textAreaInput {
    width: 100%;
    min-height: 200px;
    resize: none;
    border-radius: 5px;
    background-color: #131313;
    border: none;
    padding: 10px;
    font-size: 16px;
    color: #FFF;
    border-bottom: 2px solid #131313;
}
.textAreaInput:focus {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #3DA389;
}
.errorMessage {
    padding: 0 0 20px;
    color: #FFF;
}
.contactFormBtn {
    padding: 10px 40px;
    border-radius: 20px;
    background-color: #E32539;
    border: none;
    color: #FFF;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}
.contactFormBtn:hover {
    transform: scale(1.1);
}
.contactFormBtn .fas {
    margin-left: 10px;
    font-size: 10px;
    color: #FFF;
}
.messageSentP {
    padding: 0 0 20px;
    color: #FFF;
}

/* Select Styling */
.selectStyle:focus {
    outline: none;
}
.selectStyle {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}

.inputError:focus {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #E32539;
}


/* next steps */
.nextStepsCon {
    width: 100%;
    max-width: 400px;
    height: 100%;
    background-color: #131313;
    border-radius: 0 20px 20px 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.nextStepsRowContainer {
    width: 100%;
}
.nextStepsHeader {
    margin-bottom: 54px;
}
.nextStepsHeader h4 {
    font-size: 24px;
    color: #FFF;
}

.nextStepsRow {
    width: 100%;
    display: flex;
    padding-bottom: 30px;
    position: relative;
}
.nextStepsRow:last-child {
    padding-bottom: 0;
}
.rowIcon {
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: #3DA389;
}
.iconLineDown {
    position: absolute;
    height: 100%;
    top: 20px;
    left: 10px;
    width: 1px;
    background-color: #292929;
}
.nextStepsRow:last-child .iconLineDown {
    display: none;
}
.rowTextarea {
    padding-left: 10px;
}
.rowTextarea h4 {
    margin-bottom: 5px;
    color: #FFF;
    font-size: 16px;
}
.rowTextarea p {
    color: #E1E1E1;
}




@media only screen and (max-width: 1350px) {
    .contactFormWrapper {flex-wrap: wrap;}
    .nextStepsCon {max-width: 100%; width: 100%; height: auto; margin-top: 20px; border-radius: 20px;}
    .contactFormContainer {border-radius: 20px;}
    .nextStepsHeader {margin-bottom: 30px;}
}

@media only screen and (max-width: 1070px) {
    .contactFormWrapper {flex-wrap: nowrap;}
    .nextStepsCon {max-width: 400px; width: 100%; height: auto; margin-top: 0; border-radius: 0 20px 20px 0;  padding: 30px 20px;}
    .contactFormContainer {border-radius: 20px 0 0 20px; padding: 30px 20px;}
    .nextStepsHeader {margin-bottom: 54px;}
}
@media only screen and (max-width: 868px) {
    .contactFormWrapper {flex-wrap: wrap;}
    .nextStepsCon {max-width: 100%; width: 100%; height: auto; margin-top: 20px; border-radius: 20px;}
    .contactFormContainer {border-radius: 20px;}
    .nextStepsHeader {margin-bottom: 30px;}
}
</style>