import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 把套件引入
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import Card from '@/components/Card.vue'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})

// 強制使用
setLocale('zh_TW')

// 全域註冊
const app = createApp(App)
app.use(router)
// 標籤字串名字,變數
app.component('Card2', Card)
app.component('Field', Field)
app.component('Form', Form)
app.component('ErrorMessage', ErrorMessage)

// mount要放最後
app.mount('#app')

// createApp(App).use(router).mount('#app')
