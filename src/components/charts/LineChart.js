import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: []
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
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
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            var regions = {}
            response.data.region_metadata.forEach(region => {
                regions[region.name] = []
            })

            var timestamps = []
            response.data.items.forEach(data => { 
                timestamps.push(data.timestamp)
                Object.keys(data.readings.psi_twenty_four_hourly).forEach(key => {
                    regions[key].push(data.readings.psi_twenty_four_hourly[key])
                })
            })
            this.datacollection.labels = timestamps
            Object.keys(regions).forEach(key => {
                var info = {
                    data: regions[key],
                    label: key,
                    borderColor: this.getRandomColor(),
                    fill: false
                }
                this.datacollection.datasets.push(info)
            })
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}