<template>
  <footer class="footer">
    <div class="footer__inner">
      <h2>
        <img src="@/assets/img/footer/footer_logo.png" alt="interactive 로고" />
      </h2>

      <div class="footer__cont">
        <ul class="footer__link">
          <li>
            <a href="https://shinac.com/service/" target="_blank">이용약관</a>
          </li>
          <li>
            <a href="https://shinac.com/privacy/" target="_blank"
              >개인정보 취급방침</a
            >
          </li>
        </ul>
        <p>Copyright 2023. SH INTERACTIVE All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: remSet(90px);
  background-color: rgba($color: #0d0e10, $alpha: 0.7);
  z-index: 1;
  backdrop-filter: blur(30px);
  font-family: 'Noto Sans KR', sans-serif;

  @include mobile {
    background: url('#{$path-image}/footer/mo/footer-bg.png') no-repeat bottom
      center;
    background-size: 100% 100%;
  }

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #5c6471;
    font-size: remSet(14px);

    h2 {
      position: absolute;
      left: remSet(35px);
      top: 50%;
      z-index: 1;
      transform: translateY(-50%);

      @include mobile {
        width: remSet(110px);
      }
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: remSet(8px);

    @include mobile {
      margin-bottom: remSet(15px);
    }

    li {
      padding: 0 remSet(5px);
      position: relative;
      @include mobile {
        font-size: remSet(18px);
        line-height: 1.5;
      }

      &::after {
        content: '';
        width: 1px;
        height: 9px;
        display: block;
        background-color: #5c6471;
        position: absolute;
        right: 0;
        top: remSet(2px);

        @include mobile {
          top: remSet(5px);
          height: 8px;
        }
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>
