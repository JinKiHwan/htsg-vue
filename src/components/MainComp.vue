<template>
  <section class="main" id="main">
    <div class="main__bg">
      <video
        src="@/assets/img/main/mainVideo.mp4"
        autoplay
        muted
        playsinline
        loop
        class="pc-show"
        v-if="isDesktop"></video>
      <video
        src="@/assets/img/main/mainVideo-m.mp4"
        autoplay
        muted
        playsinline
        loop
        class="mo-show"
        v-else></video>
    </div>
    <!-- 메인 로고 및 사전예약 버튼 -->
    <div class="main__inner">
      <div class="main__logo" id="mainLogo">
        <img src="@/assets/img/main/main-logo.png" alt="현타삼국" />
      </div>
      <ul class="main__store" id="mainBtn">
        <li>
          <a href="https://app.adjust.com/1784cnfn" target="_blank"
            ><img src="@/assets/img/main/store-google.png" alt="구글스토어"
          /></a>
        </li>
        <li>
          <a href="https://app.adjust.com/17t6jr6k" target="_blank"
            ><img src="@/assets/img/main/store-one.png" alt="원스토어"
          /></a>
        </li>
        <li>
          <a href="https://app.adjust.com/177qp7qm" target="_blank"
            ><img src="@/assets/img/main/store-galaxy.png" alt="갤럭시스토어"
          /></a>
        </li>
      </ul>
    </div>
    <!-- 스크롤 이미지 -->
    <div class="main__scroll">
      <img src="@/assets/img/main/scroll.png" alt="스크롤" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainComp',

  data() {
    return {
      isDesktop: window.innerWidth > 1024,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  /* background: url('#{$path-image}/main/main-bg.png') no-repeat center 100%;
  background-size: 120% 120%; */
  position: relative;

  &__bg {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    aspect-ratio: 1920/960;

    @include labtop {
      aspect-ratio: auto;
      width: 100%;
      height: 100%;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding-bottom: remSet(110px);
  }

  &__logo {
    margin-bottom: remSet(25px);
    opacity: 0;
    transform: scale(0.95);

    max-width: remSet(588px);
    width: 30%;

    @include mobile {
      width: 100%;
    }
  }

  &__btn {
    background: url('#{$path-image}/main/main-btn-bg.png') no-repeat
      center/cover;
    width: remSet(400px);
    height: remSet(100px);

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: rgba(#fff6c1, 1);
      font-size: remSet(28px);
      font-weight: 800;
      text-shadow: remSet(3px) remSet(2px) 0 rgba($color: #773f1d, $alpha: 1);
    }
  }

  &__store {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 remSet(10px);
    li {
      margin: 0 remSet(5px);
      max-width: calc(33.333333% - remSet(10px));

      img,
      a {
        width: 100%;
      }
    }
  }

  &__scroll {
    position: absolute;
    bottom: remSet(30px);
    left: 50%;
    transform: translateX(-50%);

    @include mobile {
      width: remSet(50px);
    }

    img {
      animation: scroll 1.2s infinite ease-in-out;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(remSet(10px));
  }
  100% {
    transform: translateY(0);
  }
}
</style>
