<template>
    <v-scroll ref="suggest" class="suggest" :data="result">
</template>

<script>
import scroll from '@/components/scroll'
export default {
    components: {
        'v-scroll':scroll
    }
}
</script>

<style lang="stylus" scoped>

</style>