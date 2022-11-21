export const home=[
    {
        "path":"/",
        "title":"首頁",
        "name":'index',
        "component":()=>require('@/views/homeIndex.vue')
    }
]
export const math=[
    {
        "CommingSoom":false,
        "path":"/math/Factor",
        "title":"質數/因數工具",
        "name":'mathFactor',
        "description":'找質數、因數、質因數與公因數',
        "component":()=>require('@/views/math/Factor.vue')
    },
    {
        "CommingSoom":false,
        "path":"/math/Random",
        "title":"抽籤",
        "name":'mathRandom',
        "description":'隨機抽籤工具',
        "component":()=>require('@/views/math/Random.vue')
    },
    
]
export const chemistry=[
    {
        "CommingSoom":false,
        "path":"/chemistry/Density",
        "title":"密度工具",
        "name":'chemistryDensity',
        "description":'密度、質量、體積換算',
        "component":()=>require('@/views/homeIndex.vue')
    },
    {
        "CommingSoom":false,
        "path":"/chemistry/MoleCular",
        "title":"分子量計算器",
        "name":'chemistryMoleCular',
        "description":'計算化合物分子量',
        "component":()=>require('@/views/homeIndex.vue')
    },
    
]