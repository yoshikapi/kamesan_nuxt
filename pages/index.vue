<template>
  <div>
    <!-- <p v-html="data" /> -->
    <KameSlide />
    <KameInfo1 />
    <KameInfo2 />
    <KamePicBookInfo />
    <KameEventInfo />
  </div>
</template>

<script>
//import axios from 'axios'
import KameSlide from '~/components/KameSlide'
import KameInfo1 from '~/components/KameInfo1'
import KameInfo2 from '~/components/KameInfo2'
import KamePicBookInfo from '~/components/KamePicBookInfo'
import KameEventInfo from '~/components/KameEventInfo'

export default {
  layout: 'kame',
  components: {
    KameSlide,
    KameInfo1,
    KameInfo2,
    KamePicBookInfo,
    KameEventInfo,
  },
}
</script>

<style scoped lang="scss">
</style>
