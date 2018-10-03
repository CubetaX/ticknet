<template>
    <div >
        <swiper :options="swiperOption1" ref="mySwiper" >
            <swiper-slide class="intro-1">
                intro-1
                <span class="test">Ticknet工作室</span>
                <div class="img-wrapper">
                    <img src="../assets/next-arrow.png" alt="">
                    <img src="../assets/next-icon.png"  alt="" @click="nextPage">
                </div>
            </swiper-slide>
            <swiper-slide class="intro-2">
                intro-2
                <div class="img-wrapper" @click="test">
                    <img src="../assets/next-arrow.png" alt="">
                    <img src="../assets/next-icon.png" alt="" @click="nextPage">
                </div>
            </swiper-slide>
            <swiper-slide class="intro-3">
                intro-3
                <div class="img-wrapper">
                    <img src="../assets/next-arrow.png" alt="">
                    <img src="../assets/next-icon.png" alt="" @click="nextPage">
                </div>
            </swiper-slide>

            <swiper-slide class="product-page">
                product-page
                <swiper :options="swiperOption2" class="product-wrapper">
                    <swiper-slide class="product-1">
                        <span>product-1</span>
                    </swiper-slide>
                    <swiper-slide class="product-2">
                        product-2
                    </swiper-slide>
                    <swiper-slide class="product-3">
                        product-3
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="img-wrapper">
                    <img src="../assets/next-arrow.png" alt="">
                    <img src="../assets/next-icon.png" alt="" @click="nextPage">
                </div>
            </swiper-slide>

            <swiper-slide class="team-page">
                    team-page
                    <swiper :options="swiperOption2" class="team-wrapper">
                        <swiper-slide class="team-1">
                            <span>team-1</span>
                        </swiper-slide>
                        <swiper-slide class="team-2">
                            team-2
                        </swiper-slide>
                        <swiper-slide class="team-3">
                            team-3
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                <div class="img-wrapper">
                    <img src="../assets/next-arrow.png" alt="">
                    <img src="../assets/next-icon.png" alt="" @click="nextPage">
                </div>
            </swiper-slide>
            <swiper-slide class="end-page">
                <div>join us</div>
                <div class="back-to-top" @click="backTop">返回顶部</div>
            </swiper-slide >
            <div class="swiper-pagination1" slot="pagination"></div>
        </swiper>


    </div>

</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css';

    export default {
        name: 'home',
        components:{
          swiper,
          swiperSlide
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.swiper;
            }
        },
        methods:{
            backTop(){
                this.swiper.slideTo(0,500,false)

            },
            nextPage(){
                this.swiper.slideNext(1000,false)
            }

        },
        data() {
            return {
                swiperOption1: {
                    //notNextTick: true,
                    direction : 'vertical',
                    slidesPerView: 1,
                    height: window.innerHeight,
                    pagination: {
                        el: '.swiper-pagination1',
                        clickable: true
                    },
                    on:{
                        slideChangeTransitionEnd:function(){
                          //  alert(this.height);/* eslint-disable */

                        }
                    },
                },
                swiperOption2: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination2',
                        clickable: true
                    }
                }
            }
        },
    }
</script>
<style lang="stylus">
    .intro-1
        background-image url("../assets/sky.jpg")
        background-size 100% 100%
    .intro-2
        background-image url("../assets/mou.jpg")
    .intro-3
        background-image url("../assets/paris.jpg")
        background-size 100% 100%
    .product-page
        background gray
    .team-page
        background gray
    .team-wrapper
        border solid 1px white
        top 40%
        height 40%
        .swiper-slide
            height 50%
            top 50px
            border solid white

    .back-to-top
        padding-top 40%
        height 100px
        text-align center
        background darkgray
        color white
    .test
        position absolute
        top: 50px
        text-align center
        color white
        border white solid 1px
    .test
        animation: test 2s linear
    @keyframes test
        from
            top 0px
        to
            top 100px
    .img-wrapper
        width 100%
        position: absolute;
        //background green
        bottom   100px
        img
            display block
            margin-left 45%
        img:nth-child(1)
            position relative
            margin-left 46%
            animation next-arrow 1s linear infinite alternate
        img:nth-child(2)
            margin-top 10px
            height 25px
            width 25px
    @keyframes next-arrow
        from
            top -10px;
        to
            top 5px;
            opacity 0.5


</style>