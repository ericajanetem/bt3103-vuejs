
<template>
    <div>
        <h3> Modify Order </h3>
        <form>
            <div v-for= "(item, index) in datapacket" :key="index">
                <label for=index> 
                    {{item.name}}: {{item.quantity}} 
                    <br>
                </label>
                <input v-model.number="updatedOrder[item.name]" type="number" id = index min="0" max="10" placeholder="0"/>
                <br>
            </div>
        </form>
        <br>
        <button v-on:click="updateOrder()">Update Order</button>
    </div>
</template>

<script>
    import database from "../firebase.js"

    export default {
        data() {
            return {
                datapacket:[],
                updatedOrder: {},
            }
        },

        methods: {
            fetchItems: function() {
                let selected = [];
                database.collection('orders').doc(this.docID).get().then((querySnapShot) => {
                    let data = querySnapShot.data().items;
                    data.forEach(doc => {
                        this.datapacket.push(doc);
                    })
                    for (const n of this.datapacket) {
                        selected.push(n.name)
                    }
                })
                
                database.collection('menu').get().then((querySnapShot) => {
                    let item={};
                    querySnapShot.forEach(doc => {
                        item = doc.data().name
                        if (!selected.includes(item)) {
                            this.datapacket.push({
                                name: item,
                                quantity: 0
                            });
                        }
                    })
                })
                
            },

            updateOrder: function() {
                for (var i of this.datapacket) {
                    if (i.name in this.updatedOrder) {
                        i.quantity = this.updatedOrder[i.name]
                    }
                }
                
                database.collection("orders")
                    .doc(this.docID)
                    .update({items:this.datapacket})
                    .then(() => this.$router.push({path: "/orders"}));
            }
        },

        props: {
            docID: String
        },

        created() {
            this.fetchItems();
        }
        
    }
</script>

<style scoped>
    button {
        flex: 0 0 200px;
        margin-left: 10px;
        width: 100px;
        height: 30px;
        background-color: #f7cac9;
        border-radius: 10px;
        border-width: 1px;
    }
    label {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  width: 400px;
  line-height: 26px;
  margin-bottom: 10px;
}

input {
display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  width: 400px;
  line-height: 26px;
  margin-bottom: 10px;
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

</style>