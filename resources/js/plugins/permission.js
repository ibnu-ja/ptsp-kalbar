import Vue from 'vue'

const permission = {
    install (Vue, options) {
        Vue.prototype.can = (permissionName) => {
            let hasAccess;
            axios.get(`/api/permission/${permissionName}`)
                .then(() => {
                    hasAccess = true;
                })
                .catch(() => {
                    hasAccess = false;
                })
            return hasAccess;
        }
    },
}

Vue.use(permission)