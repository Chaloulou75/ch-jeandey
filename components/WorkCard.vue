<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

defineProps({
    title: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },
    bgColor: {
        type: String,
        default: "",
    },
    textColor: {
        type: String,
        default: "",
    },
});
</script>
<template>
    <NuxtLink
        :to="href"
        target="_blank"
        :class="[
            'group flex items-center justify-start p-4 rounded-md ring-4 ring-slate-500 ring-offset-1',
            'transition-all duration-300 ease-in-out',
            'hover:shadow-xl hover:scale-[1.02]',
            'relative overflow-hidden',
            bgColor || 'bg-white',
        ]"
    >
        <div class="relative z-10">
            <h2
                :class="[
                    'text-base font-medium flex items-center',
                    textColor || 'text-gray-800',
                ]"
            >
                {{ title }}
                <ArrowTopRightOnSquareIcon
                    class="ml-2 transition-transform duration-300 size-5 group-hover:translate-x-1"
                />
            </h2>
            <slot></slot>
        </div>
    </NuxtLink>
</template>
