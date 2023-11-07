<template>
    <MainScreen v-if="status === 'login'" 
        @onLogout="doLogOut()" 
        @onFullscreen="fullScreen()"
        @onChangeBC="changBC"
        />
    <LogOut v-if="status === 'logout'"/>
</template>
<style>
    @font-face {
        font-family: 'apple';
        src: url('./assets/font/appleFont/SF-Pro.ttf');
    }

    * {
        box-sizing: border-box;
        cursor: url("./assets/cursor/macOS.cur"), auto;
    }
</style>
<script>
import MainScreen from './components/MainScreen.vue';
import LogOut from './components/LogOut.vue';

export default {
    name: 'App',
    data() {
        return {
            status: 'login', // Ban đầu, người dùng đã đăng nhập
        };
    },
    components: {
        MainScreen,
        LogOut
    },
    methods: {
        doLogOut(){
            this.status = 'logout';
        },
        fullScreen(){
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
            }
        },
        changBC({ imageUrl }){
            // alert(imageUrl);
            document.body.style.backgroundImage = `url(${imageUrl})`;
        }
    },
}
</script>

<style>

</style>
