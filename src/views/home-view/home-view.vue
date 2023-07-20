<style lang="scss" src="./home-view.scss" />
<script lang="ts" src="./home-view.ts" />
<template>
  <div class="[ hello-world ][ grid ]">
    <h1 class="[ text-center ]">Vue Starter Project</h1>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
      class="[ logo ][ mx-auto ][ mt-8 ][ w-40 ]"
    />
    <div class="[ call-sign ][ grid grid-cols-2 ][ mt-4 ]">
      <div
        class="[ powered-by ][ text-right text-typography-light ][ border border-border-light border-t-0 border-l-0 border-b-0 ][ pr-2 ]"
      >
        powered
        <br />by
      </div>
      <div class="[ tool ][ text-left text-3xl ][ pl-2 ]">
        <a target="_blank" href="https://www.npmjs.com/package/rdvue">rdvue</a>
      </div>
    </div>
    <div
      class="[ hello-world-content ][ grid grid-cols-2 grid-flow-col ][ p-8 pt-16 ][ my-0 mx-auto ][ max-w-6xl ]"
    >
      <div class="[ description ][ text-base text-left ]">
        <h3 class="[ mb-2 ]">Summary</h3>
        <span class="[ leading-6 ]">
          The rdvue cli tool was created as a way to automate many of the
          processes that go into building SPAs (Single Page Applications) and
          setting consistencies between projects, shortenening the learning
          curve for developers per project. This VueJS project is scaffolded
          using predetermined best-practice structures, dependencies, meta
          tooling for consistent coding standards and automatic unit test
          generation.
        </span>
      </div>
      <div class="[ features ][ text-base text-left ][ ml-8 ]">
        <h3 class="[ mb-2 ]">Features Included</h3>
        <ul class="[ ml-4 ][ list-none ]">
          <li class="[ leading-6 ]">
            vue-router
            <span class="[ sub-text ][ text-typography-light ]">-</span>
            <span class="desc">
              in-app page navigation (<a
                target="_blank"
                href="https://router.vuejs.org/"
                >read more</a
              >)
            </span>
          </li>
          <li class="[ leading-6 ]">
            pinia
            <span class="[ sub-text ][ text-typography-light ]">-</span>
            <span class="desc">
              state management for vue 3 (<a
                target="_blank"
                href="https://pinia.vuejs.org/introduction.html"
                >read more</a
              >)
            </span>
          </li>
          <li class="[ leading-6 ]">
            sass
            <span class="[ sub-text ][ text-typography-light ]">-</span>
            <span class="desc">
              css extension library (<a
                target="_blank"
                href="https://sass-lang.com/"
                >read more</a
              >)
            </span>
          </li>
          <li class="[ leading-6 ]">
            tailwind
            <span class="[ sub-text ][ text-typography-light ]">-</span>
            <span class="desc">
              css framework (<a target="_blank" href="https://tailwindcss.com/"
                >read more</a
              >)
            </span>
          </li>
          <li class="[ leading-6 ]">
            typescript
            <span class="[ sub-text ][ text-typography-light ]">-</span>
            <span class="desc">
              typechecking for javascript (<a
                target="_blank"
                href="https://www.typescriptlang.org/"
                >read more</a
              >)
            </span>
          </li>
          <li class="[ leading-6 ]">
            axios
            <span class="[ sub-text ][ text-typography-light ]">-</span>
            <span class="desc">
              promise based http client for browser and node (<a
                href="https://github.com/axios/axios/"
                target="_blank"
                >read more</a
              >)
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
