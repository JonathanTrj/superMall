# supermall

## Project setup
```
npm install
```

### Before compiles, 'src/network/request.js' is required
```
// request.js
import axios from 'axios'

export function request1(config) {
  // 1、创建实例
  const instance = axios.create({
    baseURL: 'your baseURL',
    timeout: 10000
  })

  // 2、拦截器的使用
  // 2.1、请求拦截
  instance.interceptors.request.use(
    config => {
      // 放行，结束拦截，不然后续网络请求将出错
      return config
    },
    err => {
      console.log(err);
    }
  )
  // 2.2 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err);
    }
  )

  // 3、发送真正的网络请求
  return instance(config)
}
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
