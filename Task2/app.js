const App = {
    el: '#list',
    data() {
        return {
            items: [
                {
                    text: 'Learn vue'
                },
                {
                    text: 'add text'
                }
            ]

        }
    },
    methods: {
        addItem() {
            this.items.push({ text: this.item })
        },
        deleteItem(event) {
            this.items.splice(this.items.indexOf(event), 1);
        }
    }
}

Vue.createApp(App).mount('#app')
