import { createApp } from 'vue';
// import Vue from 'vue';
import axios from 'axios';


createApp({
  data() {
    return {
      anonim: false,

      name1: "",
      job: "",
      place: "",
      description: "",
      name2: "",
      phone: "",
    };
  },
  mounted: function(){

  },
  methods:{
    send: function(){
      emailjs.send('service_h7lc1wv','template_p723rm8',{
        'email': 'sladkovaoe@gmail.com',
        'message': this.name1+" що працює "+this.job+" в "+this.place+" "+this.description
      },'lJG9xwvxtrSzdDzqZ');    
    },
  },
}).mount('#app');

