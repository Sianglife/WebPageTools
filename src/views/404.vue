<template>
    <body class="text-center">
        <h1 style="margin: 63px;">迷路了嗎?這裡沒有東西喔!</h1>
        <h3>找不到頁面:{{urlPath}}</h3>
    </body>
</template>

<script>
export default {
    name: "404Page",
    data() {
        return {
            urlPath: this.$route.path
        }
    }
}
</script>