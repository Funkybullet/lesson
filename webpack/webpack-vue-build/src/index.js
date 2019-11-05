import vue from 'vue';
// import {add,sub} from './utils';
import {add, sub} from './utils'
import App from './App';
console.log(1,2);
// rm -rf
new vue({
    render: h => h(App),
    components: {App},
}).$mount('#app')