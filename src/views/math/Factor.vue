<template>
    <div class="alert alert-warning text-muted" role="alert" v-show="alert[0] != undefined"><span><strong >{{alert[0]}}</strong>{{alert[1]}}</span></div>
    <div class="container">
        <div class="row text-start d-xxl-flex justify-content-xxl-start" style="border-bottom-style: dotted;">
            <div class="col" style="width: 100%;text-align: center;margin: 1em;"><span style="font-size: 2em;width: 25%;">輸入一個數字: </span><input type="number" @change="update" v-model="inputnum" style="font-size: 1.5em;height: 2em;width: 75%;" /></div>
        </div>
    </div>
    <div class="container" v-if="inputnum!=0">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-size: 1.5em;font-weight: bold;width: 10em;">{{inputnum}}的因數</td>
                        <td style="font-size: 2em;">{{output[0]}}</td>
                    </tr>
                    <tr>
                        <td style="font-size: 1.5em;font-weight: bold;width: 10em;">{{inputnum}}的質因數</td>
                        <td style="font-size: 2em;">{{output[1]}}<br /></td>
                    </tr>
                    <tr>
                        <td style="font-size: 1.5em;font-weight: bold;width: 10em;">{{inputnum}}以下的質數</td>
                        <td style="font-size: 2em;">{{output[2]}}<br /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
//判斷是否因數
const ifDivide = (num)=>{
    if(parseInt(num)==num){
        return true
    }else{
        return false
    }
}
//算所有因數
const getAllFactors = (num)=>{
    let result = []
    for(var i=1; i<=num; i++){
        if(ifDivide(num/i)){
            result.push(i)
        }
    }
    return result
}
//判斷是否質數
function ifPrime(num){
    if(getAllFactors(num)[1]==num){
        return true
    }else{
        return false
    } 
}
//算出所有質數
function getAllPrime(num){
    let result = []
    for (let i=1;i<=num;i++){
        if (ifPrime(i)){
            result.push(i)
        }
    }
    return result

}
const arrToString = (arr)=>{
    let str = ''
    for(let item of arr){
        // console.log(item)
        str = `${str}, ` + item
    }
    return str.substring(2,str.length)
}
export default {
    name:'mathFactor',
    data(){
        return{
            alert:[undefined,undefined],
            inputnum:0,
            output:['','','']
        }
    },
    methods:{
        update(){
            let r = []
            let Factors = getAllFactors(this.inputnum)
            let Prime = getAllPrime(this.inputnum)
            this.output=[arrToString(getAllFactors(this.inputnum)),'',arrToString(getAllPrime(this.inputnum))]
            for(let i of Factors){ 
                for(let k of Prime){
                    if(i == k){
                        r.push(k)
                    }
                }
            }
            console.log(r)
            this.output[1] = arrToString(r)
        }
    }
}
</script>