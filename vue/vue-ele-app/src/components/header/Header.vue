-<template>
  <div class="header">
    <div class="content-wrapper">
      <!-- 头像 -->
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <!-- 右侧描述 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">分钟送达</div>
        <div class="support">
          <span class="icon"></span>
          <span class="text">{{}}</span>
        </div>
      </div>
      <div class="support-count">
        <span class="coun">{{seller.supports.length}}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';
.header
  position relative
  overflow hidden
  color #fff
  background rgba(7, 17, 27, 0.5)
  .content-wrapper
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 2px;
    .content
      display inline-block
      margin-left 16px
      .title
        margin 0 2px 8px 0
        .brand
          display inline-blockj
          vertical-align top
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 16px
          font-size 16px
          line-height 18px
          font-weight bold
      .description
        margin-bottom 10px
        line-height 12px
        font-size 12px

</style>

<script>
export default {
  name: 'Header',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: []
    }
  }
}
</script>
