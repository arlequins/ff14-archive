exports.setSearchUrl = (persist) => {
  let searchUrl = ''
  if (process.env.NODE_ENV === 'development') {
    searchUrl = persist.searchDevUrl
  } else {
    searchUrl = persist.searchUrl
  }
  return searchUrl
}

exports.getToday = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  let yyyy = today.getFullYear()

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }
  return yyyy + mm + dd
}

exports.setRankData = (data) => {
  let rankData = {
    data: [],
    index: {}
  }

  if (data.code !== 1) {
    return {}
  }

  rankData = {
    data: data.rank,
    index: data.index
  }

  return rankData
}

exports.setSeasonData = (data) => {
  let seasonData = {
    gl: [],
    ko: [],
    ch: []
  }

  if (data.code !== 1) {
    return {}
  }

  data.season.map(v => {
    if (v.nation === 0) {
      seasonData['gl'].push(v)
    } else if (v.nation === 1) {
      seasonData['ko'].push(v)
    } else {
      seasonData['ch'].push(v)
    }
  })

  return seasonData
}

exports.setMemberData = (data) => {
  let memberData = {}

  if (data.code !== 1) {
    return {}
  }

  data.memberlist.map(v => {
    let keyvalue = v.name + '|' + v.world
    memberData[keyvalue] = {
      face: v.face,
      path: v.path
    }
  })

  return memberData
}

exports.setByName = (data, lp, cl) => {
  if (data.code !== 1) {
    return {}
  }

  data.member.map(v => {
    switch (v.nation) {
      case 0:
        v['nationname'] = lp['ll-global'][cl]
        break
      case 1:
        v['nationname'] = lp['ll-korea'][cl]
        break
      case 2:
        v['nationname'] = lp['ll-china'][cl]
        break
    }
  })

  return data
}
