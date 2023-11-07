<template>
    <MainScreen v-if="status === 'login'" @onLogout="doLogOut()" @onFullscreen="fullScreen()"/>
    <LogOut v-if="status === 'logout'"/>
</template>

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
        }
    },
}
</script>

<style>

</style>
