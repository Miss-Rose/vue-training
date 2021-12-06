app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <div v-if="onSale">{{onSaleMsg}}</div>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping {{shipping}}</p>
                <product-details :details="details"></product-details>
                <div
                        v-for="(variant, index) in variants"
                        :key="variant.id"
                        @mouseover="updateVariant(index)"
                        class="color-circle"
                        :style="{backgroundColor: variant.color}"
                ></div>
                <button
                        class="button"
                        v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{disabledButton : !inStock}"
                >
                    Add to Cart
                </button>
              <button
                  class="button"
                  v-on:click="removeFromCart">
                Remove from Cart
              </button>
            </div>
        </div>
    </div>`,
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
            onSale: true,
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart');
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
        },
        shipping() {
            if(this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})