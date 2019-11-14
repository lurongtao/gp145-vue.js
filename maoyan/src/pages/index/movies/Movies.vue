<template>
  <div class="movie-wrap">
    <header>猫眼电影</header>
    <Ad></Ad>
    <nav>
      <div>
        <span>北京</span>
        <i class="yo-ico">&#xf033;</i>
      </div>
      <div>
        <ul>
          <router-link tag="li" to="/index/movies/intheaters" active-class="active">正在热映</router-link>
          <router-link tag="li" :to="{path: '/index/movies/comingsoon'}" active-class="active">即将上映</router-link>
        </ul>
      </div>
      <div>
        <i class="yo-ico">&#xf067;</i>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MovieList from 'components/movielist/MovieList'
import Ad from './Ad'
export default {
  components: {
    MovieList,
    Ad
  }
}
</script>

<style lang='stylus' scoped>
@import '~assets/stylus/border.styl';

.movie-wrap {
  display: flex;
  flex-direction: column;

  header {
    height: 0.44rem;
    background: #e54847;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.18rem;
    color: #fff;
  }

  nav {
    height: 0.44rem;
    $border(0 0 1px 0);
    display: flex;

    >div:first-child {
      flex: 80;
      padding-left: 0.16rem;
      font-size: 0.16rem;
      line-height: 0.44rem;
      display: flex;
      align-items: center;
      color: #666;
    }

    >div:nth-child(2) {
      flex: 215;

      ul {
        width: 100%;
        height: 100%;
        display: flex;

        li {
          flex: 1;
          text-align: center;
          line-height: 0.44rem;
          color: #666;
          font-weight: 700;
          margin: 0 0.05rem;

          &.active {
            border-bottom: solid 0.02rem #e54847;
            color: #e54847;
          }
        }
      }
    }

    >div:last-child {
      flex: 80;
      padding-right: 0.16rem;
      line-height: 0.44rem;
      font-size: 0.18rem;
      text-align: right;
      color: #e54847;
    }
  }
}
</style>