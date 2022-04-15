
const { defineRule, Form, Field, ErrorMessage, configure } = VeeValidate
const { setLocale, loadLocaleFromURL, localize } = VeeValidateI18n

Object.keys(VeeValidateRules.default).forEach(rule => {
    defineRule(rule, VeeValidateRules[rule])
})

loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.5.7/dist/locale/hr.json')

configure({
    generateMessage: localize('hr', {
        names: {
            name: 'Ime',
            email: 'Email',
            password: 'Lozinka'
        }
    })
})

defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
});

const app = Vue.createApp({
    components: {
        VForm: Form,
        VField: Field,
        ErrorMessage,
    },
    data() {
        return {}
    },
    methods: {
        onSubmit(values) {
            console.log('error')
        }
    }
}).mount('#app')
