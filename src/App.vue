<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
    export default {
        name: 'app'
    }
</script>


<style lang="scss">
    html {
        font-size: 10vw;
    }
    #app {
        height: 100vh;
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
            'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;

        color: #333;
        font-size: 14px;
    }
    img {
        object-fit: cover;
    }
    .el-button,
    .el-input__inner::-webkit-input-placeholder {
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
            'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    }
</style>
