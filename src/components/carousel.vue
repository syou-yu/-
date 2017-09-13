<template>
<div>
    <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :trigger="setting.trigger"
        :arrow="setting.arrow">

        <Carousel-item v-for="(pic,index) in picture" :key="index">
            <div class="demo-carousel">
                <img :src="pic.src" style="width:100%;height:100%"/>
            </div>
        </Carousel-item>

    </Carousel>
</div>
</template>


<script>

    export default {
        data () {
            return {
                value3: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    trigger: 'hover',
                    arrow: 'hover'
                },
                picture:[
                    {
                        src: require('../assets/carousel/carousel1.jpg'),
                        title: 'xxx1',
                        href: 'detail/analysis'
                    },
                    {
                        src: require('../assets/carousel/carousel2.jpg'),
                        title: 'xxx1',
                        href: 'detail/analysis'
                    },
                    {
                        src: require('../assets/carousel/carousel3.jpg'),
                        title: 'xxx1',
                        href: 'detail/analysis'
                    }
                ],
                

            }
        },
    }
</script>






