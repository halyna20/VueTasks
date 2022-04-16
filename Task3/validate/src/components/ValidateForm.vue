<template>
    
    <div :style="{ background }" class="container">
        <form @submit.prevent="onSubmit">
                <label for="name">First name:</label>
                <input type="text" id="name" name="name" v-model="name">
                <span class="error"> {{ nameError }}</span>
                <br/>
                <label for="surname">Last name:</label>
                <input type="text" id="surname" name="surname" v-model="surname"/>
                <span class="error"> {{ surnameError }}</span>
                <br/>
                
                <input type="radio" id="woman" value="woman" @change="check" v-model="picked" name="picked" >
                <label for="woman">Woman</label>

                <input type="radio" id="man" value="man" @change="check" v-model="picked" name="picked" >
                <label for="man">Man</label>
                <br/>

                <label for="phone">Phone number: </label>
                <input type="tel" id="phone" name="phone" v-model="phone">
                <span class="error"> {{ phoneError }}</span>
                <br/>

                <label for="nickname">Nickname:</label>
                <input type="text" id="nickname" name="nickname" v-model="nickname">
                <span class="error"> {{ nicknameError }}</span>
                <br/>
                <button type="submit" :disabled="!meta.valid">Ok</button>
        </form>
    </div>
</template>

<script>
    import { useField, useForm, useFieldValue } from 'vee-validate';
    

    export default {
        name: 'ValidateForm',
        setup() {
            const { meta } = useForm({
                initialValues: {
                    name: '',
                    surname: '',
                    phone: '',
                    picked: '',
                    nickname: ''
                }
            });

            function onSubmit() {
                alert('submited')
            }

            const isRequired = value => (value ? true : 'This field is required');

            const name = useField('name', isRequired)

            const surname = useField('surname', isRequired)
            
            const currentValue = useFieldValue('picked');
            console.log(currentValue.value);

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
                meta,
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