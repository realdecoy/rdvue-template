<style lang="scss" src="./hello-world.scss" />
<script lang="ts" src="./hello-world.ts" />
<template>
  <div class="[ landing ] [ h-full w-full ] [ flex flex-col ]">
    <div class="[ w-full flex flex-row ]">
      <div class="[ flex-grow ]" />
      <img class="h-6 w-auto" :src="rdLogo" />
    </div>
    <section
      id="hero"
      class="[ flex flex-col gap-12 ] [ justify-center items-center ] [ flex-grow ][ text-center ] [ lg:px-24 ] [ h-screen ][ w-full lg:my-12 ]"
    >
      <div
        class="[ tracking-wider text-3xl lg:text-6xl leading-3 font-semibold ][ ]"
      >
        RDVue
        <sup
          class="[ rounded-md px-2 py-1 bg-typography-accent tracking-wider ] [ ]"
          ><span class="text-xs lg:text-4xl">v</span>3</sup
        >
      </div>
      <div>
        <h3 class="[ tracking-wider text-2xl leading-3 font-bold ][ ]">
          Starter Template
        </h3>
      </div>
      <div>
        <p class="[ text-typography-muted font-medium text-xs lg:text-xl ]">
          The RDVUE CLI tool was designed to streamline the development of
          Frontend Applications. It ensures uniformity across projects and
          reduces the learning curve for each new project undertaken by our
          developers.
        </p>
      </div>
      <div
        class="[ w-full flex flex-row ] [ gap-2 ] [ justify-center items-center ]"
      >
        <a href="#features">
          <button
            class="[ bg-button-primary px-4 py-2 rounded-md font-medium ]"
          >
            Features
          </button>
        </a>
        <button
          class="[ bg-button-secondary px-4 py-2 rounded-md font-medium text-typography-light ] [ outline-1 outline-border-dark outline ]"
        >
          Documentation
        </button>
      </div>
    </section>
    <section
      id="features"
      class="[ flex flex-col gap-12 ] [ justify-center items-center ] [ flex-grow ] [ h-full ][ w-full ]"
    >
      <h3 class="[ tracking-wider text-5xl leading-3 font-bold text-center ]">
        Features
      </h3>
      <div>
        <p
          class="[ text-typography-muted font-medium text-xs lg:text-xl text-center lg:px-24 ]"
        >
          In our commitment to drive efficient and high-quality SPA development,
          the RDVUE CLI tool is packed with a suite of features and embedded
          tools. This section provides a detailed breakdown of the tools
          integrated into the template, enabling developers to harness the full
          potential of the platform.
        </p>
      </div>
      <div
        class="[ flex lg:flex-row lg:flex-wrap flex-col justify-items-start ] [ gap-12 ] [ items-start justify-start ][ w-full lg:px-12 ][ font-mono ]"
      >
        <div
          v-for="feature in features"
          :key="`feature-listings-${feature.id}`"
          class="[ flex flex-col ] [ gap-2 ] [ justify-around ] [ items-start ] [ w-full lg:w-[21rem] h-64 ][ border border-typography-accent ][ px-6 py-6 ][ rounded-md ]"
        >
          <img :src="feature.image" class="[ w-12 h-12 ]" />
          <div class="[ font-semibold ][ text-2xl ]" v-html="feature.title" />
          <div class="[ text-xs font-medium text-typography-muted ]">
            {{ feature.description }}
          </div>
          <a :href="feature.link" target="_blank">
            <button
              class="[ bg-button-primary px-4 py-2 rounded-md font-medium text-sm ]"
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
