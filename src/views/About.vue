<template>
    <div class='about'>
        菜单
    </div>
</template>
<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name:'about',
    props: {
    // msg: String 可以添加类型验证
    },
    data(){
        return {
        // 初始数据
        // form:{
        //     username:'zs'
        // }
        }
    },
    watch: {
    //监听 对象里面的属性使用深度监听
    // 'form.username': {
    //     immediate: true,
    //     handler(newV) {
    //         if(newV !==''){
    //         //   处理代码
    //         }
    //     }
    // },
    },
    computed: {
    // now() {
    //     return Date.now()
    // }
    },
    created(){
    // data和methods 初始化好了之后
    },
    mounted() {
    // dom渲染后
    },
    methods: {
    //方法
    },
    components: {
    //引入其他组件name
    }
}
</script>