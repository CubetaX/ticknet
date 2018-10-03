<template>
    <div class="header-wrapper">
        <div class="logo">
            <img src="../assets/logo2.png" alt="">
        </div>
        <div class="menu-icon" @click="openNav">
            <span></span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
        methods:{
            openNav(){
                this.$emit('nav-toggle',true);

            }
        }
    }
</script>

<style scoped lang="stylus">
.header-wrapper
{
    position: fixed ;
    z-index 999
}
    .logo{
        top: 76px;
        height: 76px;
        width: 70px;
        z-index 999
    }
    span
        height 5px
        width 40px
        background gray
        position fixed
        top 10px
        right 10px
</style>