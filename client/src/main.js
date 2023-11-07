import { createApp } from "vue";
import App from "./App.vue";
import './assets/lib/jquery-3.5.1.min';
import './assets/lib/jquery-ui';
import './assets/lib/jquery.resizeOnApproach.1.0.min';
import './assets/js/index';

// console.log(App);
createApp(App).mount("#app");
export default {
    // methods: {
    //     changeBC(url) {
    //         document.body.style.backgroundImage = `url(${url})`;
    //     }
    // }
};
