import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'

import { useAuth, createAuth } from "vue-auth3"
import driverAuthBearer from "vue-auth3/drivers/auth/bearer-token"
import driverHttpAxios from "vue-auth3/drivers/http/axios"

import App from './App.vue'
import './assets/index.postcss'
import router from './router'

const head = createHead()
const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(head)



const authSettings = createAuth({
    fetchData: {
        enabled: true, // send a request to `/api/user` if the user information stored in the cookie is not visible
        cache: true, //save user information to localStorage for use
        enabledInBackground: true, // refresh user information in the background
    },
        refreshToken: {
        enabled: false, // refresh token in goto page
        enabledInBackground: true, // refresh token in background
    },    
  plugins: {
    router,
  },
  drivers: {
    auth: driverAuthBearer,
    http: driverHttpAxios,
  },
})

app.use(authSettings);

app.mount('#app')


router.beforeEach((to, from) => {
  const auth = useAuth();
  console.log('When you hit /demo/ directly, it redirects to /login, but no way to know the page that we came from.')
  console.log('It would be great if auth.redirect, showed the previous page even when we directly hit a page requiring auth.')
  console.log(auth.redirect())

})