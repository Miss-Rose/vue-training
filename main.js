const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'A warm fuzzy pair of socks.',
            selectedVariant: 0,
            url: 'https://www.vuemastery.com/',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpeg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg', quantity: 0 }
            ],
            cart: 0,
            onSale: true,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        onSaleMsg(){
            if(this.onSale){
                return this.brand + ' ' + this.product + 'is on sale';
            }
            return '';
        }
    }
})