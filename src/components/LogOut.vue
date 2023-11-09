<template>
    <!-- <div class="logout-main-background">
        <div class="login-form">
            <img src="../assets/images/apple-logo-white.png" alt="">
            <form >
                <input id="password" type="password" title="Password: 1234" placeholder="Password: 1234"
                    name="password">
                <button type="submit" id="submit-btn">Login</button>
                <div id="error"></div>
            </form>
        </div>
    </div> -->

<div class="logout-main-background">
    <div class="login-form">
        <img src="../assets/images/apple-logo-white.png" alt="">
        <form action="">
            <input id="password" type="password" title="Password: 1234" placeholder="Password: 1234"
                name="password">
            <button id="submit-btn" @click="login()">Login</button>
            <div id="error"></div>
        </form>
    </div>

</div>
<!-- <script>
    $(document).ready(function () {
        $('#submit-btn').click(function () {
            if ($('input:password').val() == "1234") {

                window.location.href = 'https://djneces.github.io/MacOs_Catalina_Clone_JQ_CSS_HTML/'
            } else {
                    
                 $("#error").show().text("Wrong Password!");
            }
        });
        $("form").submit(function (event) {
            event.preventDefault();
        });
        $('#password').on("click", function () {
            $("#error").hide();
        });
    });
</script> -->


</template>
<style scoped>
    /* @import url('../assets/styles/global.css'); */
    @import url('//db.onlinewebfonts.com/c/9da41c570d5a221cb2486d78769a076d?family=Neue+Helvetica');
    @import url('../assets/styles/logout.css');
    /* ************* LOGOUT PAGE ******************* */
    .logout-main-background{
        margin-top: 300px;
    }
    body {
        background-image: url("https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/23.png?raw=true");
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: black;
        color: white;
        font-family: Helvetica, Arial, sans-serif;
    }

    @import url(//db.onlinewebfonts.com/c/9da41c570d5a221cb2486d78769a076d?family=Neue+Helvetica);

    @font-face {
        font-family: "Neue Helvetica";
        src: url("//db.onlinewebfonts.com/t/9da41c570d5a221cb2486d78769a076d.eot");
        src: url("//db.onlinewebfonts.com/t/9da41c570d5a221cb2486d78769a076d.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/9da41c570d5a221cb2486d78769a076d.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/9da41c570d5a221cb2486d78769a076d.woff") format("woff"), url("//db.onlinewebfonts.com/t/9da41c570d5a221cb2486d78769a076d.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/9da41c570d5a221cb2486d78769a076d.svg#Neue Helvetica") format("svg");
    }

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
    }

    .login-form input {
        border-radius: 3px;
        border: none;
        background-color: rgb(124, 124, 124);
        height: 1.5rem;
        margin-top: 2rem;
        padding-left: 5px;
        outline: none;
    }

    input:focus {
        border: none;
        background-color: rgb(143, 143, 143);
        outline: none;
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    button {
        background-color: rgb(143, 143, 143); 
        border: none;
        border-radius: 3px;
        height: 1.6rem;
        outline: none;
        margin-left: 10px;
        padding: 0px 5px;
    }

    button:hover {
        background-color: rgb(109, 109, 109);
    }

    #error {
        display: none;
        border-radius: 3px;
        height: 1.5rem;
        background-color: brown;
        color: white;
        font-size: 0.9rem;
        text-align: center;
        margin-top: 1rem;
        padding-top: 0.3rem;
    }
</style>
   <!-- <script src="./assets/lib/jquery-3.5.1.min.js"></script>
    <script src="./assets/lib/jquery-ui.js"></script>
    <script src="./assets/lib/jquery.resizeOnApproach.1.0.min.js"></script>  -->
<script>
    import '../assets/js/logout';
    export default {
        name: 'LogOut', // Đổi tên thành phần thành 'HelloWorld' hoặc tên khác bao gồm nhiều từ
        // Các phần khác của thành phần
        methods: {
            changeBC(url) {
                document.body.style.backgroundImage = `url(${url})`;
            },
            login(){
                this.$emit("login");
            }
        }
    }
</script>