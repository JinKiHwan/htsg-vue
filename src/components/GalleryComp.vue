<template>
  <section class="gallery" id="gallery">
    <div class="gallery__inner">
      <div class="gallery__wrap">
        <div class="gallery__tit">
          <h2>
            <img
              src="@/assets/img/gallery/mo/gallery-tit.png"
              alt="현타삼국 갤러리" />
          </h2>
        </div>

        <div class="gallery__swiper swiper">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-img01.webp"
                alt="현타삼국지" />
            </li>
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-img02.webp"
                alt="현타삼국지" />
            </li>
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-img03.webp"
                alt="현타삼국지" />
            </li>
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-img04.webp"
                alt="현타삼국지" />
            </li>
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-img05.webp"
                alt="현타삼국지" />
            </li>
          </ul>
        </div>

        <div class="gallery__thumSwiper swiper">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-thum-img01.webp"
                alt="현타삼국지" />
            </li>
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-thum-img02.webp"
                alt="현타삼국지" />
            </li>
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-thum-img03.webp"
                alt="현타삼국지" />
            </li>
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-thum-img04.webp"
                alt="현타삼국지" />
            </li>
            <li class="swiper-slide">
              <img
                src="@/assets/img/gallery/gallery-thum-img05.webp"
                alt="현타삼국지" />
            </li>
          </ul>
        </div>
        <div class="gallery__pagi"></div>
      </div>

      <div class="gallery__sw-next gallery-nav">
        <img
          src="@/assets/img/gallery/gallery-next.png"
          alt="갤러리 스와이프 다음버튼" />
      </div>
      <div class="gallery__sw-prev gallery-nav">
        <img
          src="@/assets/img/gallery/gallery-prev.png"
          alt="갤러리 스와이프 이전버튼" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryComp',
};
</script>

<style lang="scss" scoped>
.gallery {
  background: url('#{$path-image}/gallery/gallery-bg.webp') no-repeat center;
  background-size: 100% 100%;
  box-sizing: border-box;

  @include mobile {
    background-image: url('#{$path-image}/gallery/mo/gallery-bg.png');
    background-position: top center;
  }

  &__tit {
    display: none;

    h2 {
      display: inline-block;
      margin-bottom: remSet(40px);
      img {
        margin: 0 auto;
      }
    }

    @include mobile {
      display: block;
    }

    @include mobile-mini {
      width: 40%;
      margin: 0 auto;
    }
  }

  &__inner {
    height: 100%;
    width: 100%;
    max-width: remSet(1280px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;

    @include mobile {
      justify-content: flex-start;
      padding-bottom: remSet(50px);
    }
  }

  &__wrap {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    overflow-x: hidden;

    @include mobile {
      justify-content: center;
    }
  }

  &__swiper {
    width: 100%;
    perspective: 1200px;
    position: relative;
    z-index: 1;

    @include mobile {
      width: 80% !important;
      overflow-x: hidden;
      margin-bottom: 10px;
    }

    .swiper-wrapper {
      transform-style: preserve-3d;
    }

    .swiper-slide {
      width: remSet(880px);
      transition: all 0.3s;
      transform-style: preserve-3d;
      background: #000;
      box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: 0.8);
      opacity: 0;

      pointer-events: none;

      @include mobile {
        pointer-events: auto;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
        transition: opacity 0.3s;
      }

      &.swiper-slide-active {
        z-index: 3;
        transform: scale(1.2);
        opacity: 1;

        @include mobile {
          transform: scale(1);
        }

        img {
          opacity: 1;
        }
      }

      &.swiper-slide-prev,
      &.swiper-slide-next {
        opacity: 1;
      }
    }
  }

  &__thumSwiper {
    display: none;
    @include mobile {
      display: block;
      width: 80% !important;
      overflow: hidden;
    }

    .swiper-slide {
      width: 25%;
      aspect-ratio: 180/100;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &__pagi {
    display: flex;
    margin-top: remSet(100px);

    @include mobile {
      margin-top: remSet(50px);
    }

    span {
      width: remSet(18px);
      height: remSet(18px);
      border: 1px solid #fff;
      display: block;
      margin: 0 remSet(10px);
      transform: rotate(45deg);
      cursor: pointer;

      &.swiper-pagination-bullet-active {
        background: #fff;
      }
    }
  }

  &__sw-next {
    position: absolute;
    z-index: 5;
    right: remSet(-50px);
    top: calc(50% - remSet(55px));
    transform: translateY(-50%);
    cursor: pointer;

    @include mobile {
      right: remSet(10px);
      top: calc(50%);
      transform: translateY(-50%);
    }
  }
  &__sw-prev {
    position: absolute;
    z-index: 5;
    left: remSet(-50px);
    top: calc(50% - remSet(55px));
    transform: translateY(-50%);
    cursor: pointer;

    @include mobile {
      left: remSet(10px);
      top: calc(50%);
      transform: translateY(-50%);
    }
  }

  &-nav {
    @include mobile {
      height: remSet(100px);
      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .swiper-button-disabled {
    opacity: 0.5;
  }
}
</style>
