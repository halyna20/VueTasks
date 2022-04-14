const App = {
    data() {
        return {
            color: 'blue',
            background: 'yellow',
            count: 0
        }
    },
    methods: {
        toggleColor() {
            this.color = this.color === 'blue' ? 'yellow' : 'blue'
            this.background = this.background === 'yellow' ? 'blue' : 'yellow'

            this.count++;

            if (this.count === 5) {
                document.getElementById('msg').innerHTML = "Досить бавитись!"
                document.querySelector('p').style.display = 'none'
            }
        }
    }
}

Vue.createApp(App).mount('#app')