import Vue from 'vue'

Vue.mixin({
    methods: {
        can (obj, string) {
            for (const key in obj) {
                if (obj[key].name == string) {
                    return true;
                }
            }
            return false;
        }
    }
})