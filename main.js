const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpeg',
            url: 'https://www.vuemastery.com/',
            // inStock: true,
            inventory: 8,
            onSale: true,
        }
    }
})