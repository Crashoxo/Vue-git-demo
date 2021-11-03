<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
            <Form @submit="onSubmit" v-slot="{ errors }">
              {{ errors }}
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <!-- 步驟 6：套用 v-field(記得包起來) 及 error-message -->
                <!-- is-invalid BS樣式 如果errors['email'] true 顯示紅色-->
                <!-- rules此處不用v-bind 因 使用套件方法 -->
                <!-- 表單驗證沒有過關 無法送出表單 -->
                <!-- v-model="user.name" 送出表單時，可以抓到值 -->
                <Field
                rules="email|required"
                :class="{'is-invalid': errors['信箱'] }"
                v-model="user.email"
                id="email" name="信箱" type="email" class="form-control" placeholder="請輸入 Email" >
              </Field>
                <error-message name="信箱" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label">姓名</label>
                <!-- 表單驗證沒有過關 無法送出表單 -->
                <!-- v-model="user.name" 送出表單時，可以抓到值 -->
                <Field
                rules="required"
                :class="{'is-invalid': errors['姓名'] }"
                v-model="user.name"
                id="name" name="姓名" type="text" class="form-control" placeholder="請輸入姓名" >
              </Field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">電話</label>
                 <!-- rules 需 v-bind 因 使用套件元件內方法 -->
                <Field
                :rules="isPhone"
                id="phone" name="電話" type="text" class="form-control" placeholder="請輸入電話" >
              </Field>
                <span class="invalid-feedback"></span>
              </div>

              <div class="mb-3">
                <label for="region" class="form-label">地區</label>
                <select id="region" name="地區" class="form-control">
                  <option value="">請選擇地區</option>
                  <option value="台北市">台北市</option>
                  <option value="高雄市">高雄市</option>
                </select>
                <span class="invalid-feedback"></span>
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">地址</label>
                <input id="address" name="地址" type="text" class="form-control" placeholder="請輸入地址" />
                <span class="invalid-feedback"></span>
              </div>

              <button class="btn btn-primary" type="submit">Submit</button>
            </Form>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

// export default 就是Home.vue本身的跟元素
export default {
  name: 'Home',
  components: {
    // 子元素
    HelloWorld
  },
  // 呈現資料
  data () {
    return {
      user: {}
    }
  },
  // 送出表單，驗證用
  methods: {
    onSubmit () {
      console.log(this.user)
    }
  },
  // 驗證用
  created () {
    console.log(this)
  }
}
</script>
