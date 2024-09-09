<script setup lang="ts">
import { mobileNavItems, navItems, hotGames, breakpoints, categories, socialIcons, footerMenuItems, headerMenuItems } from '../mocks/data.js'
const state = reactive({ isMenuOpen: false })
</script>

<template>
    <div class="page-index relative w-full">
        <!-- Start Header Section -->
        <div class="bg-header-gradient sticky top-0 z-40 bg-black bg-opacity-60">
            <div class="max-w-[1240px] mx-auto px-5">
                <div class="h-[90px] flex justify-between items-center">
                    <div class="w-1/4">
                        <!-- Logo -->
                        <img class="w-[108px] h-[64px]" src="/public/icons/logo.svg" />
                    </div>
                    <div class="w-3/4 flex justify-end">
                        <!-- Desktop Navigation -->
                        <div class="hidden xl:block">
                            <div class="flex gap-[42px]">
                                <a
                                    v-for="(item, index) in headerMenuItems"
                                    :key="index"
                                    :href="item.url"
                                    :class="`${item.active ? 'border-b-4 text-white' : 'text-white/50'} h-[90px] flex items-center hover:text-white justify-center text-base uppercase`"
                                    >{{ item.text }}
                                </a>
                            </div>
                        </div>
                        <!-- Mobile Navigation -->
                        <div class="block xl:hidden">
                            <!-- Mobile Menu Icon -->
                            <img v-on:click="state.isMenuOpen = true" src="/public/icons/mobile-menu.svg" />
                            <!-- Mobile Menu -->
                            <div
                                v-show="state.isMenuOpen"
                                class="w-screen h-screen fixed top-0 left-0 z-50 bg-white flex justify-center items-center"
                            >
                                <div class="flex flex-col gap-10 w-1/2 items-center">
                                    <a
                                        v-for="(item, index) in headerMenuItems"
                                        :key="index"
                                        :href="item.url"
                                        class="uppercase text-black text-xl font-bold"
                                        >{{ item.text }}
                                    </a>
                                    <!-- Close Mobile Menu Icon -->
                                    <img v-on:click="state.isMenuOpen = false" src="/public/icons/close.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Header Section -->

        <!-- Banner Slider -->
        <div class="h-[100vh] w-[100vw] fixed top-0 left-0">
            <div class="w-full bg-[#03827E]">
                <div class="max-w-[1400px] h-full m-auto relative">
                    <Carousel>
                        <Slide :autoplay="1000" v-for="slide in 5" :key="slide">
                            <!-- Banner Image -->
                            <div class="h-[420px] xl:h-[576px] w-full bg-[url('/public/images/banner.png')] bg-no-repeat bg-center bg-cover"></div>
                        </Slide>
                        <template #addons>
                            <!-- Carousel Pagination -->
                            <div class="absolute bottom-[40px] left-[100px] opacity-30">
                                <Pagination />
                            </div>
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="relative mt-[330px] xl:mt-[486px] bg-white/90 backdrop-blur-sm">
            <!-- Content Section -->
            <div class="max-w-[1240px] mx-auto pb-0 xl:pb-[60px] px-0 xl:px-[20px] pt-0 xl:pt-[100px]">
                <div class="flex flex-wrap gap-[20px] xl:gap-[40px]">
                    <!-- Mobile Navigation Panel -->
                    <div class="h-[80px] w-full flex xl:hidden">
                        <div
                            v-for="(item, index) in mobileNavItems"
                            :key="index"
                            :class="[
                                'h-full w-1/5 border-b-2 border-b-black flex flex-col justify-center items-center hover:opacity-100',
                                item.isActive ? 'opacity-100' : 'opacity-20',
                            ]"
                        >
                            <!-- Mobile Nav Icons -->
                            <img class="size-[20px]" :src="item.icon" />
                            <div class="text-[10px] uppercase font-bold h-[21px] w-full flex items-end justify-center text-center leading-[10px]">
                                {{ item.text }}
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Panel -->
                    <div class="w-[160px] h-[300px] sticky top-[120px] hidden xl:block">
                        <div class="flex flex-col gap-[15px] w-full">
                            <div class="relative">
                                <!-- Search Input -->
                                <img class="opacity-30 absolute top-1/4 left-1" src="/public/icons/search.svg" />
                                <input placeholder="Search" class="h-[46px] w-full border-b-2 text-[15px] pl-[25px] bg-transparent" type="text" />
                            </div>
                            <div
                                v-for="(item, index) in navItems"
                                :key="index"
                                :class="[`flex gap-[5px] hover:opacity-100`, !item.isActive ? 'opacity-30' : '']"
                            >
                                <!-- Sidebar Nav Items -->
                                <img :src="item.icon" />
                                <a href="#" class="text-[15px]">{{ item.text }}</a>
                            </div>
                        </div>
                    </div>

                    <!-- Main Content Area -->
                    <div class="w-full xl:w-[1000px] overflow-hidden">
                        <div class="flex flex-col gap-[85px]">
                            <div class="xl:px-0">
                                <!-- Hot Games Section Header -->
                                <div class="mb-[30px] flex justify-between items-center px-[25px]">
                                    <div class="text-[28px] font-bold">Hot Game</div>
                                    <div class="text-[28px] gap-[5px] hidden md:flex">
                                        <img src="/public/icons/arrow-left.svg" class="opacity-30" />
                                        <img src="/public/icons/arrow-right.svg" />
                                    </div>
                                    <!-- Mobile Dropdown -->
                                    <select
                                        class="h-[28px] rounded-[2px] border border-[#CCCCCC] w-[146px] text-[12px] font-bold px-[11px] md:hidden"
                                    >
                                        <option value="Release Date" selected>Release Date</option>
                                    </select>
                                </div>

                                <!-- Desktop Hot Game Items -->
                                <div class="gap-[20px] hidden md:flex xl:px-0 px-[25px]">
                                    <div
                                        v-for="(item, index) in hotGames"
                                        :key="index"
                                        class="w-1/2 flex flex-col gap-[30px] rounded-lg xl:bg-transparent"
                                    >
                                        <img :src="item.banner" class="h-auto w-[100%]" />
                                        <div class="flex justify-between items-center">
                                            <div class="flex gap-[20px] items-center w-9/12">
                                                <img class="size-[90px]" :src="item.icon" />
                                                <div>
                                                    <div class="text-[19px] font-bold overflow-hidden text-ellipsis line-clamp-1">
                                                        {{ item.title }}
                                                    </div>
                                                    <div class="text-[13px] overflow-hidden text-ellipsis line-clamp-2">
                                                        {{ item.description }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex gap-[20px] w-3/12 justify-end">
                                                <!-- View Button -->
                                                <button class="w-[75px] h-[28px] border rounded-[3px] border-black/20 text-[13px]">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Mobile Hot Game Item -->
                                <div class="mx-[40px] md:hidden">
                                    <div class="w-full bg-[#C48F03] rounded-[14px] overflow-hidden">
                                        <img src="/public/images/hot-game-mobile-banner.png" class="w-full h-auto" />
                                        <div class="p-[20px]">
                                            <div class="flex gap-[20px] h-[60px]">
                                                <img class="size-[60px]" src="/public/images/category-1-icon-1.png" />
                                                <div class="h-full flex flex-col justify-between">
                                                    <div class="text-[16px] overflow-hidden text-ellipsis line-clamp-1 font-bold text-white">
                                                        Tree Of Fortune
                                                    </div>
                                                    <div class="text-[12px] text-white/50 overflow-hidden text-ellipsis line-clamp-2">
                                                        Legend has it that a farmer was granted a seed from a deity.
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Hot Game Details -->
                                            <div class="flex gap-[38px] mt-[28px]">
                                                <div class="w-1/3">
                                                    <div class="text-white font-bold text-[14px]">MEDIUM</div>
                                                    <div class="mt-[4px] text-[12px] text-white/50">Volatility</div>
                                                </div>
                                                <div class="w-1/3">
                                                    <div class="text-white font-bold text-[14px]">95.01%</div>
                                                    <div class="mt-[4px] text-[12px] text-white/50">RTP</div>
                                                </div>
                                                <div class="w-1/3">
                                                    <div class="text-white font-bold text-[14px]">x5000</div>
                                                    <div class="mt-[4px] text-[12px] text-white/50">Maximum Win</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Categories Section -->
                            <div class="category-section">
                                <!-- Categories Header -->
                                <div class="mb-[30px] flex justify-between items-center px-[25px] xl:px-0">
                                    <div class="text-[28px] font-bold">Hottest Category</div>
                                    <div class="text-[28px] gap-[5px] hidden xl:flex">
                                        <img src="/public/icons/arrow-left.svg" class="opacity-30" />
                                        <img src="/public/icons/arrow-right.svg" />
                                    </div>
                                </div>
                                <Carousel :breakpoints="breakpoints">
                                    <Slide :autoplay="1000" v-for="(item, index) in categories" :key="index">
                                        <!-- Category item -->
                                        <div class="w-full md:mr-[20px] flex gap-[30px] rounded-[28px] p-[20px] bg-black/5">
                                            <div class="flex gap-[20px] flex-wrap w-1/2">
                                                <div
                                                    class="w-full aspect-square overflow-hidden bg-[#5C6EFF] rounded-[20px] p-[20px] flex flex-col gap-[10px] md:gap-[18px]"
                                                >
                                                    <img :src="item.icon" class="size-[24px]" />
                                                    <div class="text-[21.66px] text-white leading-4 font-bold text-left">
                                                        {{ item.title }}
                                                    </div>
                                                    <div class="text-[10px] md:text-[13.78px] text-white/60 text-left">
                                                        {{ item.description }}
                                                    </div>
                                                </div>
                                                <div class="flex gap-[20px] w-full">
                                                    <div class="w-1/2 aspect-square">
                                                        <img class="size-full" :src="item.images[0]" />
                                                    </div>
                                                    <div class="w-1/2 aspect-square">
                                                        <img class="size-full" :src="item.images[1]" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex gap-[20px] flex-wrap w-1/2">
                                                <div class="flex gap-[20px] w-full">
                                                    <div class="w-1/2 aspect-square">
                                                        <img class="size-full" :src="item.images[2]" />
                                                    </div>
                                                    <div class="w-1/2 aspect-square">
                                                        <img class="size-full" :src="item.images[3]" />
                                                    </div>
                                                </div>
                                                <img :src="item.images[4]" class="w-full aspect-square overflow-hidden rounded-[20px]" />
                                            </div>
                                        </div>
                                    </Slide>
                                    <template #addons>
                                        <div class="h-[50px] flex items-center justify-center">
                                            <Pagination />
                                        </div>
                                    </template>
                                </Carousel>
                            </div>
                        </div>
                        <!-- Load more button -->
                        <div class="px-[20px] mb-[13px] xl:hidden">
                            <div class="px-[20px] bg-[#0000000e] rounded-[14px] h-[50px] flex items-center justify-center gap-[15px]">
                                <div>Load More</div>
                                <img src="/public/icons/plus.svg" class="size-[12px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Section -->
            <div class="border-t-2 bg-white">
                <div class="max-w-[1240px] mx-auto px-[25px]">
                    <div class="flex flex-wrap xl:pt-[80px]">
                        <div class="w-full xl:w-[40%] order-2 xl:order-1">
                            <img class="hidden xl:block" src="/public/icons/footer-logo.svg" />
                            <div class="text-black/40 text-[12px] mt-[50px] xl:mt-[14px]">
                                Valletta Buildings, South Street, Valletta - VLT 1103 Malta
                            </div>
                            <!-- Social Media Section -->
                            <div class="mt-[40px] gap-[15px] hidden xl:flex">
                                <img v-for="(item, index) in socialIcons" :key="index" :src="item.src" :alt="item.alt" />
                            </div>
                        </div>
                        <div class="w-full xl:w-[60%] order-1 xl:order-2">
                            <div class="flex flex-wrap">
                                <div v-for="(item, index) in footerMenuItems" :key="index" class="w-full xl:w-1/4">
                                    <div class="py-[20px] flex justify-between items-center border-b-2 xl:border-b-0">
                                        <div class="text-[13.5px] font-bold">
                                            {{ item.title }}
                                        </div>
                                        <img src="/public/icons/plus.svg" class="size-[12px] xl:hidden" />
                                    </div>
                                    <div class="flex-col gap-[10px] hidden xl:flex">
                                        <a
                                            v-for="(link, index) in item.links"
                                            :key="index"
                                            :href="link.url"
                                            class="text-black/40 hover:text-black/70 text-[12px]"
                                            >{{ link.text }}</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[50px] mb-[20px] border-b-2 hidden xl:block"></div>
                    <div class="text-black/40 my-[20px] text-[11px]">COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</div>
                    <!-- Social Media Section -->
                    <div class="flex gap-[15px] xl:hidden mb-[100px]">
                        <img v-for="(item, index) in socialIcons" :key="index" :src="item.src" :alt="item.alt" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
