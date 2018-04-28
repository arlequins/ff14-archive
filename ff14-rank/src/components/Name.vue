<template>
  <div>
    <div v-if="status" class="container">
      <div class="row mgt20">
        <div class="col-sm-2 col-xs-2">
          <p>{{lp['l-nation'][cl]}}</p>
        </div>
        <div class="col-sm-3 col-xs-3">
          <p>{{lp['l-profile'][cl]}}</p>
        </div>
        <div class="col-sm-6 col-xs-7">
          <p>{{lp['l-detail'][cl]}}</p>
        </div>
        <div class="col-sm-1 hidden-xs">
          <p>{{lp['l-record'][cl]}}</p>
        </div>
      </div>
      <template v-if="isLoaded" v-for="i in list.member">
        <router-link tag="div" :to="{ name: 'SearchByNameAndNation', params: { username: i.name, nation: i.nation, data: i }}" active-class="active" :params="i" replace>
          <div class="row mgt20">
            <div class="col-sm-2 col-xs-2">
              <p>{{i.nationname}}</p>
            </div>
            <div class="col-sm-3 col-xs-3">
              <img :src="i.character_face" class="img-circle width50">
            </div>
            <div class="col-sm-6 col-xs-6">
              <div class="col-sm-8 col-xs-12 pd0">
                <p>{{i.name}}</p>
                <p class="visible-xs-block">{{i.world}}</p>
              </div>
              <div class="col-sm-4 hidden-xs pd0">
                <p>{{i.world}}</p>
                <p v-if="this.nation === 0">{{i.dcgroup}}</p>
              </div>
            </div>
            <div class="col-sm-1 col-xs-1">
              <p>{{i.rankList.length}}</p>
            </div>
          </div>
          <div class="row mgt20" v-if="isLoading">
            <h3 class="line-2" v-html="lp['l-process'][cl]"></h3>
          </div>
          <div class="row mgt20" v-if="!isLoading">
            <h3 class="line-2" v-if="!isLoaded" v-html="lp['l-loading'][cl]"></h3>
          </div>
          <div class="row mgt20" v-if="isNoData">
            <h3 class="line-2" v-html="lp['l-nodata'][cl]"></h3>
          </div>
        </router-link>
      </template>
    </div>
    <div v-if="!status" class="container">
      <h1>{{lp['insert-name-error'][cl]}}</h1>
    </div>
  </div>
</template>
<script>
import swallow from '../utils/swallow'

export default {
  name: 'name',
  props: ['today'],
  data() {
    return {
      list: {},
      status: false
    }
  },
  computed: {
    question() {
      let routeUserName = this.$route.params.username
      if (routeUserName !== undefined) {
        return this.$route.params.username
      } else {
        return ''
      }
    },
    searchData() {
      return swallow.setByName(this.$store.state.byname, this.lp, this.cl)
    },
    isLoaded() {
      if (this.list.hasOwnProperty('member')) {
        return true
      }
      return false
    },
    isLoading() {
      if (this.list.hasOwnProperty('member')) {
        return false
      }
      return true
    },
    isNoData() {
      if (this.list.hasOwnProperty('member')) {
        if (this.list.member.length === 0) {
          return true
        } else {
          return false
        }
      }
    },
    lp() {
      return this.$store.state.lang_pack
    },
    cl() {
      return this.$store.state.lang
    }
  },
  watch: {
    question: function() {
      let username = this.question
      if (username.length > 0) {
        this.list = {}
        this.$store.dispatch('searchByName', username)
        this.status = true
      } else {
        this.status = false
      }
    },
    searchData: function() {
      this.list = this.searchData
    }
  },
  mounted() {
    let username = this.question
    if (username.length > 0) {
      this.$store.dispatch('searchByName', username)
      this.status = true
    } else {
      this.status = false
    }
  }
}
</script>
<style scoped>
</style>
