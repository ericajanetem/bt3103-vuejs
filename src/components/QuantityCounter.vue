<template>
    <div id="app">
        <button v-on:click="decrement">-</button>
        <a id="count"> {{ validCount }} </a>
        <button v-on:click="increment">+</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0,
            }
        },

        methods: {
            increment() {
                if (this.count >=10) {
                    return alert("You cannot buy more than 10 items.");
                }
                this.count++;
                this.$emit('counter', this.item, this.count)
            },
            decrement() {
                if (this.count === 0) return
                this.count--;
                this.$emit('counter', this.item, this.count)
            }
        },
        props: {
            item: {
            }
        },

        computed: {
            validCount: function() {
                if (this.count > 10) {
                    alert("You cannot buy more than 10 items");
                }
                return this.count;
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
        padding: 15px 32px;
        border-radius: 14px;
        color: #001a4d;
    }

    button:hover {background-color: #d5f4e6}

    button:active {
        background-color: #d5f4e6;
        box-shadow: 2px 3px #666;
        transform: translateY(10px);
    }

    #count {
        font-size: 30px;
        padding: 20px 32px;        
    }

</style>