<template>
  <div class="container" v-if="isLoaded">
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <div class="col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1">
          <label>
            <input type="radio" name="nation" value="0" v-model="nation">
            <p>{{lp['sub-global'][cl]}}</p>
          </label>
        </div>
        <div class="col-md-3 col-xs-3">
          <label>
            <input type="radio" name="nation" value="1" v-model="nation">
            <p>{{lp['sub-korean'][cl]}}</p>
          </label>
        </div>
        <div class="col-md-3 col-xs-3">
          <label>
            <input type="radio" name="nation" value="2" v-model="nation">
            <p>{{lp['sub-chinese'][cl]}}</p>
          </label>
        </div>
      </div>
      <div class="col-md-4 col-xs-12 mgb20">
        <select class="form-control" v-model="season">
          <option v-bind:value="item.season" v-for="item in seasonList">{{item.season + lp['seasonlist'][cl]}}</option>
        </select>
      </div>
      <div class="col-md-4 col-xs-12">
        <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder"></calendar>
      </div>
    </div>
    <Ranklist :today="value"></Ranklist>
  </div>
</template>
<script>
import Calendar from './Calendar'
import Ranklist from './Ranklist'

function setNationTxt (nation) {
  let txt = ''
  switch (Number(nation)) {
    case 0:
      txt = 'gl'
      break
    case 1:
      txt = 'ko'
      break
    case 2:
      txt = 'ch'
      break
  }
  return txt
}

function setNationToLang (nation) {
  let result = -1
  switch (nation) {
    case 'ko':
      result = 1
      break
    case 'en':
      result = 0
      break
    case 'ja':
      result = 0
      break
  }
  return result
}

export default {
  name: 'leaderboards',
  props: ['lp', 'today'],
  data () {
    return {
      param: {},
      nation: -1,
      season: -1,
      status: 0,
      seasonList: [],
      list: {},
      disabled: [],
      value: this.today,
      format: 'yyyy-MM-dd',
      clear: true,
      placeholder: this.lp['insert-error'][this.cl]
    }
  },
  components: {
    Calendar,
    Ranklist
  },
  method: {
    setLang (cl) {
      this.$store.dispatch('setActiveLang', cl)
    }
  },
  computed: {
    cl () {
      return this.$store.state.lang
    },
    searchDate () {
      return this.$store.state.searchingDate
    },
    seasonListRaw () {
      let seasonListRaw = this.$store.state.seasonInfo
      let seasonList = seasonListRaw[setNationTxt(this.nation)]
      if (seasonList !== undefined && this.status === 0) {
        this.status = 1
        seasonList.map(v => {
          if (this.season === -1) {
            if (v.currentstatus === 1) {
              this.season = v.season
            }
          }
        })
      }
      this.seasonList = seasonList
      return seasonListRaw
    },
    isLoaded () {
      if (this.lp.hasOwnProperty('hostname')) {
        return true
      }
      return false
    }
  },
  watch: {
    cl: function () {
      this.nation = setNationToLang(this.cl)
    },
    seasonListRaw: function () {
      let seasonList = this.seasonListRaw[setNationTxt(this.nation)]
      if (seasonList !== undefined) {
        seasonList.map(v => {
          if (this.season === -1) {
            if (v.currentstatus === 1) {
              this.season = v.season
            }
          }
        })
      }
      this.seasonList = seasonList
    },
    nation: function () {
      let seasonList = this.seasonListRaw[setNationTxt(this.nation)]
      if (seasonList !== undefined) {
        seasonList.map(v => {
          if (this.season === -1) {
            if (v.currentstatus === 1) {
              this.season = v.season
            }
          } else {
            if (v.currentstatus === 1) {
              this.season = v.season
            }
          }
        })
      }
      this.seasonList = seasonList
      this.param['nation'] = this.nation
    },
    season: function () {
      this.param['season'] = this.season
      if (this.param['nation'] !== -1 && this.param['season'] !== -1) {
        this.$router.push({
          name: 'SearchByLeaderboards',
          params: {
            nation: this.nation,
            season: this.season,
            dttm: this.searchDate
          }
        })
        this.$store.dispatch('searchRank', this.param)
      }
    },
    searchDate: function () {
      this.$router.push({
        name: 'SearchByLeaderboards',
        params: {
          nation: this.nation,
          season: this.season,
          dttm: this.searchDate
        }
      })
    }
  },
  mounted () {
    // if params exist, follow route
    if (this.$route.params.hasOwnProperty('nation') && this.$route.params.hasOwnProperty('season') && this.$route.params.hasOwnProperty('dttm')) {
      this.nation = Number(this.$route.params['nation'])
      this.season = Number(this.$route.params['season'])
    } else {
      // set language
      let lang = setNationToLang(this.cl)
      this.nation = lang
    }

    // set default ajaxcall
    if (!this.param.hasOwnProperty('target')) {
      this.param = {
        target: 'season',
        season: this.season,
        nation: this.nation
      }
    }

    let seasonList = this.seasonListRaw[setNationTxt(this.nation)]
    if (this.season === -1) {
      if (seasonList !== undefined) {
        seasonList.map(v => {
          if (v.currentstatus === 1) {
            this.season = v.season
          } else {
            let routeSeason = Number(this.$route.params['season'])
            if (routeSeason !== undefined) {
              this.season = routeSeason
            } else {
              if (v.currentstatus === 1) {
                this.season = v.season
              }
            }
          }
        })
      }
    }
    this.seasonList = seasonList
    this.$router.push({
      name: 'SearchByLeaderboards',
      params: {
        nation: this.nation,
        season: this.season,
        dttm: this.searchDate
      }
    })
  }
}
</script>
<style scoped>
.markdown {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
}

@import "../css/calmarkdown.scss"
</style>
