const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpeg',
            url: 'https://www.vuemastery.com/',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpeg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg' }
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateImage(varianImage) {
            this.image = varianImage;
        },
    }
})