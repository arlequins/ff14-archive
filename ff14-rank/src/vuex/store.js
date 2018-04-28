import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import sha256 from 'js-sha256'
import querystring from 'querystring'
import swallow from '../utils/swallow'

Vue.use(Vuex)

const persist = {
  searchUrl: '..',
  searchDevUrl: 'http://localhost:8180',
  header: {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
}

const state = {
  lang: '',
  searchingDate: swallow.getToday(),
  lang_pack: {},
  searchData: {},
  memberInfo: {},
  byname: {code: 0},
  data: {},
  seasonInfo: {},
  errors: []
}

const mutations = {
  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_LANG (state, text) {
    localStorage.setItem('swallow_lang', text)
    state.lang = text
  },

  SET_SEARCHING_DATE (state, date) {
    state.searchingDate = date
  },

  SET_COOKIE_LANG (state) {
    var savedLang = localStorage.getItem('swallow_lang')
    var language = ''
    if (savedLang === null) {
      language = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
      language = language.split('-')[0]
      localStorage.setItem('swallow_lang', language)
    } else {
      language = savedLang
    }
    state.lang = language
  },

  SET_LANG_PACK (state) {
    axios.get('./static/js/lang.js')
    .then(response => {
      state.lang_pack = response.data
    })
    .catch(e => {
      state.errors.push(e)
    })
  },

  SEARCH_RANK (state, param) {
    let stringParam = querystring.stringify(param)
    let shaKey = sha256(stringParam)
    let searchUrl = swallow.setSearchUrl(persist)

    if (state.data.hasOwnProperty(shaKey)) {
      state.searchData = state.data[shaKey]
    } else {
      axios.post(searchUrl + '/raven/' + param.target, stringParam, persist.header)
      .then(response => {
        state.searchData = swallow.setRankData(response.data)
        state.data[shaKey] = state.searchData
      })
      .catch(e => {
        state.errors.push(e)
      })
    }
  },

  SEARCH_SEASON_INFO (state) {
    let stringParam = '?target=seasonInfo'
    let shaKey = sha256(stringParam)
    let searchUrl = swallow.setSearchUrl(persist)

    if (state.data.hasOwnProperty(shaKey)) {
      state.seasonInfo = state.data[shaKey]
    } else {
      axios.post(searchUrl + '/raven/seasoninfo', '', persist.header)
      .then(response => {
        state.seasonInfo = swallow.setSeasonData(response.data)
        state.data[shaKey] = state.seasonInfo
      })
      .catch(e => {
        state.errors.push(e)
      })
    }
  },

  SEARCH_MEMBER_INFO (state) {
    let stringParam = '?target=memberinfo'
    let shaKey = sha256(stringParam)
    let searchUrl = swallow.setSearchUrl(persist)

    if (state.data.hasOwnProperty(shaKey)) {
      state.memberInfo = state.data[shaKey]
    } else {
      axios.post(searchUrl + '/raven/memberinfo', '', persist.header)
      .then(response => {
        state.memberInfo = swallow.setMemberData(response.data)
        state.memberInfo['code'] = 1
        state.data[shaKey] = state.memberInfo
      })
      .catch(e => {
        state.errors.push(e)
      })
    }
  },

  SEARCH_BY_NAME (state, name) {
    let stringParam = '?target=byname&name=' + name
    let shaKey = sha256(stringParam)
    let searchUrl = swallow.setSearchUrl(persist)

    if (state.data.hasOwnProperty(shaKey)) {
      state.byname = state.data[shaKey]
    } else {
      axios.post(searchUrl + '/raven/name', stringParam, persist.header)
      .then(response => {
        state.byname = response.data
        state.byname['code'] = 1
        state.data[shaKey] = state.byname
      })
      .catch(e => {
        state.errors.push(e)
      })
    }
  }
}

const actions = {
  setActiveLang ({ commit }, lang) {
    commit('SET_ACTIVE_LANG', lang)
  },

  setSearchingDate ({ commit }, date) {
    commit('SET_SEARCHING_DATE', date)
  },

  setCookieLang ({ commit }) {
    commit('SET_COOKIE_LANG')
  },

  setLangPack ({ commit }) {
    commit('SET_LANG_PACK')
  },

  searchRank ({ commit }, param) {
    commit('SEARCH_RANK', param)
  },

  searchSeasonInfo ({ commit }) {
    commit('SEARCH_SEASON_INFO')
  },

  searchMemberInfo ({ commit }) {
    commit('SEARCH_MEMBER_INFO')
  },

  searchByName ({ commit }, name) {
    commit('SEARCH_BY_NAME', name)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
