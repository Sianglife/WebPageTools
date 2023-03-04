<script>
export default {
    data() {
        return {
            urls: [
                { text: '飛翔部落格', href: 'https://sianglife.github.io/blog/', icon: 'bi bi-pencil', blanktab: true },
                { text: '小工具首頁', to:{ name:'index' }, icon: 'bi bi-house-door', blanktab: true }
            ]
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-light navbar-expand-md py-3" style="background: rgb(89,154,143);height: 5em;">
        <a class="navbar-brand d-flex align-items-center" href="/WebPageTools">
            <span
                class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center mx-2 bs-icon">
                <i style="color: var(--bs-navbar-active-color);" class="bi bi-tools"></i>
            </span>
            <span class="text-white">飛翔小工具</span>
        </a>
        <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container">
            <div class="collapse navbar-collapse" id="navcol-2">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-for="item in urls" :key="item.href">
                        <div v-if="item.href != undefined">
                            <a v-if="item.blanktab" class="nav-link link-light" :href=item.href target="_blank"><i
                                    :class=item.icon></i>{{ item.text }}</a>
                            <a v-else class="nav-link link-light" :href=item.href><i :class=item.icon></i>{{ item.text }}</a>
                        </div>
                        <div v-else-if="item.to != undefined">
                            <router-link class="nav-link link-light" :to=item.to><i :class=item.icon></i>{{ item.text }}</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
