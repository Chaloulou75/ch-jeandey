<script setup>
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";

const items = [
    {
        id: 1,
        title: "Diag City",
        href: "https://www.diag-city.fr/",
        bgColor:
            "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
        textColor: "text-white",
    },
    {
        id: 2,
        title: "Margaux Bendelac",
        href: "https://www.bendelac-avocat.com/",
        bgColor:
            "bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600",
        textColor: "text-white",
    },
    {
        id: 3,
        title: "Julieta Mercerat",
        href: "https://www.julietamercerat.com/",
        bgColor:
            "bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600",
        textColor: "text-white",
    },
    {
        id: 4,
        title: "Pantaloni Greiner Rachwan",
        href: "https://www.pantaloni-greiner-rachwan.com/",
        bgColor:
            "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600",
        textColor: "text-white",
    },
    {
        id: 5,
        title: "Acadomia",
        href: "https://contact.acadomia.fr/stages-vacances",
        bgColor:
            "bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600",
        textColor: "text-white",
    },
];
</script>

<template>
    <div
        class="flex flex-col items-center justify-center flex-1 w-full h-full text-slate-700 bg-gradient-to-r from-slate-100 to-blue-200"
    >
        <div class="flex items-center px-4 mt-10 md:mt-24">
            <div class="flex flex-col gap-5 tracking-widest md:gap-10">
                <div class="text-4xl font-black text-orange-700 md:text-8xl">
                    Hello .
                </div>
                <div class="text-4xl font-black md:text-8xl">I'm Charles .</div>
                <div
                    class="flex flex-col gap-5 my-4 font-mono text-lg font-medium md:gap-6"
                >
                    <p>
                        I'm a
                        <span class="text-orange-700">Full Stack</span> Web
                        Developper
                    </p>
                    <ul class="space-y-4 font-mono text-lg">
                        <li>
                            <LogosVuejs
                                class="inline-flex mr-4 fill-[#4FC08D] size-8"
                            />
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
                            <LogosLaravel
                                class="inline-flex mr-4 fill-[#FF2D20] size-8"
                            />
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
                    <a href="mailto:c.jeandey@gmail.com" class="text-orange-700"
                        >email</a
                    >,
                    <a
                        target="_blank"
                        href="https://github.com/Chaloulou75"
                        class="text-orange-700"
                        >GitHub</a
                    >,
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/charles-jeandey"
                        class="text-orange-700"
                        >LinkedIn</a
                    >
                </p>
                <div class="grid grid-cols-1 gap-6 mt-6 mb-20 font-mono">
                    <h2 class="py-4 text-lg">I've been working on:</h2>
                    <WorkCard
                        v-for="item in items"
                        :key="item.id"
                        :title="item.title"
                        :href="item.href"
                        :bgColor="item.bgColor"
                        :textColor="item.textColor"
                    >
                    </WorkCard>
                </div>
            </div>
        </div>
    </div>
</template>
