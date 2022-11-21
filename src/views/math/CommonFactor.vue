<template>
    <div class="container">
        <div class="row" style="border-right-style: none;border-bottom-style: dotted;line-height: 28px;margin: 1em;">
            <div class="col d-xxl-flex justify-content-xxl-center align-items-xxl-center" style="width: 100%;text-align: center;margin: 1em;"><span style="font-size: 2em;width: 6.5em;">輸入數字  <button class="btn btn-primary" @click="addInput" type="button" style="font-size: 1em;">+</button></span></div>
            <div class="col overflow-auto" style="margin: 1em;">
                <ul class="list-group">
                    <li class="list-group-item d-xxl-flex align-items-xxl-center" v-for="(index,item) in input">
                        <input type="number" style="width: 100%;" :value="item[index]">
                    </li>
                </ul>
            </div>
        </div>
        <div style="text-align: center;"></div>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: bold;width: 10em;">公因數</td>
                        <td style="font-size: 100%;">{{}}</td>
                    </tr>
                    <tr></tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name:'mathCommonFactor',
    data(){
        return{
            input=[]
        }
    }
}
</script>