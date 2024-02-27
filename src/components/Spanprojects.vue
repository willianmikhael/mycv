<template>
    <div class="row-span-4">
        <div class="bg-fball p-6 rounded-2xl py-20">
            <div>
                <a :href="link" target="_blank" class="flex items-center justify-center">
                    <img class="w-full h-full object-cover" :src="image" alt="Void">
                </a>
            </div>

        </div>
        <div class="m-3 mb-10 grid grid-columns-2 grid-flow-col">
            <div class="row-span-1">
                <h1 class="font-Merriweather italic text-4xl mb-1">{{ title }}</h1>
                <p class="font-Roboto text-1xl">{{ desc }}</p>
            </div>
            <div class="row-span-1 flex items-center justify-end">
                <a :href="link" target="_blank"><img src="../assets/arrow.svg" alt="Void" class="w-14 h-14"></a>
            </div>

            
        </div>
    </div>
</template>

<script>

export default {
    name: 'Spanprojects',
    props: {
        image: String,
        link: String,
        title: String,
        desc: String,
    }

}
</script>