<template>
  <header class="container-fluid mt-lg-4 mt-2">
    <!-- ロゴ表示領域 SP版ではハンバーガーメニューを表示-->
    <div class="row">
      <!-- かめさんロゴ -->
      <div class="col-lg-5 col-5 w-100 text-center">
        <a href="#KameInfo2">
          <img class="h-75" src="~/assets/image/Kamesan_logo(rgb)-02-2.svg">
        </a>
      </div>
      <div class="col-lg-2 col-3 d-flex align-items-center">
        <a class="text-center w-100" href="#KameInfo2">
          <p class="borderRight">かめさんとは</p>
        </a>
      </div>
      <div class="col-lg-2 col-2 d-flex align-items-center">
        <a class="text-center w-100" href="#KamePicBookInfo">
          <p class="text-center borderRight">
            写真集
          </p>
        </a>
      </div>
      <div class="col-lg-2 col-2 d-flex align-items-center">
        <a class="text-center w-100" href="#KameEventInfo">
          <p class="text-center">
            参加する
          </p>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}

</script>

<style scoped lang="scss">
  a {
    &:link {
      color:#000000;
      text-decoration:none;
    }
    &:visited {
      color:#000000;
      text-decoration:none;
    }
    &:hover {
      color:#000000;
      text-decoration:none;
    }
    &:active {
      color:#000000;
      text-decoration:none;
    }
  }
  .borderRight {
    border-right: solid 2px #000000;
  }
  p {
    font-size: 1.7vw;
  }
</style>
