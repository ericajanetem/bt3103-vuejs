<template>
    <div>
        <BarChart></BarChart>
        <br>
        <br>
        <br>
        <br>
        <LineChart></LineChart>
    </div>
</template>

<script>
    //import database from '../firebase.js'
    import BarChart from './charts/BarChart.vue'
    import LineChart from './charts/LineChart.vue'

    export default {
        components: {
            BarChart,
            LineChart
        },
    }
    
</script>

<style scoped>

</style>