<template>
    <section class="container mx-auto mt-20 pt-20 mb-32">
        <div class="grid grid-columns-3 grid-flow-col gap-4">

            <Message />

            <div class="grid grid-rows-12 column-span-2  grid-flow-col gap-10 ">

                <Spanprojects :image=articleImage
                    link="https://dev.to/willianmikhael/how-can-we-verify-the-performance-of-an-algorithm-88e"
                    title="Article" desc="I have been write some articles" />

                <Spanprojects :image=metricsImage
                    link="https://colab.research.google.com/drive/1nLsqaCpCEnageZ7NR3ZMAjyE7zoXxwch?usp=drive_link"
                    title="Eschool Metrics" desc="Discovering the Relationship between Schools and Population" />

                <Spanprojects :image=voidImage link="#" title="I'm working on it" desc="Wait a little bit!" />

            </div>
        </div>
    </section>
</template>

<script>
import Message from './Message.vue';
import Spanprojects from './Spanprojects.vue';

import articleImage from '../assets/images/article.png';
import metricsImage from '../assets/images/metrics.png';
import voidImage from '../assets/void.svg';


export default {
    name: 'Projects',
    components: {
        Message,
        Spanprojects,
    },
    data() {
        return {
            articleImage,
            metricsImage,
            voidImage,
        };
    }
}
</script>
