<script setup lang="ts">
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center flex-1 w-full h-full text-white bg-gradient-to-r from-cyan-500 to-blue-500"
  >
    <div class="flex items-center px-4">
      <div class="flex flex-col gap-5 font-black tracking-widest md:gap-10">
        <div class="text-4xl md:text-8xl text-lime-300">Hello .</div>
        <div class="text-4xl md:text-8xl">I'm Charles .</div>
        <div class="flex flex-col gap-3 font-mono text-lg font-medium md:gap-6">
          <p>
            I'm a <span class="text-lime-300">Full Stack</span> Web Developper
          </p>
          <ul class="space-y-4 font-mono text-lg">
            <li>
              <LogosVuejs class="inline-flex mr-4 fill-[#4FC08D] size-8" />
              <NuxtLink
                to="https://v3.vuejs.org/"
                class="hover:underline hover:underline-offset-2"
                >Vue js</NuxtLink
              >
            </li>

            <li>
              <ChevronDoubleRightIcon
                class="inline-flex mr-4 text-[#6d74ed] size-8"
              />
              <NuxtLink
                to="https://inertiajs.com/"
                class="hover:underline hover:underline-offset-2"
                >Inertia js</NuxtLink
              >
            </li>

            <li>
              <LogosLaravel class="inline-flex mr-4 fill-[#FF2D20] size-8" />
              <NuxtLink
                to="https://laravel.com/"
                class="hover:underline hover:underline-offset-2"
                >Laravel</NuxtLink
              >
            </li>

            <li>
              <LogosTailwindcss
                class="inline-flex mr-4 fill-[#38B2AC] size-8"
              />
              <NuxtLink
                to="https://tailwindcss.com/"
                class="hover:underline hover:underline-offset-2"
                >Tailwind css</NuxtLink
              >
            </li>
          </ul>
        </div>
        <p class="font-mono text-lg font-thin">
          Reach me via
          <a href="mailto:c.jeandey@gmail.com" class="text-lime-300">email</a>,
          <a
            target="_blank"
            href="https://github.com/Chaloulou75"
            class="text-lime-300"
            >GitHub</a
          >,
          <a
            target="_blank"
            href="https://www.linkedin.com/in/charles-jeandey"
            class="text-lime-300"
            >LinkedIn</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
