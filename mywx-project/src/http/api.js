import fly from './interceptor'
//实例配置
fly.config.timeout = 10000;
fly.config.baseURL = 'https://codeve.online';
//fly.config.baseURL = 'localhost:3000' //本地

export const imgUrl = fly.config.baseURL;

//对比appid
export function CompireAppId(parmas){
  return fly.post('/compireAppId',parmas)
}

export function Banner(parmas) {
  return fly.get('/test', parmas);
}
