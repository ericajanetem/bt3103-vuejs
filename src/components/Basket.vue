<template>
    <div>
        <h3>Menu:</h3>
        <ul id="shoppingBasket">
            <li v-for= "(item, index) in selection" :key="index">
                <p> {{item[0] + " x " + item[1]}} </p>
            </li>
        </ul>
        <button v-on:click="findTotal();sendOrder();">Calculate Total</button>
        <p v-show="show">Subtotal: ${{subtotal}}</p>
        <p v-show="show">Grand Total: ${{grandtotal}}</p>
    </div>
</template>

<script>
    import database from '../firebase.js'

    export default {
        data() {
            return {
                show: false,
                gst: 1.07,
                subtotal: 0,
                grandtotal: 0,
            }
        },

        props: {
            selection: {
                type: Array
            }
        },

        methods: {
            findTotal() {
                this.subtotal = 0;
                for (var idx = 0; idx < this.selection.length; ++idx) {
                    var price = this.selection[idx][2] * this.selection[idx][1];
                    this.subtotal += price;
                }
                this.grandtotal = (this.subtotal * this.gst).toFixed(2);
                this.show = !this.show;
                return this.subtotal, this.grandtotal;
            },

            sendOrder: function() {
                var orders = [];
                for (var idx = 0; idx < this.selection.length; ++idx) {
                    var item = this.selection[idx];
                    orders.push({
                        name: item[0],
                        quantity: item[1]
                    })
                }
                database.collection("orders").add({
                    items: orders
                }).then(() => location.reload())

                //for (var idx = 0; idx < this.selection.length; ++idx) {
                //    database.collection("orders").add({
                //        name: this.selection[idx][0],
                //        quantity: this.selection[idx][1]
                //    }).then(() => location.reload())
                //}                
            }

        }
    }
</script>

<style scoped>
    button {
        font-family: "Avenir";
        text-align: center;
        font-size: 20px;
        background-color: #d5f4e6;
        padding: 15px 25px;
        border-radius: 14px;
        color: #001a4d;
        font-weight: bolder;
    }

    button:hover {background-color: #d5f4e6}

    button:active {
        background-color: #d5f4e6;
        box-shadow: 2px 3px #666;
        transform: translateY(10px);
    }



</style>