<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search @query="onQueryChange" ref="searchBox"></v-search> <!-- ref重要 -->
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query"> <!-- vuex中取出的query -->
      <v-scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div>
          <!-- 热门搜索 -->
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item,index) in hotKey" :key="index">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
          <!-- 搜索历史 -->
          <div class="serach-history" v-show="searchHistory.length"></div>
            <hi class="title">
              <span class="text">搜索历史</span>
              <span class="clear">
                <i class="icon">&#xe612;</i>
              </span>
            </hi>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
  data () {
    
    return {
      query: '',
      shortcut:[],
      refreshDelay:1,
      hotKey: [
        {first: '要放假了'},
        {first: '要放假了dad'},
        {first: '要放假了ggggg'}
      ],
      searchHistory:''
    }
  },
  components: {
    'v-search': searchBox,
    'v-scroll': scroll
  },
  methods: {
    onQueryChange () {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.search
  overflow hidden
  &-box-wrapper
   margin px2rem(40px)
 .shortcut-wrapper
   position fixed
   top px2ren(360px)
   bottom 0
   width  100%
   .shortcut
     height 100%
     overflow hidden
      .hot-key
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0, 0%, 100%, 0.5)
        .item
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px
          font-size 14px
          color hsla(0, 0%, 100%, 0.3)
          background #2f3054
</style>