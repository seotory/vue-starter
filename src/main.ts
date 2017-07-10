import Vue from 'vue'
import MyComponent from './components/My';
import Hello from './components/hello/Hello.vue';
import App from './app';

function hello(compiler: string): void {
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

App.start({
  appId: 'shop',
  roomId: '1234',
  target: 'test'
});