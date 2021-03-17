<template>
    <div>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        </head>
        <div class = "links-flex-container">
            <div class="links-child">
                <span><i class="material-icons">home</i></span><br>
                <router-link to="/" exact>Home</router-link>
            </div>
            <div class="links-child">
                <span><i class="material-icons">loyalty</i></span><br>
                <router-link to="/orders" exact>Orders</router-link>
            </div>
            <div class="links-child">
                <span><i class="material-icons">bar_chart</i></span><br>
                <router-link to="/dashboard" exact>Dashboard</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .links-flex-container {
            display: flex;
        }

    .links-child {
        flex: 1;
        text-align: center;
        padding: 10px;
        margin: 10px;
        font-size: 20px;
        border: 1px solid #b3968c;

    }

</style>