<template>
  <div>{{ count }}</div>
  <TButton @click="handleIncrease">+</TButton>
  <TTable
    :data="list"
    :columns="columns"
    :loading="loading"
    rowKey="id"
    stripe
    bordered
    resizable
  />
  <TButton @click="getList">刷新</TButton>
  <img width="100" src="https://sponsors.vuejs.org/images/notfound.png" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

type Item = {
  id: number
  from: string
  from_who: string
  hitokoto: string
}

const count = ref(0)
const loading = ref(false)
const list = ref<Item[]>([])
const columns = ref([
  { title: '诗名', colKey: 'from' },
  { title: '作者', colKey: 'from_who' },
  { title: '诗句', colKey: 'hitokoto' }
])

const getList = async () => {
  const promiseList = []
  for (let i = 0; i < 5; i++) {
    promiseList.push(fetch('https://v1.hitokoto.cn?c=i').then((r) => r.json()))
  }
  loading.value = true
  const result = await Promise.all(promiseList)
  loading.value = false
  list.value = result
}

onMounted(async () => {
  count.value += 1
  getList()
})

const handleIncrease = () => {
  // b.trim()
  count.value += 1
  new Promise((resolve) => {
    this.aaa()
    resolve(1)
  })
}
</script>
