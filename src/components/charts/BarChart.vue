<template>
  <div class="chart">
      <h2 id="bar">Analytics: Total Quantity by Item</h2>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>
    #bar {
        text-align: center;
        color: #618683;
        text-shadow: 0px 0px 0px #000000;
    }
</style>