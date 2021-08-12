
# 一个基于Vue2.0 图片预览插件

**使用**

```vue
<template>
    <div>
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
            visible:true
        }
    }
}
</script>
```

- 预览 ✅
- 放大 ✅
- 重置 ✅
- 旋转 ✅