<template>
  <div>
    <div class="row mgt20">
      <div class="col-sm-2 col-xs-2">
        <p>{{lp['l-date'][cl]}}</p>
      </div>
      <div class="col-sm-1 col-xs-1">
        <p>#</p>
      </div>
      <div class="col-sm-4 col-xs-4">
        <p>{{lp['l-player'][cl]}}</p>
      </div>
      <div class="col-sm-5 col-xs-4">
        <div class="col-sm-6 hidden-xs pd0">
          <p>{{lp['l-winrate'][cl]}}</p>
        </div>
        <div class="col-sm-6 hidden-xs pd0">
          <p>{{lp['l-match'][cl]}}</p>
        </div>
        <div class="col-xs-12 visible-xs-block pd0">
          <p>{{lp['l-data'][cl]}}</p>
        </div>
      </div>
    </div>
    <div class="row mgt20" v-if="isLoaded" v-for="i in list.data">
      <div class="col-sm-2 col-xs-2">
        <p>{{i.stddate}}</p>
      </div>
      <div class="col-sm-1 col-xs-1">
        <p>{{i.order}}</p>
        <p v-if="i.preorder !== -1">{{i.preorder}}</p>
      </div>
      <div class="col-sm-4 col-xs-5">
        <div class="col-sm-8 col-xs-12 pd0">
          <p>{{i.name}}</p>
          <p class="visible-xs-block">{{i.world}}</p>
        </div>
        <div class="col-sm-4 hidden-xs pd0">
          <p>{{i.world}}</p>
          <p v-if="this.nation === 0">{{i.dcgroup}}</p>
        </div>
      </div>
      <div class="col-sm-5 col-xs-4">
        <div class="col-sm-4 col-xs-12 pd0">
          <p>{{i.win_count}} / {{i.match_count}}</p>
          <p class="visible-xs-block">{{Math.round((i.win_count/i.match_count* 100) * 100) / 100 + '%'}}</p>
        </div>
        <div class="col-sm-2 hidden-xs pd0">
          <p>{{Math.round((i.win_count/i.match_count* 100) * 100) / 100 + '%'}}</p>
        </div>
        <div class="col-sm-6 hidden-xs pd0">
          <p>{{i.match_count}}</p>
          <p v-if="i.prev_match_rate !== 0">({{i.prev_match_rate}})</p>
        </div>
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
  </div>
</template>
<script>
export default {
  name: 'ranklist',
  props: ['data'],
  data () {
    return {
      list: {}
    }
  },
  computed: {
    isLoaded () {
      if (this.list.hasOwnProperty('data')) {
        return true
      }
      return false
    },
    isLoading () {
      if (this.list.hasOwnProperty('data')) {
        return false
      }
      return true
    },
    isNoData () {
      if (this.list.hasOwnProperty('data')) {
        if (this.list.data.length === 0) {
          return true
        } else {
          return false
        }
      }
    },
    lp () {
      return this.$store.state.lang_pack
    },
    cl () {
      return this.$store.state.lang
    }
  },
  mounted () {
    this.list = {
      code: 1,
      data: this.$route.params.data.rankList
    }
  }
}
</script>
<style scoped>
</style>
