<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import '@/assets/css/common/common.css'
export default {
    name: 'App',
}
</script>

<style>
#app {
    font-size: 16px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    background: #fff;
}
</style>
