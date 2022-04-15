const App = {
    el: '#list',
    data() {
        return {
            newItem: '',
            items: [
                { text: 'Learn vue' },
                { text: 'add text' }
            ]

        }
    },
    methods: {
        addItem() {
            this.items.push({ text: this.newItem })
            this.newItem = ''
        },
        deleteItem(item) {
            this.items = this.items.filter((list) => list !== item)
        }
    }
}

Vue.createApp(App).mount('#app')
