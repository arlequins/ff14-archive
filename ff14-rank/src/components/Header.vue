<template>
  <div class="row" v-if="isLoaded">
    <div class="row mgb10">
      <div class="col-md-2 col-md-offset-8 col-xs-6 text-right">
        <p class="pdt5 disp-inb">{{lp['language'][cl]}}</p>
      </div>
      <div class="col-md-2 col-xs-6">
        <select class="form-control" v-model="cl" @change="setLang(cl)">
          <option value="ko">{{lp['l-korean'][cl]}}</option>
          <option value="en">{{lp['l-english'][cl]}}</option>
          <option value="ja">{{lp['l-japanese'][cl]}}</option>
        </select>
      </div>
    </div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" @click="navToggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">{{lp['hostname'][cl]}}</router-link>
        </div>
        <div class="collapse navbar-collapse" :class="{ in:toggle }">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/leaderboards" active-class="active"><a>{{lp['m-leaderboards'][cl]}} <span class="sr-only" v-if="$route.path.includes('/leaderboards')">(current)</span></a></router-link>
            <router-link tag="li" to="/name" active-class="active"><a>{{lp['m-name'][cl]}} <span class="sr-only" v-if="$route.path.includes('/name')">(current)</span></a></router-link>
          </ul>
          <div class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" :placeholder="this.lp['m-search-placeholder'][this.cl]" v-model="question" @keyup.enter="searchToTotal">
            </div>
            <button type="submit" class="btn btn-default" v-on:click="searchToTotal">{{lp['m-search-sumit'][cl]}}</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'header',
  props: ['lp'],
  data () {
    return {
      question: '',
      cl: 'ko',
      toggle: false
    }
  },
  methods: {
    searchToTotal: function (event) {
      if (this.question.length > 0) {
        this.$router.push({
          name: 'SearchByName',
          params: {
            username: this.question
          }
        })
      } else {
        alert(this.lp['insert-empty-name-error'][this.cl])
      }
    },
    setLang (cl) {
      this.$store.dispatch('setActiveLang', cl)
    },
    navToggle () {
      this.toggle = !this.toggle
    }
  },
  computed: {
    getLang () {
      return this.$store.state.lang
    },
    isLoaded () {
      if (this.lp.hasOwnProperty('hostname')) {
        return true
      }
      return false
    },
    paramsc () {
      let routeUserName = this.$route.params.username
      if (routeUserName !== undefined) {
        return this.$route.params.username
      } else {
        return ''
      }
    }
  },
  watch: {
    paramsc: function() {
      if (this.paramsc.length > 0) {
        this.question = this.paramsc
      }
    }
  },
  mounted () {
    this.cl = this.getLang
  }
}
</script>
<style scoped>
</style>
