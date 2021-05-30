<style lang="scss" src="./hello-world.scss"></style>
<script lang="ts" src="./hello-world.ts"></script>
<template>
  <div class="[ hello-world ][ grid ]">
    <h1 class="[ text-center ]">Vue Starter Project</h1>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
      class="[ logo ][ mx-auto ]"
    />
    <div class="call-sign">
      <div class="powered-by">
        powered
        <br />by
      </div>
      <div class="tool">
        <a target="_blank" href="https://www.npmjs.com/package/rdvue">rdvue</a>
      </div>
    </div>
    <div class="[ grid ][ hello-world-content ]">
      <div class="description">
        <h3>Summary</h3>
        <span>
          The rdvue cli tool was created as a way to automate many of the
          processes that go into building SPAs (Single Page Applications) and
          setting consistencies between projects, shortenening the learning
          curve for developers per project. This VueJS project is scaffolded
          using predetermined best-practice structures, dependencies, meta
          tooling for consistent coding standards and automatic unit test
          generation.
        </span>
      </div>
      <div class="features">
        <h3>Features Included</h3>
        <ul class="[ ml-4 ]">
          <li>
            vue-router
            <span class="sub-text">-</span>
            <span class="desc">
              in-app page navigation (<a href="https://router.vuejs.org/"
                >read more</a
              >)
            </span>
          </li>
          <li>
            vuex
            <span class="sub-text">-</span>
            <span class="desc">
              state management for vue (<a href="https://vuex.vuejs.org/"
                >read more</a
              >)
            </span>
          </li>
          <li>
            sass
            <span class="sub-text">-</span>
            <span class="desc">
              css extension library (<a href="https://sass-lang.com/"
                >read more</a
              >)
            </span>
          </li>
          <li>
            tailwind
            <span class="sub-text">-</span>
            <span class="desc">
              css framework (<a href="https://tailwindcss.com/">read more</a>)
            </span>
          </li>
          <li>
            typescript
            <span class="sub-text">-</span>
            <span class="desc">
              typechecking for javascript (<a
                href="https://www.typescriptlang.org/"
                >read more</a
              >)
            </span>
          </li>
          <li>
            axios
            <span class="sub-text">-</span>
            <span class="desc">
              promise based http client for browser and node (<a
                href="https://github.com/axios/axios/"
                >read more</a
              >)
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>