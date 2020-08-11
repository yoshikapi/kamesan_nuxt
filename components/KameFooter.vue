<template>
  <footer class="container-fluid">
    <div class="row pt-4">
      <div class="col-lg-8 col-9 offset-lg-1">
        <div class="row no-gutters">
          <div class="col-lg-3 col-3">
            <a class="text-center" href="#">
              <p class="borderRight">ホーム</p>
            </a>
          </div>
          <div class="col-lg-3 col-3">
            <a class="text-center" href="#KameInfo2">
              <p class="borderRight">かめさんとは</p>
            </a>
          </div>
          <div class="col-lg-3 col-3">
            <a class="text-center" href="#KamePicBookInfo">
              <p class="borderRight">写真集</p>
            </a>
          </div>
          <div class="col-lg-3 col-3">
            <a class="text-center" href="#KameEventInfo">
              <p>参加する</p>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-11 offset-1">
            <a href="https://www.hidenori-nonaka.com/" target=”_blank”>
              <p>運営：HIDENORI NONAKA</p>
            </a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row sns pt-lg-3 pt-1 h-75">
          <div class="col-6">
            <a href="https://www.facebook.com/club.camesan/" target=”_blank>
              <img class="card-img h-50 w-100" src="~/assets/image/icon/FBアイコン32px.svg">
            </a>
          </div>
          <div class="col-6">
            <a href="https://forms.gle/uMCr1EL7Z2fKjU2aA" target=”_blank>
              <img class="card-img h-50 w-100" src="~/assets/image/icon/メールアイコン32px.svg">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}

</script>

<style scoped lang="scss">
  footer {
    background-color: #c0c0c0;
  }
  a {
    &:link {
      color:#ffffff;
      text-decoration:none;
    }
    &:visited {
      color:#ffffff;
      text-decoration:none;
    }
    &:hover {
      color:#ffffff;
      text-decoration:none;
    }
    &:active {
      color:#ffffff;
      text-decoration:none;
    }
  }
  p {
    font-size: 2.0vw;
  }
  .borderRight {
    border-right: solid 2px #ffffff;
  }
  .sns {
    background-color: #000000;
    padding: 0px;
    margin: 0px;
  }
</style>
