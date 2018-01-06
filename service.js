const serviceDomain = 'http://api.handsomehan.cn:10013';

export const address = {
  ads: `${serviceDomain}/v1/ads/`,
  flowers: `${serviceDomain}/v1/flowers/`,
}

export const request = config => {
  config = Object.assign({}, {
    url: '',
    body: undefined,
    method: 'GET',
    hasCert: true,
    isJson: true,
    isBlob: false,
    hasHeader: true
  }, config)

  let elements = {
    method: config.method,
    body: config.body,
    headers: undefined
  }

  if (config.hasHeader) {
    elements.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }

  if (config.hasCert) {
    elements.headers.Authorization = `JWT ${token}`
  }

  // console.log('config: %o, elements: %o', config, elements)

  return (
    fetch(config.url, elements)
      .then((response) => {
        // console.log("Get response:%o", response)
        if (!response.ok) {
          // console.log("Get fail response:%o", response)
          let error = new Error(response.statusText || 'Something bas happen')
          error.response = response
          throw error
        }

        if (config.isBlob) return response.blob()
        if (config.isJson) return response.json()

        return response.text()
      })
  )
}
