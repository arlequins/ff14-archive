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
      <template v-if="isLoaded" v-for="i in list.data">
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
      </template>
    </div>
    <RanklistName :data="list"></RanklistName>
  </div>
</template>
<script>
import RanklistName from './RanklistName'

export default {
  name: 'nameDetail',
  data() {
    return {
      list: {},
      status: false
    }
  },
  components: {
    RanklistName
  },
  computed: {
    isLoaded() {
      if (this.list.hasOwnProperty('data')) {
        return true
      }
      return false
    },
    isLoading() {
      if (this.list.hasOwnProperty('data')) {
        return false
      }
      return true
    },
    isNoData() {
      if (this.list.hasOwnProperty('data')) {
        return true
      } else {
        return false
      }
    },
    lp() {
      return this.$store.state.lang_pack
    },
    cl() {
      return this.$store.state.lang
    }
  },
  mounted() {
    this.list = {
      code: 1,
      data: this.$route.params.data
    }
  }
}
</script>
<style scoped>
</style>
