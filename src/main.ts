import Vue from 'vue'
import MyComponent from './components/My';
import Hello from './components/hello/Hello.vue';
import App from './app';



new Vue({  
  el: '#app-main',

  data: function () {
    return {
      message: 'test',
      // title: 'title11'
      list: ['one', 'two.']
    }
  },

  watch: {
    message: function (val) {
      console.log('watch..');
      console.log(val);
    }
  },

  // computed: {
  //   testMessage: function () {
  //     // return this.message + '바뀜.';
  //   }
  // },

  methods: {
    prefix: function (message) {
      return message + '  변경되었음.';
    },

    clickFunction: function () {
      this['message'] = 'message' + (+ new Date());
      console.log('클릭');
    }
  //   clickFunction: function (list) {
  //     // console.log(this.message);
  //     console.log(list);
  //     list.push(+ new Date());
  //     console.log('눌렀음.');
  //   }
    ,
    listFunction : function () {
      this['list'].push('list' + (+ new Date()));
    }
  }

}); 

App.start({
  appId: 'shop',
  roomId: '1234',
  target: 'test'
});