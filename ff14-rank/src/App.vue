<template>
  <div id="app" class="container">
    <div v-if="isLoaded">
      <upper :lp="langPack"></upper>
      <router-view :lp="langPack" :today="getToday"></router-view>
    </div>
    <div v-if="!isLoaded">
      <h1>Loading now</h1>
    </div>
  </div>
</template>
<script>
import upper from './components/Header'
import swallow from './utils/swallow'

export default {
  name: 'app',
  components: {
    upper
  },
  computed: {
    langPack() {
      return this.$store.state.lang_pack
    },
    getToday() {
      return swallow.getToday()
    },
    memberInfo() {
      return this.$store.state.memberInfo
    },
    isLoaded() {
      if (this.memberInfo.hasOwnProperty('code')) {
        return true
      }
      return false
    }
  },
  beforeCreate() {
    this.$store.dispatch('setLangPack')
    this.$store.dispatch('searchSeasonInfo')
    this.$store.dispatch('searchMemberInfo')
  },
  created() {
    this.$store.dispatch('setCookieLang')
  }
}
</script>
<style lang="scss">
@import './css/main.scss';
</style>
