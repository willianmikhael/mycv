<template>
    <section class="container mx-auto mt-20 pt-20 mb-32">
        <div class="grid grid-columns-3 grid-flow-col gap-4">

            <Message />

            <div class="grid grid-rows-12 column-span-2  grid-flow-col gap-10">

                <div class="row-span-4">
                    <div class="bg-fball h-full p-6">
                        <div>
                            <a href="https://dev.to/willianmikhael/how-can-we-verify-the-performance-of-an-algorithm-88e" target="_blank">
                                <img class="p-6" src="../assets/images/article.png" alt="Void">
                            </a>
                        </div>
                        <h1 class="font-Merriweather italic text-4xl">Article</h1>
                        <p class="font-Roboto text-1xl">I have been write some articles</p>
                    </div>
                </div>

                <div class="row-span-4">
                    <div class="bg-fball h-full p-6">
                        <div>
                            <a href="https://colab.research.google.com/drive/1nLsqaCpCEnageZ7NR3ZMAjyE7zoXxwch?usp=drive_link" target="_blank">
                                <img class="p-6" src="../assets/images/metrics.png" alt="Void">
                            </a>
                        </div>
                        <h1 class="font-Merriweather italic text-4xl">Eschool Metrics</h1>
                        <p class="font-Roboto text-1xl">Discovering the Relationship between Schools and Population</p>
                    </div>
                </div>

                <div class="row-span-4">
                    <div class="bg-fball h-full p-6">
                        <div>
                            <a href="#" target="_blank">
                                <img class="p-6" src="../assets/void.svg" alt="Void">
                            </a>
                            <h1 class="font-Merriweather italic text-4xl">I'm working on it</h1>
                            <p class="font-Roboto text-1xl">Wait a little bit!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import Message from './Message.vue';

export default {
    name: 'Projects',
    components: { Message }
}
</script>
