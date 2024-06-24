import ElLink from "@/components/el/Link.vue";
import ElModal from "@/components/el/Modal.vue";
import ElPaginated from "@/components/el/Paginated.vue";

const components = {
    'el-link': ElLink,
    'el-modal': ElModal,
    'el-paginated': ElPaginated,
};

function install(app) {
    Object.keys(components).forEach((name) => {
        app.component(name, components[name]);
    });
}

export default { install };
