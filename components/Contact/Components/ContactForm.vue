<template>
    <div class="contactFormComponentContainer">
        <div class="contactFormComponentWrapper">

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
                            <option>Song Request</option>
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
                <!-- Send Btn -->
                <button v-on:click="sendMessage" class="contactFormBtn">Send</button>
                <p v-if="messageSent">{{messageSent}}</p>
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
            messageSent: false
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
                } else if (this.formData.subject == 'Song Request') {
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
                    }
                })
                .catch((err) => {
                    this.error = err
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
    margin: 40px 0 0;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 500;
}
.contactFormComponentWrapper {
    width: 100%;
    max-width: 1400px;
    padding: 0 40px;
    box-sizing: border-box;
    z-index: 20;
    position: relative;
    display: flex;
}

.contactFormContainer {
    width: 100%;
    background-color: #FFF;
    border-radius: 20px;
    padding: 40px;
}
.contactFormContainer h4 {
    font-size: 24px;
    margin-bottom: 40px;
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
    background-color: #F7F7F7;
    border-radius: 5px;
    height: 40px;
    border-right: 5px solid green;
}
.textAreaInput {
    width: 100%;
    min-height: 200px;
    resize: none;
    border-radius: 5px;
    background-color: #F7F7F7;
    border: none;
    padding: 10px;
    font-size: 16px;
    border-right: 5px solid green;
}
.errorMessage {
    padding: 0 0 20px;
}
.contactFormBtn {
    padding: 10px 40px;
    border-radius: 10px;
    background-color: #1E1E1E;
    border: none;
    color: #FFF;
    font-size: 16px;
    cursor: pointer;
}

/* Select Styling */
.selectStyle:focus {
    outline: none;

}

.inputError {
    border-right: 5px solid red;
}


@media screen and (max-width: 767px) {
    .contactFormComponentWrapper {padding: 0 20px;}
    .contactFormContainer {padding: 40px 20px;}
}
</style>