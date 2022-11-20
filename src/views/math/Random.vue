<template>
    <div class="alert alert-warning text-muted" role="alert" v-show="alert[0] != undefined"><span><strong >{{alert[0]}}</strong>{{alert[1]}}</span></div>
    <div class="container">
        <div class="row" style="height: 16em;border-right-style: none;border-bottom-style: dotted;line-height: 28px;margin: 1em;">
            <div class="col" style="height: 16em;border-color: var(--bs-gray-500);border-right-style: dotted;">
                <div class="row" style="margin: 0.5em;height: 3em;">
                    <div class="col" style="width: 100%;text-align: center;"><span style="font-size: 1.5em;width: 25%;">最小: </span><input v-on:change="listUpdate" v-model="min" type="number" style="font-size: 1.5em;height: 2em;width: 75%;" :max="max" /></div>
                </div>
                <div class="row" style="margin: 0.5em;height: 3em;">
                    <div class="col" style="width: 100%;text-align: center;"><span style="font-size: 1.5em;width: 25%;">最大: </span><input @change="listUpdate" v-model="max" type="number" style="font-size: 1.5em;height: 2em;width: 75%;" :min="min" /></div>
                </div>
                <div class="row" style="margin: 0.5em;height: 3em;">
                    <div class="col" style="width: 100%;text-align: center;"><span style="font-size: 1.5em;width: 25%;">數量: </span><input @change="checkCount" v-model="count" type="number" style="font-size: 1.5em;height: 2em;width: 75%;" min="1" :max="max" /></div>
                </div>
                <div class="row" style="margin: 0.5em;height: 1.5em;">
                    <div class="col text-center d-xxl-flex align-items-xxl-center" style="width: 100%;text-align: center;"><label class="col-form-label" style="height: 1.5em;font-size: 1em;"><input class="form-check-input" v-model="allowRepeat" type="checkbox">允許重複</label></div>
                </div>
                <div class="row">
                    <div class="col" style="width: 100%;text-align: center;height: 34px;margin: 0em;"><button v-on:click="random" class="btn btn-secondary" type="button" style="width: 72%;">抽！</button></div>
                </div>

            </div>
            <div class="col overflow-auto" style="height: 15.5em;">
                <ul class="list-group" v-if="list != []">
                    <li class="list-group-item d-xxl-flex align-items-xxl-center" v-for="arr in list" :key="arr">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="arr[1]">
                            <label class="form-label form-check-label" for="flexSwitchCheckDefault">{{arr[0]}}</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div style="text-align: center;"></div>
    <div class="container overflow-auto" style="height:calc(100vh - 12em - 16em);">
        <ul class="list-group" v-if="result != []">
            <li class="list-group-item" v-for="item in result" :key="item">
                <div class="row">
                    <div class="col"><span style="font-size: 1.5em;">{{(item[1]=='') ? (item[0]) : (item[1])}}</span></div>
                    <div class="col" style="text-align: right;"><button :class="(item[2]) ? `btn btn-primary` : `btn btn-primary disabled`" type="button" :id="`btnRemove${item[0]}`" v-on:click="removeListItem(item)">從待選名單移除</button></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
const randomOnce = (arr)=>{
    return arr[Math.floor(Math.random() * arr.length)]
}
const findArr = (arr,target)=>{
    for(let item of arr){
        if(target[0]==item[0]){
            return true
        }
    }
    return false
}
/*eslint-disable*/
export default {
    name:"indexPage",
    data(){
        return{
            max:5,
            min:1,
            count:4,
            alert:[undefined,undefined],
            allowRepeat: false,
            result:[],
            list:[]
        }
    },
    methods:{
        removeListItem(item){
            for(let i of this.list){
                if(item[0]==i[0]){
                    i[1]=false
                    item[2]=false
                }
            }
        },
        checkCount(){
            if(this.list.length<this.count && this.allowRepeat == false){
                this.alert = ['數量錯誤!','不允許重複時，無法抽出比待抽清單總數多的數量!']
                return
            }
            if(1>this.count){
                this.alert = ['數量錯誤!','數量不得為負!']
                return
            }
            this.alert = [undefined, undefined]
        },
        listUpdate(){
            this.list = []
            this.alert[0] = undefined
            this.alert[1] = undefined
            for(let i=this.min;i<=this.max;i++){
                this.list.push([i,true,''])
            }
            if(this.list.length<this.count && this.allowRepeat == false){
                this.alert[0] = '數量錯誤!'
                this.alert[1] = '不允許重複時，無法抽出比待抽清單總數多的數量!'
                return
            }
            if(1>this.count){
                this.alert[0] = '數量錯誤!'
                this.alert[1] = '數量不得為負!'
                return
            }
            if(this.max<this.min){
                this.alert[0] = '最大值/最小值錯誤!'
                this.alert[1] = '最小值大於最大值!'
                return
            }
        },  
        random(){
            let tmpList = []
            this.result = []
            // exclude disabled items
            for(let item of this.list){
                if(item[1]){
                    tmpList.push([item[0],item[2]])
                }
            }
            // random
            if(tmpList.length<this.count && this.allowRepeat == false){
                this.alert[0] = '數量錯誤!'
                this.alert[1] = '不允許重複時，無法抽出比待抽清單總數多的數量!'
                return
            }
            for(let i=0; i<this.count; i++){
                let tmp = randomOnce(tmpList)
                while(!this.allowRepeat&&findArr(this.result,tmp)){
                    tmp = randomOnce(tmpList)
                }
                this.result.push(tmp.concat(true))
            }
        }
    },
    created(){
        this.listUpdate()
    }
}
</script>