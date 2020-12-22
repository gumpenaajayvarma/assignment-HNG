
export default class HttpClient {
    get (url, headers) {
        return this.doFetch(url, 'GET', null, headers)
    }
    doFetch(url, type, body, headers) {
        const resBody = type !== 'GET' ? body : null
        const options = {
            type,
            resBody,
            headers
        }
        return fetch(url, options).then(response => {
          return response.text().then(data => {
            return {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              rbody: data
            }
          })
        }).then( ({ status, statusText, headers, rbody }) => {
            let json
            try {
              json = JSON.parse(rbody)
            } catch (e) {
                return Promise.reject(new Error('Json parsing error:' + e.message))
            }
    
            if (status < 200 || status >= 300) {
              switch (status) {
                case 500:
                case 503:
                    return Promise.reject(new Error('HTTP_ERROR_' + status));
                default: break;
              }
              return Promise.reject(
                new Error('HTTP Status ' + status + (statusText === '' ? '' : ' - ' + statusText))
              )
            }
            return Promise.resolve({ data: json.data || rbody, headers: headers })
          })
    }
}