import env from "./env"

// const DEV_URL = 'https://zhlsqj.com/'
const DEV_URL = "https://lvshui.rdoorweb.com/"
const PRO_URL = "https://zhlsqj.com/"

export default env === "development" ? DEV_URL : PRO_URL
