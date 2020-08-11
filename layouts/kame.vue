<template>
  <div>
    <KameHedder />
    <Nuxt />
    <KameFooter />
  </div>
</template>

<script>
import KameHedder from '~/components/KameHedder'
import KameFooter from '~/components/KameFooter'
export default {
  components: {
    KameHedder,
    KameFooter,
  }
}
</script>

<style>
</style>
