<template>
  <div class="container-fluid">
    <div class="row p-5">
      <div class="col-12 cover-img">
        <img class="w-100 h-100 gray" src="image/kameInfo/09_osho12.jpg" />
        <div class="img-overlay">
          <p class="text-white font-weight-bold headline">
            かめさんってどんなイベント
          </p>
          <p class="text-white content">
            内容を何か説明する。内容を何か説明する。内容を何か説明する。<br>
            内容を何か説明する。内容を何か説明する。内容を何か説明する。<br>
            内容を何か説明する。内容を何か説明する。内容を何か説明する。<br>
            内容を何か説明する。内容を何か説明する。内容を何か説明する。<br>
          </p>
          <a class="btn btn-outline-light" role="button" href="">続きを読む ▶</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .img-overlay {
    position: absolute;
    top: 25%;
    left: 15%;
  }
  .headline {
    font-size: 2.5vw;
  }
  .content {
    font-size: 1.7vw;
  }
  .gray {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
  }
</style>
