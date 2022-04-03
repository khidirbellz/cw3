import Vue from 'nativescript-vue';

import app from "./components/app"
// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <app />
        </Frame>`,

    components: {
        app
    }
}).$start();