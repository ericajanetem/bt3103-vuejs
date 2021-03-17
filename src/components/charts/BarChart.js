import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Quantity Ordered",
                backgroundColor: [],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of Each Dish'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    getRandomColor: function() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },

    fetchItems: function () {
        var orders_info = {}
        database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            doc.data().items.forEach(order => {
                if (order.name in orders_info) {
                    orders_info[order.name] += order.quantity
                } else {
                    orders_info[order.name] = order.quantity
                }
            })
        })
        Object.keys(orders_info).forEach(key => {
            this.datacollection.labels.push(key)
            this.datacollection.datasets[0].backgroundColor.push(this.getRandomColor())
            this.datacollection.datasets[0].data.push(orders_info[key])
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  },
  mounted(){
    this.renderChart(this.datacollection,this.options)
}
}