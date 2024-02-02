<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__logo">
        <a href="/">
          <img src="@/assets/img/header/logo.png" alt="현타삼국" />
        </a>
      </h1>

      <ul class="header__gnb" id="gnb">
        <li><a href="#main" class="on">메인</a></li>
        <li><a href="#character">게임소개</a></li>
        <li><a href="#gallery">갤러리</a></li>
      </ul>

      <ul class="header__sns">
        <li>
          <a
            href="https://game.naver.com/lounge/hyuntasamguk/home"
            target="_blank"
            ><img
              src="@/assets/img/header/sns-cafe.png"
              alt="현타삼국 네이버 라운지"
          /></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/people/%ED%98%84%ED%83%80%EC%82%BC%EA%B5%AD/61552849521159/"
            target="_blank"
            ><img
              src="@/assets/img/header/sns-facebook.png"
              alt="현타삼국 페이스북"
          /></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerComp',
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: remSet(90px);
  background: linear-gradient(
    0deg,
    rgba(9, 27, 51, 0.9) 0%,
    rgba(52, 69, 94, 0.9) 70%
  );
  position: fixed;
  z-index: $z-header;
  left: 0;
  top: 0;

  &__inner {
    width: 100%;
    height: 100%;
    padding: 0 remSet(35px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 280px) {
      padding: 0 remSet(15px);
    }
  }

  &__logo {
    @include mobile {
      width: remSet(50px);
    }
  }

  &__gnb {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: remSet(700px);

    @include labtop {
      width: auto;
    }

    li {
      width: 33.3333%;
      padding: 0 remSet(70px);
      color: #fff;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      @include mobile {
        padding: 0 remSet(35px);
      }
      @media (max-width: 280px) {
        padding: 0;
        &:nth-child(2) {
          padding: 0 remSet(45px);
        }
      }

      a {
        font-size: remSet(22px);
        transition: all 0.3s;
        background: linear-gradient(
          0deg,
          rgba(173, 190, 205, 1) 0%,
          rgba(209, 225, 236, 1) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1.5;

        &.on {
          font-size: remSet(24px) !important;
          background: linear-gradient(
            338deg,
            rgba(188, 149, 70, 1) 0%,
            rgba(245, 214, 108, 1) 60%
          ) !important ;
          background-clip: text !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }

        &:hover {
          font-size: remSet(24px);
          background: linear-gradient(
            338deg,
            rgba(188, 149, 70, 1) 0%,
            rgba(245, 214, 108, 1) 60%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          @include mobile {
            font-size: remSet(22px);
            background: linear-gradient(
              0deg,
              rgba(173, 190, 205, 1) 0%,
              rgba(209, 225, 236, 1) 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      &::after {
        content: '';
        display: block;
        width: remSet(8px);
        height: remSet(8px);
        border: 1px solid #fff;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        opacity: 0.5;

        @media (max-width: 280px) {
          display: none;
        }
      }

      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }

  &__sns {
    display: flex;

    li {
      margin-left: remSet(20px);

      @include mobile {
        width: remSet(45px);
        margin-left: remSet(10px);
      }
    }
  }
}
</style>
