<template>
  <div>{{ count }}</div>
  <TButton @click="handleIncrease">+</TButton>
  <div v-for="item in list" :key="item.id">{{ item.firstname }} {{ item.lastname }}</div>

  <img width="100" src="https://sponsors.vuejs.org/images/notfound.png" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

type Item = {
  id: number
  firstname: string
  lastname: string
}

const count = ref(0)
const list = ref<Item[]>([])

onMounted(async () => {
  for (let i = 0; i < 10; i++) {}
  count.value += 1
  const result = await fetch('https://fakerapi.it/api/v1/persons?_quantity=2', {
    method: 'get'
  }).then((r) => r.json())
  list.value = result.data
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
