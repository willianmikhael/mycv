<template>
    <section class="container mx-auto mt-20 pt-20 mb-32">
        <div class="grid grid-columns-3 grid-flow-col gap-4">

            <TextContainer />

            <div class="grid grid-rows-4 column-span-2  grid-flow-col gap-8 mr-12 px-16 py-6 tracking-wide">

                <div class="row-span-2">
                    <div class="bg-fball h-full rounded-3xl p-6">
                        <div>
                            <img class="p-6" src="../assets/images/cat.jpg" alt="Void">
                        </div>
                        <h1 class="font-Merriweather italic text-4xl p-4">Hi there, I'm Willian.</h1>

                        <div class="font-Roboto text-1xl p-4">
                            <p>
                                Just a little bit about me — I'm a native Joinville, currently
                                studying Software Engineering at
                                <a href="https://www.catolicasc.org.br/?gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjSgH9fvhQJGweAC4qWnEpUu4WzR96k5oo1h9FlPmHLfCBRfE3abh4waAksTEALw_wcB"
                                    target="_blank">PUCSC.</a>
                            </p>

                            <br>

                            <p>
                                Since I was a child I have been passionate about technology, while other children were
                                watching
                                cartoons, I was usually watching @Discovery Channel or science channels. My first dream was
                                to
                                be an aerospace engineer, but life took me down other paths.
                            </p>

                            <br>

                            <p>
                                After serving in the army, I decided to pursue a police career, I graduated in Forensic
                                Investigation and Criminal Expertise and dedicated myself to public examinations. But the
                                more I
                                studied, the more I saw that this wasn't the life I wanted. So I decided to look for my way,
                                and
                                I found it!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row-span-1 mt-10 bg-fball rounded-3xl p-6">
                    <div class="grid grid-cols-3">
                        <div class="col-span-1">
                            <img src="../assets/images/falcon.jpeg" alt="void">
                        </div>
                        <div class="col-span-2  h-full font-Roboto text-1xl mt-8 rounded-3xl">
                            <p>
                                I am truly grateful for having the opportunity to study software engineering, I understand
                                that this is a privilege for a Brazilian.
                            </p>
                            <br>
                            <p class="mt-8">
                                And I'm getting closer to my dreams, my hobbies, and the things I like. Speaking of hobbies,
                                here are mine; I'm really passionate about rockets, Astronomy, Philosophy and technologies.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row-span-1 ">
                    <div class="bg-fball h-full rounded-3xl p-6">
                        <div class="mb-8">
                            

                            <h1 class="font-Merriweather italic text-4xl p-4">Where I go?</h1>

                            <p class="font-Roboto text-1xl p-4">
                                I have studied many things since I entered software engineering college, in fact, there are
                                many paths in the technology area, but I believe I found my path, I am currently dedicating
                                myself to data analysis, machine learning and artificial intelligence. <br><br> I am
                                dedicated to
                                improving my skills in these areas, continually learning and exploring new techniques and
                                technologies. My goal is to harness the power of data and AI to solve real-world problems
                                and make a positive impact.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>

import TextContainer from './TextContainer.vue';

export default {
    name: 'Container',
    components: { TextContainer, }
}
</script>
