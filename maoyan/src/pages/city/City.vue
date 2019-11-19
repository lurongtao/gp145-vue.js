<template>
  <section id="city-list" class="city-list-container" style="display: block;">
    <section>
      <div id="locate" class="city-title">定位城市</div>
      <div class="city-list city-list-inline clearfix">
        <div class="location-city">定位失败，请点击重试</div>
      </div>
    </section>

    <section class="history-city-list">
      <div id="history" class="city-title">最近访问城市</div>
      <div class="city-list city-list-inline clearfix">
        <div class="city-item" data-nm="深圳" data-id="30">深圳</div>

        <div class="city-item" data-nm="北京" data-id="1">北京</div>

        <div class="city-item" data-nm="桂林" data-id="93">桂林</div>
      </div>
    </section>

    <section>
      <div id="hot" class="city-title">热门城市</div>
      <div class="city-list city-list-inline clearfix">
        <div class="city-item" data-nm="上海" data-id="10">上海</div>

        <div class="city-item" data-nm="北京" data-id="1">北京</div>

        <div class="city-item" data-nm="广州" data-id="20">广州</div>

        <div class="city-item" data-nm="深圳" data-id="30">深圳</div>

        <div class="city-item" data-nm="武汉" data-id="57">武汉</div>

        <div class="city-item" data-nm="天津" data-id="40">天津</div>

        <div class="city-item" data-nm="西安" data-id="42">西安</div>

        <div class="city-item" data-nm="南京" data-id="55">南京</div>

        <div class="city-item" data-nm="杭州" data-id="50">杭州</div>

        <div class="city-item" data-nm="成都" data-id="59">成都</div>

        <div class="city-item" data-nm="重庆" data-id="45">重庆</div>
      </div>
    </section>

    <section>
      <div id="A" class="city-title city-title-letter">A</div>
      <div class="city-list city-list-block clearfix">
        <div class="city-item" data-nm="阿拉善盟" data-id="150">阿拉善盟</div>

        <div class="city-item" data-nm="鞍山" data-id="151">鞍山</div>
      </div>
    </section>

    <section class="nav">
      <div class="nav-item" data-id="locate">定位</div>

      <div class="nav-item" data-id="history">最近</div>

      <div class="nav-item" data-id="hot">热门</div>

      <div class="nav-letter nav-item" data-id="A">A</div>

      <div class="nav-letter nav-item" data-id="B">B</div>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped></style>