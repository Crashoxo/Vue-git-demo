<template>
{{name}}
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
<Card></Card>
<br>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>

</template>

       <style lang="scss">
       @import "bootstrap";
       </style>

<script>

import Card from '@/components/Card.vue'

export default {
  data () {
    return {
      name: process.env.VUE_APP_NAME
    }
  },
  // 區域註冊
  components: {
    Card
  }
}

</script>
