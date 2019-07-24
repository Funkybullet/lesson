<template>
    <div>
        Clicked:{{$store.state.count}} times,count is
        <button @click="increment">+</button>
    </div>
</template>

<script>
// 让store里的改变状态的方法，mapActions
import { mapActions } from 'vuex';
export default {
    //自身的状态
    props: ['count'],
    // data () {
    //     return {
    //         count: 0
    //     }
    // },
    methods: 
        mapActions([
            'increment'
        ])
        // increment () {
            //修改store 状态？
            // this.$store.state.count++
        // }
    
}
</script>

<style>

</style>
