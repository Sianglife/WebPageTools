<script setup>
import {ref} from 'vue'
import {math,chemistry} from '@/router/list'
const pageData = ref([
    {id:'數學工具',icon:'bi bi-calculator',data:math},
    {id:'化學工具',icon:'bi bi-boxes',data:chemistry}
])
</script>

<script>
export default {
  name:"indexPage",
}
</script>

<template>
  <div class="container py-4 py-xl-5">
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div class="col" style="width: 50%;" v-for="category in pageData" :key="category.id">
                <div class="text-center d-flex flex-column align-items-center align-items-xl-center">
                    <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                      <i :class="category.icon"></i>
                    </div>
                    <div class="px-3">
                        <h4>{{category.id}}</h4>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                            <tr v-for="item in category.data" :key="item.name">
                                <td>
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">{{item.title}}<br></h4>
                                            <h6 class="text-muted card-subtitle mb-2" style="height: 2em;">{{item.description}}<br></h6>
                                            
                                            <button v-if="item.CommingSoon" class="btn btn-primary d-lg-flex align-items-lg-center" type="button" style="text-align: center;background: var(--bs-gray-600);">
                                              <span class="text-white-50" style="font-size: 12px;">敬請期待</span>
                                            </button>

                                            <a v-else :href="item.path">
                                              <button class="btn btn-primary d-lg-flex align-items-lg-center" type="button" style="text-align: center;background: var(--bs-info);">
                                                <i class="bi bi-hand-index-thumb"></i>
                                              </button>
                                            </a>
                                            
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
      </div>
</template>