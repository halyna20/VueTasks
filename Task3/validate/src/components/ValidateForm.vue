<template>
    
    <div :style="{ background }">
        <form @submit.prevent="onSubmit">
            <label for="name">First name:</label>
            <input type="text" id="name" name="name" v-model="name">
            <span> {{ nameError }}</span>

            <label for="surname">Last name:</label>
            <input type="text" id="surname" name="surname" v-model="surname"/>
            <span> {{ surnameError }}</span>

            
            <input type="radio" id="woman" value="woman" @change="check" v-model="picked" name="gender">
            <label for="woman">Woman</label>

            <input type="radio" id="man" value="man" @change="check" v-model="picked" name="gender">
            <label for="man">Man</label>
            

            <label for="phone">Phone number: </label>
            <input type="tel" id="phone" name="phone" v-model="phone">
            <span> {{ phoneError }}</span>
            <label for="nickname">Nickname:</label>
            <input type="text" id="nickname" name="nickname" v-model="nickname">
            <span> {{ nicknameError }}</span>

            <button>Ok</button>
        </form>
    </div>
</template>

<script>
    import { useField } from 'vee-validate';

    export default {
        name: 'ValidateForm',
        setup() {
            function onSubmit() {
                alert('submited')
            }
            const name = useField('name', function(value) {
                if(!value) return 'This field is required'

                return true
            })

            const surname = useField('surname', function(value) {
                if(!value) return 'This field is required'

                return true
            })

            const phone = useField('phone', function(value) {
                if(!value) return 'This field is required'

                const regex = /^\+?38\s?(\(|\s)?\d{3}(\)|\s)?\s?\d{3}(\s|-)?\d{2}(\s|-)?\d{2}$/
                if (!regex.test(String(value).toLowerCase())) {
                    return 'Please enter a valid phone number'
                }

                return true;
            })

            const nickname = useField('nickname', function(value) {
                if(!value) return 'This field is required'

                const regex = /(?=.*[A-Z])(?=.*[_]).*\d{3}$/
                if (!regex.test(String(value))) {
                    return 'Please enter a valid nickname'
                }

                return true;
            })

            return {
                onSubmit,
                name: name.value,
                nameError: name.errorMessage,
                surname: surname.value,
                surnameError: surname.errorMessage,
                phone: phone.value,
                phoneError: phone.errorMessage,
                nickname: nickname.value,
                nicknameError: nickname.errorMessage
            }
        },
        data() {
            return {
                picked: '',
                background: ''
            }
        },
        methods: {
            isRequired(value) {
                if (!value) {
                    return 'This field is required';
                }
                
                return true;
            },

            check() {
                if(this.picked === 'woman') {
                    this.background = 'pink'
                } else if (this.picked === 'man') {
                    this.background = 'blue'
                }
            },

        }
    }

    
</script>