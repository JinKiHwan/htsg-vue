<template>
  <section class="character" id="character">
    <div class="character__inner">
      <Transition name="charSwiper">
        <div class="character__swiper" v-if="swiperOn == true">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(a, i) in charInfo" :key="i">
              <Transition v-if="slideIndex == i" name="hero">
                <div class="character__slide-wrap">
                  <div :class="`character__bg ${charInfo[i].charName}`">
                    <video
                      :src="
                        require(`@/assets/img/character/${charInfo[i].charName}/pc-bg.mp4`)
                      "
                      muted
                      playsinline
                      loop
                      autoplay></video>
                  </div>
                  <div class="character__info">
                    <div class="character__wrap">
                      <dl>
                        <dt class="character__name">
                          <img
                            :src="
                              require(`@/assets/img/character/${charInfo[i].charName}/name.png`)
                            "
                            :alt="`${charInfo[i].koName}`" />
                        </dt>
                        <dd class="character__story">
                          {{ charInfo[i].story }}
                        </dd>
                      </dl>
                      <div class="character__skill">
                        <span
                          :class="`character__skill-txt ${charInfo[i].charName}`"
                          >캐릭터 스킬</span
                        >

                        <ul class="character__skill-list">
                          <li>
                            <figure>
                              <img
                                :src="
                                  require(`@/assets/img/character/${charInfo[i].charName}/skill_01.png`)
                                "
                                alt="스킬 1" />
                              <figcaption>
                                {{ charInfo[i].skil1 }}
                              </figcaption>
                            </figure>
                          </li>
                          <li>
                            <figure>
                              <img
                                :src="
                                  require(`@/assets/img/character/${charInfo[i].charName}/skill_02.png`)
                                "
                                alt="스킬 2" />
                              <figcaption>
                                {{ charInfo[i].skil2 }}
                              </figcaption>
                            </figure>
                          </li>
                          <li>
                            <figure>
                              <img
                                :src="
                                  require(`@/assets/img/character/${charInfo[i].charName}/skill_03.png`)
                                "
                                alt="스킬 3" />
                              <figcaption>{{ charInfo[i].skil3 }}</figcaption>
                            </figure>
                          </li>
                          <li>
                            <figure>
                              <img
                                :src="
                                  require(`@/assets/img/character/${charInfo[i].charName}/skill_04.png`)
                                "
                                alt="스킬 4" />
                              <figcaption>
                                {{ charInfo[i].skil4 }}
                              </figcaption>
                            </figure>
                          </li>
                        </ul>
                      </div>

                      <div class="character__videoBtn">
                        <a href="https://youtu.be/qG64QXHB12U" target="_blank">
                          <img
                            src="@/assets/img/character/character-viewBtn.png"
                            alt="캐릭터 영상보기"
                            class="pcBtn" />
                          <img
                            src="@/assets/img/character/mo/character-viewBtn.png"
                            alt="캐릭터 영상보기"
                            class="mobileBtn" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </li>
          </ul>

          <a
            href="javascript:void(0)"
            class="character__close"
            @click="swiperOn = false">
            <picture>
              <source
                srcset="@/assets/img/character/mo/char-close.png"
                media="(max-width:1024px)" />
              <source srcset="@/assets/img/character/char-close.png" />
              <img
                src="@/assets/img/character/char-close.png"
                alt="캐릭터 스와이퍼 닫기" />
            </picture>
          </a>

          <div class="character__swiper-btn">
            <a
              href="javascript:void(0)"
              class="character__next"
              @click="nextSlide">
              <img src="@/assets/img/character/char-next.png" alt="" />
            </a>
            <a
              href="javascript:void(0)"
              class="character__prev"
              @click="prevSlide">
              <img src="@/assets/img/character/char-prev.png" alt="" />
            </a>
          </div>
        </div>
      </Transition>
      <div class="character__tit">
        <h2>
          <picture>
            <source
              srcset="@/assets/img/character/mo/char-tit.png"
              media="(max-width:1024px)" />
            <source srcset="@/assets/img/character/char-tit.png" />
            <img
              src="@/assets/img/character/char-tit.png"
              alt="흔하디 흔한 삼국지는 가라!" />
          </picture>
        </h2>
        <p>
          실존하는 삼국지 게임 중 가장
          <br />
          기상천외한 삼국지가 찾아온다!
        </p>
      </div>

      <ul class="character__list" id="charTab">
        <li
          class="swiper-pagination-bullet"
          v-for="(a, i) in charInfo"
          :key="i">
          <a href="javascript:void(0)">
            <div
              class="character__label"
              @click="
                swiperOn = true;
                slideIndex = i;
              ">
              <i class="char-ico"></i>
              <span class="char-name">{{ charInfo[i].koName }}</span>
            </div>
          </a>
          <figure>
            <picture>
              <source
                :srcset="
                  require(`@/assets/img/character/mo/${charInfo[i].charName}.png`)
                "
                media="(max-width:1024px)" />
              <source
                :srcset="
                  require(`@/assets/img/character/${charInfo[i].charName}.png`)
                " />
              <img
                :src="
                  require(`@/assets/img/character/${charInfo[i].charName}.png`)
                "
                :alt="`${charInfo[i].charName}`" />
            </picture>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import charInfo from '../js/charData';

export default {
  name: 'CharacterComp',

  data() {
    return {
      charInfo: charInfo,
      slideIndex: 7,
      swiperOn: false,
    };
  },

  methods: {
    nextSlide() {
      if (this.slideIndex < 6) {
        this.slideIndex++;
      }
    },
    prevSlide() {
      if (this.slideIndex > 0) {
        this.slideIndex--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-enter-active,
.hero-leave-active {
  transition: opacity 0.5s ease;
}
.hero-enter-from,
.hero.leave-to {
  opacity: 0;
}

.charSwiper-enter-active,
.charSwiper-leave-active {
  transition: opacity 0.5s;
}
.charSwiper-enter,
.charSwiper-leave-to {
  opacity: 0;
}
.character {
  background: url('#{$path-image}/character/character-bg.webp') no-repeat
    center/cover;
  position: relative;
  padding-top: remSet(130px);
  padding-bottom: remSet(100px);
  aspect-ratio: auto;
  height: 120vh;

  @include labtop {
    aspect-ratio: auto;
    padding-top: remSet(50px);
  }

  @include mobile {
    padding-top: remSet(130px);
    padding-bottom: remSet(150px);
    background-image: url('#{$path-image}/character/mo/character-bg.png');
  }

  @media (max-width: 280px) {
    //aspect-ratio: 715/1700;
    padding-top: remSet(90px);
  }

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include mobile {
      justify-content: flex-start;
    }
  }

  &__tit {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include mobile {
      margin-bottom: 0;
    }

    @include mobile-mini {
      margin-bottom: remSet(30px);
    }

    h2 {
      display: inline-block;
      margin-bottom: remSet(20px);

      @include mobile {
        width: 61%;
      }

      img {
        margin: 0 auto;
      }
    }

    p {
      font-size: remSet(32px);
      color: #cec0eb;
      line-height: 1.4;
      position: relative;
      padding: remSet(15px) remSet(60px) remSet(30px);
      text-align: center;

      @include mobile {
        /* font-size: remSet(38px); */
        font-weight: 800;
        letter-spacing: 1px;
        padding: remSet(20px) remSet(70px) remSet(70px);
      }

      @media (max-width: 280px) {
        font-size: remSet(28px);
      }

      &::before {
        content: '';
        display: block;
        width: remSet(80px);
        height: remSet(130px);
        background: url('#{$path-image}/character/char-txt-decoL.png') no-repeat
          center / contain;
        position: absolute;
        left: 0;
        top: 0;

        @include mobile {
          background-image: url('#{$path-image}/character/mo/char-txt-decoL.png');
        }
      }
      &::after {
        content: '';
        display: block;
        width: remSet(80px);
        height: remSet(130px);
        background: url('#{$path-image}/character/char-txt-decoR.png') no-repeat
          center / contain;
        position: absolute;
        right: 0;
        top: 0;
        @include mobile {
          background-image: url('#{$path-image}/character/mo/char-txt-decoR.png');
        }
      }
    }
  }

  &__list {
    width: 80%;
    max-width: remSet(1650px);
    height: calc(100% - remSet(370px));
    max-height: remSet(730px);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @include mobile {
      margin: auto;
      width: 95%;
    }

    @include mobile-mini {
      justify-content: space-around;
      width: 90%;
    }

    li {
      width: 22%;
      position: relative;
      z-index: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 remSet(10px);

      &.diaochan {
        img {
          max-width: remSet(580px);
        }
      }

      &.lvbu {
        img {
          max-width: remSet(580px);
        }
      }

      &.zhugeliang {
        img {
          max-width: remSet(580px);
        }
      }

      &.liubei {
        img {
          max-width: remSet(580px);
        }
      }

      &.zhangfei {
        img {
          max-width: remSet(5500px);
        }
      }

      &.guanyu {
        img {
          max-width: remSet(580px);
        }
      }

      &.zhaoyun {
        img {
          max-width: remSet(620px);
        }
      }

      @include mobile {
        width: 33%;
        margin: 0;
        margin-top: remSet(30px);

        &.diaochan {
          order: 0;
          width: 40%;
        }

        &.lvbu {
          order: 1;
          width: 40%;
        }

        &.zhugeliang {
          order: 2;
        }

        &.liubei {
          order: 3;
        }

        &.zhangfei {
          order: 4;
        }

        &.guanyu {
          order: 5;
          width: 40%;
        }

        &.zhaoyun {
          order: 6;
          width: 40%;
        }
      }

      @include mobile-mini {
        &.diaochan {
          img {
            max-width: remSet(480px);
          }
        }

        &.lvbu {
          img {
            max-width: remSet(450px);
          }
        }

        &.zhugeliang {
          img {
            max-width: remSet(400px);
          }
        }

        &.liubei {
          img {
            max-width: remSet(400px);
          }
        }

        &.zhangfei {
          img {
            max-width: remSet(330px);
          }
        }

        &.guanyu {
          img {
            max-width: remSet(400px);
          }
        }

        &.zhaoyun {
          img {
            max-width: remSet(450px);
          }
        }
      }
      @media (max-width: 280px) {
        &.diaochan {
          img {
            max-width: remSet(350px);
          }
        }

        &.lvbu {
          img {
            max-width: remSet(350px);
          }
        }

        &.zhugeliang {
          img {
            max-width: remSet(350px);
          }
        }

        &.liubei {
          img {
            max-width: remSet(330px);
          }
        }

        &.zhangfei {
          img {
            max-width: remSet(260px);
          }
        }

        &.guanyu {
          img {
            max-width: remSet(350px);
          }
        }

        &.zhaoyun {
          img {
            max-width: remSet(380px);
          }
        }
      }

      figure {
        position: absolute;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.5s;
        pointer-events: none;

        @include desktop {
          transform: translate(-50%, -50%) scale(0.75);
        }
        @include mobile {
          transform: translate(-50%, -50%) scale(1);
        }
        img {
          max-width: fit-content;
          transform: scale(0.95);

          @include mobile {
            transform: scale(1);
          }
        }
      }

      a {
        display: block;
        width: remSet(220px);
        height: remSet(180px);
        position: relative;
        pointer-events: none;
      }

      &.hover {
        z-index: 1;
        figure {
          transform: translate(-50%, -50%) scale(1.1, 1.1);

          @include desktop {
            transform: translate(-50%, -50%) scale(0.95, 0.95);
          }

          @include mobile {
            transform: translate(-50%, -50%) scale(1.1, 1.1);
          }

          img {
            animation: charfloating infinite 5s ease-in-out;
          }
        }
      }
    }
  }

  &__label {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    pointer-events: auto;

    i {
      width: remSet(60px);
      height: remSet(65px);
      display: block;
      background: url('#{$path-image}/character/char-ico.png') no-repeat center
        center;
      position: relative;
      z-index: 1;
      transition: background 0.3s;

      @include mobile {
        width: remSet(70px);
        height: remSet(75px);
        background-size: contain;
      }

      @include mobile-mini {
        background-image: url('#{$path-image}/character/mo/char-ico-hover.png') !important;
      }
    }

    span {
      font-size: remSet(18px);
      color: #d3b97d;
      background: url('#{$path-image}/character/char-name-bg.png') no-repeat
        center;
      background-size: 100% 100%;
      height: remSet(35px);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: remSet(3px) remSet(20px) 0;
      position: relative;
      z-index: 0;
      transform: translateX(remSet(-50px));
      opacity: 0;
      transition: transform 0.3s, opacity 0.3s;

      @include mobile-mini {
        transform: translateX(remSet(-10px));
        opacity: 1;
        display: none !important;
      }
    }

    &:hover {
      i {
        background-image: url('#{$path-image}/character/char-ico-hover.png');
      }
      span {
        transform: translateX(remSet(-10px));
        opacity: 1;
      }
    }

    &.diaochan {
      top: remSet(-80px);
      left: remSet(35px);
      @include mobile-mini {
        left: remSet(80px);
        top: remSet(80px);
      }
    }

    &.lvbu {
      @include mobile-mini {
        left: remSet(70px);
        top: remSet(70px);
      }
    }

    &.zhugeliang {
      top: remSet(100px);

      @include desktop {
        top: 0;
      }

      @include mobile-mini {
        left: remSet(100px);
        top: remSet(100px);
      }
    }

    &.zhaoyun {
      left: auto;
      right: remSet(-150px);

      @include mobile-mini {
        left: remSet(70px);
        top: auto;
        bottom: remSet(-20px);
      }
    }

    &.guanyu {
      top: auto;
      bottom: 0;

      @include mobile-mini {
        left: remSet(80px);
        bottom: remSet(-30px);
      }
    }

    &.liubei {
      top: 40%;
      left: auto;
      right: remSet(-150px);

      @include mobile-mini {
        top: remSet(140px);
        right: auto;
        left: remSet(50px);
      }
    }

    &.zhangfei {
      left: auto;
      right: remSet(-200px);

      @include mobile-mini {
        top: remSet(100px);
        left: remSet(50px);
        right: auto;
      }
    }
  }

  &__swiper {
    width: 100%;
    height: calc(100%);
    position: fixed;
    z-index: 9;
    left: 0;
    top: 0;
    opacity: 1;
    //pointer-events: none;
    transition: opacity 0.3s;

    @include mobile {
      z-index: 11;
    }

    /* &.show {
      opacity: 1;
      pointer-events: auto;
    } */
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 8;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 1;
  }

  &__slide-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    pointer-events: none;

    video {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      left: 0;
      top: 0;
      z-index: -1;
      pointer-events: none;

      &.pc-bg {
        @include mobile {
          display: none;
        }
      }

      &.mo-bg {
        display: none;
        @include mobile {
          display: block;
        }
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    max-width: remSet(1280px);
    margin: 0 auto;
    text-align: center;

    @include mobile {
      justify-content: flex-end;
      align-items: center;
    }
  }

  &__wrap {
    @include mobile {
      height: 55%;
      padding: 0 remSet(70px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 280px) {
      padding: 0 remSet(30px);
    }
  }

  &__name {
    margin-bottom: remSet(40px);

    @include mobile {
      height: remSet(80px);
      img {
        height: 100%;
      }
    }

    img {
      margin: 0 auto;
    }
  }

  &__story {
    color: #5a4c54;
    font-size: remSet(24px);
    line-height: 1.3;
    letter-spacing: -1px;
    margin-bottom: remSet(50px);
    white-space: pre-wrap;

    @include mobile {
      font-size: remSet(28px);
      letter-spacing: 0;
      line-height: 1.5;
      //white-space: nowrap;

      br {
        display: none;
      }
    }
  }

  &__skill {
    background: url('#{$path-image}/character/skill-bg.png') no-repeat center;
    background-size: 100% 100%;
    padding: remSet(45px) remSet(45px) remSet(25px);
    position: relative;
    max-width: remSet(560px);
    margin: 0 auto;

    @include mobile {
      max-width: 100%;
    }

    &-txt {
      position: absolute;
      left: 50%;
      top: remSet(-24px);
      transform: translateX(-50%);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center center;
      display: block;
      color: #fff;
      font-size: remSet(24px);
      width: remSet(220px);
      height: remSet(50px);
      display: flex;
      justify-content: center;
      align-items: center;

      &.diaochan {
        background-image: url('#{$path-image}/character/diaochan/skill-txt.png');
      }

      &.lvbu {
        background-image: url('#{$path-image}/character/lvbu/skill-txt.png');
      }

      &.zhugeliang {
        background-image: url('#{$path-image}/character/zhugeliang/skill-txt.png');
      }

      &.zhaoyun {
        background-image: url('#{$path-image}/character/zhaoyun/skill-txt.png');
      }

      &.guanyu {
        background-image: url('#{$path-image}/character/guanyu/skill-txt.png');
      }

      &.liubei {
        background-image: url('#{$path-image}/character/liubei/skill-txt.png');
      }

      &.zhangfei {
        background-image: url('#{$path-image}/character/zhangfei/skill-txt.png');
      }
    }

    &-list {
      display: flex;

      li {
        margin-left: remSet(30px);

        @include mobile {
          width: calc((100% / 4) - 10px);
        }

        &:first-child {
          margin-left: 0;
        }

        figcaption {
          margin-top: remSet(15px);
          font-size: remSet(18px);
          color: #5a4c54;
          font-weight: 600;
          line-height: 1.3;
          white-space: pre-line;

          @include mobile {
            font-size: remSet(22px);
            font-weight: 400;
          }

          @media (max-width: 280px) {
            white-space: nowrap;
          }
        }
      }
    }
  }

  &__videoBtn {
    text-align: center;

    @include mobile {
      position: absolute;
      z-index: 1;
      right: remSet(50px);
      top: remSet(150px);
      width: remSet(180px);
    }

    @media (max-width: 280px) {
      right: remSet(20px);
      width: remSet(150px);
    }

    a {
      margin-top: remSet(30px);
      display: inline-block;
    }

    img.pcBtn {
      display: block;
      @include mobile {
        display: none;
      }
    }
    img.mobileBtn {
      display: none;
      @include mobile {
        display: block;
      }
    }
  }

  &__close {
    position: absolute;
    right: remSet(50px);
    top: remSet(130px);
    z-index: 10;

    @include mobile {
      width: remSet(48px);
      height: remSet(48px);
      top: remSet(50px);
    }
  }

  &__next {
    position: absolute;
    right: remSet(100px);
    top: 50%;
    z-index: 9;
    img {
      height: 100%;
    }

    @include mobile {
      right: remSet(30px);
      height: remSet(80px);
      top: 47%;
    }

    @media (max-width: 280px) {
      right: remSet(15px);
    }
  }

  &__prev {
    position: absolute;
    left: remSet(100px);
    top: 50%;
    z-index: 9;

    img {
      height: 100%;
    }

    @include mobile {
      left: remSet(30px);
      height: remSet(80px);
      top: 47%;
    }

    @media (max-width: 280px) {
      left: remSet(15px);
    }
  }

  .swiper-button-disabled {
    opacity: 0.5;
  }
}

@keyframes charfloating {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(remSet(-7px));
  }
  50% {
    transform: translateY(remSet(7px));
  }
  75% {
    transform: translateY(remSet(-7px));
  }
  100% {
    transform: translateY(0);
  }
}
</style>
