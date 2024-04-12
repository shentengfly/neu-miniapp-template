export const login  = function (options) {
  uni.sendNativeEvent('login',{
    timeout:(options && options.timeout)?options.timeout:undefined
  },res=>{
    if(!options)return;
    if (res.code === 200) {
      options.success && options.success({...res.data})
    }
    else{
      options.fail && options.fail({
        errMsg: res.errMsg
      })
    }
    options.complete && options.complete({...res})
  })
}

export const requestPayment  = function (options) {
  uni.sendNativeEvent('requestPayment',{
    "name": options.name,
    "country":options.country,
    "currency":options.currency,
    "amount":options.amount,
    "transactionNo":options.transactionNo
  },res=>{
    if(!options)return;
    if (res.code === 200) {
      options.success && options.success({...res.data})
    }
    else{
      options.fail && options.fail({
        errMsg: res.errMsg
      })
    }
    options.complete && options.complete({...res})
  })
}
export const getUserProfile  = function (options) {
  uni.sendNativeEvent('getUserProfile',{
    desc:(options && options.desc)?options.desc:undefined
  },res=>{
    if(!options)return;
    if (res.code === 200) {
      options.success && options.success({...res.data})
    }
    else{
      options.fail && options.fail({
        errMsg: res.errMsg
      })
    }
    options.complete && options.complete({...res})
  })
}

export const share  = function (options) {
  uni.sendNativeEvent('share',{
    "provider": options.provider,
    "type": options.type,
    "summary":options.summary,
    "href":options.href,
    "imageUrl":options.imageUrl
  },res=>{
    if(!options)return;
    if (res.code === 200) {
      options.success && options.success({...res.data})
    }
    else{
      options.fail && options.fail({
        errMsg: res.errMsg
      })
    }
    options.complete && options.complete({...res})
  })
}

export const navigateToMiniProgram  = function (options) {
  uni.sendNativeEvent('navigateToMiniProgram',{
    "appId": options.appId,
    "path": options.path,
    "extraData":options.extraData,
    "envVersion":options.envVersion,
  },res=>{
    if(!options)return;
    if (res.code === 200) {
      options.success && options.success({...res.data})
    }
    else{
      options.fail && options.fail({
        errMsg: res.errMsg
      })
    }
    options.complete && options.complete({...res})
  })
}


export const openPressReader  = function (options) {
  uni.sendNativeEvent('openPressReader',{
    
  },res=>{
    if(!options)return;
    if (res.code === 200) {
      options.success && options.success({...res.data})
    }
    else{
      options.fail && options.fail({
        errMsg: res.errMsg
      })
    }
    options.complete && options.complete({...res})
  })
}