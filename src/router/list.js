export const error404 = [
    {
        "path": "/:pathMatch(.*)*",
        "name": "indexError404",
        "meta": {
            "title": "錯誤",
        },
        "component": () => import('@/views/404.vue'),
    },
    {
        "path": "/math/:pathMatch(.*)*",
        "name": "mathError404",
        "meta": {
            "title": "錯誤",
        },
        "component": () => import('@/views/404.vue'),
    },
    {
        "path": "/chemistry/:pathMatch(.*)*",
        "name": "chemistryError404",
        "meta": {
            "title": "錯誤",
        },
        "component": () => import('@/views/404.vue'),
    },
]
export const home = [
    {
        "path": "/",
        "title": "首頁",
        "name": 'index',
        "component": () => import('@/views/home.vue')
    },
]
export const math = [
    {
        "CommingSoom": false,
        "path": "/math/Random",
        "name": 'mathRandom',
        "meta": {
            "title": "抽籤",
            "description": '隨機抽籤工具',
        },
        "component": () => import('@/views/math/Random.vue')
    },
    {
        "CommingSoom": false,
        "path": "/math/Factor",
        "name": 'mathFactor',
        "meta": {
            "title": "質數/因數工具",
            "description": '找質數、因數、質因數與公因數',
        },
        "component": () => import('@/views/math/Factor.vue')
    },
]
export const chemistry = [
    {
        "CommingSoom": false,
        "path": "/chemistry/Density",
        "name": 'chemistryDensity',
        "meta": {
            "title": "密度工具",
            "description": '密度、質量、體積換算',
        },
        "component": () => import('@/views/chemistry/Density.vue')
    },
    {
        "CommingSoom": false,
        "path": "/chemistry/MoleCular",
        "name": 'chemistryMoleCular',
        "meta": {
            "title": "分子量計算器",
            "description": '計算化合物分子量',
        },
        "component": () => import('@/views/chemistry/MoleCular.vue')
    },
]
export const daily = [
    {
        "CommingSoom": false,
        "path": "/daily/InternationalShippingPrice",
        "name": 'dailyInternationalShippingPrice',
        "meta": {
            "title": "國際航運價格計算",
            "description": '以包裹尺寸、重量計算國際航運價格，含',
        },
        "redirect": "https://sianglife.github.io/WebPageTools1.0/chemistry/MoleCularCounter.html"
    }
]