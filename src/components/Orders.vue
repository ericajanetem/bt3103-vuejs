<template>
    <div>
        <ul id = "orderbox">
            <li v-for= "(item, index) in orders" :key="index" id="listbox">
                <uL>
                    <li v-for = "(id, o) in item[1]" :key="o">
                        <p> {{id.name}}: {{id.quantity}} </p>
                    </li>
                </ul>
                <button v-bind:id="item[0]" v-on:click="deleteItem($event)">Delete</button>
                <div class="divider"/>
                <button v-bind:id="item[0]" v-on:click="route($event)">Modify</button>
            </li>
        </ul>

    </div>
</template>

<script>
    import database from '../firebase.js'

    export default {
        data() {
            return {
                orders: []
            }
        },
        methods: {
            fetchItems: function() {
                database.collection('orders').get().then((querySnapShot) => {
                    let item={}
                    querySnapShot.forEach(doc => {
                        item = doc.data().items
                        this.orders.push([doc.id, item])
                    })
                })
            },

            deleteItem: function(event) {
                let doc_id = event.target.getAttribute("id")
                database.collection('orders').doc(doc_id).delete().then(() => location.reload());
            },

            route: function(event) {
                let doc_id = event.target.getAttribute("id")
                this.$router.push({ name:'modify', params: {docID: doc_id}})

            }
        },

        created() {
            this.fetchItems();
        }
        
    }
</script>

<style scoped>

    .router-link-active{
        background: #eee;
        color: #444;
    }

    #orderbox {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    }
    
    #listbox {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #b3968c;
    margin: 10px;
    }

    button {
        font-family: "Avenir";
        text-align: center;
        font-size: 13px;
        background-color: #d5f4e6;
        padding: 5px 5px;
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
    .divider{
        width:5px;
        height:auto;
        display:inline-block;
    }

</style>