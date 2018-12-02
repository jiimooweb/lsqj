import env from './env'

const DEV_URL = 'https://zhlsqj.com/'
const PRO_URL = 'https://zhlsqj.com/'

export default env === 'development' ? DEV_URL : PRO_URL
