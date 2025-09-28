import { ref, onMounted, onBeforeUnmount } from 'vue'

const isDragging = ref(false)

export default function useDragging() {
  onMounted(() => {
    window.addEventListener('pointerdown', () => { isDragging.value = true })
    window.addEventListener('pointerup', () => { isDragging.value = false })
  })
  onBeforeUnmount(() => {
    window.removeEventListener('pointerdown', () => { isDragging.value = true })
    window.removeEventListener('pointerup', () => { isDragging.value = false })
  })
  return { isDragging }
}
