<template>
  <div class="header">
    <dl style="height: 54px;">
      <dt>
        <div class="header-logo-menu">
          <p>
            <NuxtLink id="zemtownMenu" to="/">
              <!-- <img v-if="showMobileLogo" class="mobile-logo" src="/images/zempie_logo_154_155.png" alt="zempie-logo"
                loading="lazy" height="25" width="120" /> -->
              <img class="logo" src="/images/zempie-logo-black.png" alt="zempie-logo" loading="lazy" width="120"
                height="25" />
            </NuxtLink>
          </p>
          <ul class="menu">
            <li class="uppercase">
              <NuxtLink id="zemtownMenu" to="/">
                Community
              </NuxtLink>
            </li>
            <li class="uppercase">
              <NuxtLink id="gameMenu" to="/">
                Games
              </NuxtLink>
            </li>
            <li class="uppercase pointer">
              <NuxtLink id="zemtownMenu" to="/">
                Zemtown
              </NuxtLink>
            </li>
          </ul>
        </div>
      </dt>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
.header {
  .header-info {
    display: flex;
    align-items: center;
  }

  .menu {
    list-style: none;
  }

  .btn-circle-none {
    padding-top: 5px;

    &.mobile {
      display: none !important;
    }
  }

}

.btn-circle-none .mobile {
  display: none !important;
}

.hl-select-box:deep(.el-input, .is-focus) {
  .el-input__wrapper {
    box-shadow: 0 0 0 1px #ededed inset !important;
  }
}

.hl-select-box:deep(.el-input__wrapper) {
  border-radius: 30px;
  height: 38px;
  width: 120px;

  .is-focus {
    box-shadow: 0 0 0 1px #ededed inset !important;
  }

  .el-input__inner {
    height: 38px;
    font-size: 13px;
    padding: 0px 2px;
    border: none;
    border-radius: 0%;
  }

  .el-input__inner:focus {
    box-shadow: none;
  }
}

.header-search-list {
  div {
    width: 100%;
  }

  .no-result {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;

    h2 {
      padding-bottom: 0px;
    }
  }
}

.header-search-list>div>li>div {
  padding: 8px 5px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.header-search-list>div>li>div dl {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-search-list>div>li>div dl dt {
  display: flex;
  align-items: center;
}

.header-search-list>div>li>div dl dt span {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 8px;
}

.header-search-list>div>li>div dl dt em {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 50%;
}

.header-search-list>div>li>div dl dd {
  font-size: 16px;
}

.btn-circle {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  border: none;
  border-radius: 50%;
  background: #fbf6f2;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

.new-dm-badge {
  font-size: 12px;
  padding: 0px 5px;
  color: white;
  width: auto;
  height: auto;
  z-index: 99;
  border-radius: 10px;
}

@media all and (max-width: 479px) {

  .mobile-logo {
    display: block !important;
    width: 32px;
    height: 32px;
  }

  .btn-circle-none {
    &.mobile {
      display: block;
    }
  }

  .header-language {
    display: none;
  }

  .header-login {
    display: block !important;

    i {
      display: none;
    }
  }

  .user-menu-btn {
    display: none;
  }
}

@media all and (min-width: 480px) and (max-width: 767px) {

  .mobile-logo {
    display: none;
  }

  .btn-circle-none {
    &.mobile {
      display: block;
    }
  }

  .header-language {
    display: none;
  }

  .header-login {
    display: block !important;

    i {
      display: none;
    }
  }

  .user-menu-btn {
    display: none;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .mobile-logo {
    display: none;
  }

  .header-language {
    display: none;
  }

  .header-login {
    display: block !important;

    i {
      display: none;
    }
  }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
  .header {
    dl {
      width: 100%;
    }

    .mobile-logo {
      display: none;
    }

    .header-login {
      display: block !important;

      i {
        display: none;
      }
    }
  }
}

@media all and (min-width: 1200px) {
  .mobile-logo {
    display: none;
  }

  .btn-circle-none {
    padding-top: 5px;

    &.mobile {
      display: none;
    }
  }
}
</style>
