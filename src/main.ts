import Vue from 'vue'
import MyComponent from './components/My';
import Hello from './components/hello/Hello.vue';

function hello(compiler: string) {
  console.log(`Hello from ${compiler}`);
}
hello("TypeScript");
console.log('trest');

new Vue({
  el: '#app-main',
  components: {
    'test': MyComponent,
    'hello': Hello
  }
}); 
