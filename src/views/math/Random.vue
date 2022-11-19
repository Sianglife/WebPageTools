<template>
    <div class="container">
        <div class="row" style="height: 14em;border-right-style: none;border-bottom-style: dotted;line-height: 28px;margin: 1em;">
            <div class="col" style="height: 14em;border-color: var(--bs-gray-500);border-right-style: dotted;">
                <div class="row" style="margin: 0.5em;height: 3em;">
                    <div class="col" style="width: 100%;text-align: center;"><span style="font-size: 1.5em;width: 25%;">最小: </span><input v-on:change="listUpdate" v-model="min" type="number" style="font-size: 1.5em;height: 2em;width: 75%;"  /></div>
                </div>
                <div class="row" style="margin: 0.5em;height: 3em;">
                    <div class="col" style="width: 100%;text-align: center;"><span style="font-size: 1.5em;width: 25%;">最大: </span><input @change="listUpdate" v-model="max" type="number" style="font-size: 1.5em;height: 2em;width: 75%;" /></div>
                </div>
                <div class="row" style="margin: 0.5em;height: 3em;">
                    <div class="col" style="width: 100%;text-align: center;"><span style="font-size: 1.5em;width: 25%;">數量: </span><input @change="listUpdate" v-model="count" type="number" style="font-size: 1.5em;height: 2em;width: 75%;" /></div>
                </div>
                <div class="row">
                    <div class="col" style="width: 100%;text-align: center;height: 34px;margin: 0em;"><button class="btn btn-secondary" type="button" style="width: 72%;">抽！</button></div>
                </div>
            </div>
            <div class="col overflow-auto" style="height: 14em;">
                <ul class="list-group" v-if="list != []">
                    <li class="list-group-item d-xxl-flex align-items-xxl-center" v-for="arr in list" :key="arr[0]">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" :checked="arr[1]" :v-modal="arr[1]">
                            <label class="form-label form-check-label" for="flexSwitchCheckDefault">{{arr[0]}}</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div style="text-align: center;"></div>
    <div class="container overflow-auto">
        <ul class="list-group" v-if="result != []">
            <li class="list-group-item" v-for="item in result" :key="item">
                <div class="row">
                    <div class="col"><span style="font-size: 1.5em;">{{}}</span></div>
                    <div class="col" style="text-align: right;"><button class="btn btn-primary" type="button">從待選名單移除</button></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/*eslint-disable*/
export default {
  name:"indexPage",
  data(){
    return{
        max:3,
        min:1,
        count:1,
        result:[],
        list:[[1,true,null],[2,true,null],[3,true,null]]
    }
  },
  methods:{
    listUpdate(){
        console.log(this.max,this.min,this.count)
        for(let i=this.min;i<=this.max;i++){
            this.list.push([i,true,null]);
        }

        console.log(this.list);
    },
    checkList(){
        for(let item in this.list){
            console.log($(`switch${item[0]}`).attr('checked'))
        }
    }
  }
}
</script>