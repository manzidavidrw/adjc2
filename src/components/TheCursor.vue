<template>
  <div class="cursor" ref="dot"></div>
  <div class="cursor-ring" ref="ring"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const dot  = ref(null)
const ring = ref(null)

function move(e) {
  if (dot.value)  { dot.value.style.left  = e.clientX - 6  + 'px'; dot.value.style.top  = e.clientY - 6  + 'px' }
  if (ring.value) { ring.value.style.left = e.clientX - 20 + 'px'; ring.value.style.top = e.clientY - 20 + 'px' }
}
onMounted(()  => document.addEventListener('mousemove', move))
onUnmounted(() => document.removeEventListener('mousemove', move))
</script>
