<template>
  <div class="chart">
    <h2 id="text">PSI 24-Hour Hourly (By Region)</h2>
    <LineChart></LineChart>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";
export default {
  components: {
    LineChart
  }
};
</script>

<style>
    #text {
            text-align: center;
            color: #618683;
            text-shadow: 0px 0px 0px #000000;
        }
</style>