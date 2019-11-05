import * as types from '../types'
import {findIndex} from '@/common/util'

const state = {
  playList: [],
  currentIndex: -1
}

const mutations = {
  [types.SET_PLAY_LIST] (state, playList) {
    state.playList = playList
  },
  [types.SET_CURRENT_INDEX] (state,index) {
    state.currentIndex = index
  }
}

const actions = {
  selectPlaySong ({commit, state}, song) {
    let playList = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表是否有待插入的歌曲并返回其索引
    let fpIndex = findIndex(playList, song)
    //如果已经包含这首歌曲
    if (fpIndex > -1) {
      currentIndex = fpIndex
    } else {
      playList = [...playList,song]
      currentIndex = playList.length - 1
    }

    commit(types.SET_PLAY_LIST,playList)
    commit(types.SET_CURRENT_INDEX,currentIndex)
  },
  addPlayLsit ({commit,state},song) { //加入播放列表
    let playList = [...state.playList.slice(),song]
    if(playList.length === 1) {
      let currentIndex =state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX,currentIndex)
    }
      commit(types.SET_PLAY_LIST,playList)
  }
}

const getters = {
  playList: state => state.playList
}

export default {
  state,
  mutations,
  actions,
  getters
}