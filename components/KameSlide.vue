<template>
  <div class="container-fluid">
    <div class="row">
      <hooper 
        :settings="hooperSettings" 
        class="h-100"
      >
        <slide v-for="(slide, idx) in slides" :key="idx" :index="idx">
          <img class="w-100" :src=(slide) />
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide ,Pagination as HooperPagination} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        // 無限スクロール
        infiniteScroll: true,
        // 自動スクロール
        progress: true,
        autoPlay: true,
        playSpeed: 3000
      },
      slides: [],
    }
  },
  mounted() {
    this.createSlide()
  },
  methods: {
    createSlide : function () {
      this.slides.push('image/slides/top00.png')
      this.slides.push('image/slides/top01.png')
      this.slides.push('image/slides/top02.png')
      this.slides.push('image/slides/top03.png')
      this.slides.push('image/slides/top04.png')
      this.slides.push('image/slides/top05.png')
      this.slides.push('image/slides/top06.png')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
