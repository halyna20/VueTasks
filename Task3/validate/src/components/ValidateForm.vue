<template>
    <div :style="{ background }" class="container">
        <Form @submit="onSubmit"   :validation-schema="schema" v-slot= "{ meta }">
            <label for="name">First name:</label>
            <Field type="text" id="name" name="name"  />
            <ErrorMessage name="name" class="error" />
            <br/>
            
            <label for="surname">Last name:</label>
            <Field type="text" id="surname" name="surname" />
            <ErrorMessage name="surname" class="error" />
            <br/>

            <Field name="gender" type="radio" value="woman" v-slot= "{ field }"> 
                <input type="radio" id="woman" value="woman" @change="check" v-bind="field" v-model="gender" name="gender" >
                <label for="woman">Woman</label> 
            </Field>
            <Field name="gender" type="radio" value="man" v-slot= "{ field }">
                <input type="radio" id="man" value="man" @change="check" v-bind="field" v-model="gender" name="gender" >
                <label for="man">Man</label> 
            </Field>
            <ErrorMessage name="gender" class="error"/>
            <br/>

            <label for="phone">Phone number: </label>
            <Field type="tel" id="phone" name="phone" />
            <ErrorMessage name="phone" class="error" /> 
            <br/>

            <label for="nickname">Nickname:</label>
            <Field type="text" id="nickname" name="nickname" />
            <ErrorMessage name="nickname" class="error" />
            <br/>

            <button type="submit" :disabled=!meta.valid>Ok</button>
        </Form>
    </div>
</template>

<script>
    import { Form, Field, ErrorMessage } from 'vee-validate';

    export default {
        name: 'ValidateForm',
        components: { Form, Field, ErrorMessage },
        data() {
            return {
                gender: '',
                background: '',
                initialValues: {} ,
                schema: {
                    gender: (value) => {
                        if (value) {
                            return true;
                        }
                        return 'You must choose a gender';
                    },
                    name: (value) => {
                        if (value) {
                            return true;
                        }
                        
                        return 'This field is required';
                    },
                    surname: (value) => {
                        if (value) {
                            return true;
                        }
                        
                        return 'This field is required';
                    },
                    phone: (value) => {
                        if(!value) return 'This field is required'

                        const regex = /^\+?38\s?(\(|\s)?\d{3}(\)|\s)?\s?\d{3}(\s|-)?\d{2}(\s|-)?\d{2}$/
                        if (!regex.test(String(value).toLowerCase())) {
                            return 'Please enter a valid phone number'
                        }

                        return true;
                    },
                    nickname: (value) => {
                        if(!value) return 'This field is required'

                        const regex = /(?=.*[A-Z])(?=.*[_]).*\d{3}$/
                        if (!regex.test(String(value))) {
                            return 'Please enter a valid nickname'
                        }

                        return true;
                    }
                }
            }
        },
        methods: {
            check() {
                if(this.gender === 'woman') {
                    this.background = 'pink'
                } else if (this.gender === 'man') {
                    this.background = 'blue'
                }
            },
            onSubmit() {
                alert('submited')
            }
        }
    }

</script>