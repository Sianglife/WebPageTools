<template>
    <div class="alert alert-warning text-muted" role="alert">
        <span><strong>飛翔化學工具新版介面尚未開發完成，新介面敬請期待</strong></span>
    </div>
    <span>欲求:</span>
    <select v-model="select" class="form" style="height:18px;color: black;font-size: 15px;" :onchange="update">
        <option value=0>密度</option>
        <option value=1>質量</option>
        <option value=2>體積</option>
    </select>
    <br>
    <span>{{ text[a][0] }}:</span>
    <input type="number" v-model="text[a][1]" :onchange="update">
    <br>
    <span>{{ text[b][0] }}:</span>
    <input type="number" v-model="text[b][1]" :onchange="update">
    <br>
    <span>{{ text[select][0] }}:{{ text[select][1] }}</span>
</template>

<style>
iframe {
    min-height: calc(100vh - 12em)
}
</style>

<script>
export default {
    name: 'Density',
    data() {
        return {
            text: [
                ['密度',0],
                ['質量',0],
                ['體積',0],
            ],
            select: 0,
            input: 0,
            a: 1,
            b: 2,
        }
    },
    methods: {
        update() {
            if (this.select == 0) {
                this.a = 1
                this.b = 2
                this.text[this.select][1] = this.text[this.a][1] / this.text[this.b][1]
            } else if (this.select == 1) {
                this.a = 2
                this.b = 0
                this.text[this.select][1] = this.text[this.a][1] * this.text[this.b][1]
            } else if (this.select == 2) {
                this.a = 0
                this.b = 1
                this.text[this.select][1] = this.text[this.a][1] / this.text[this.b][1]
            }
        }
    }
}
</script>