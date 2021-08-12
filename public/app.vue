<template>
    <div id="app">
        <div>
            <input v-model="imgUrl"/>
        </div>
        <button @click="visible = !visible">预览</button>
        <g-vue-preview :visible.sync="visible" :src="imgUrl"></g-vue-preview>
    </div>
</template>

<script>
export default {
    data(){
        return {
            imgUrl:"https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
            visible:false
        }
    }
}
</script>