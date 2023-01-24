import { createApp } from 'vue';
// import Vue from 'vue';
import axios from 'axios';

createApp({
  data() {
    return {
      weather: null,
      city: "Zaporizhia",
    };
  },
  mounted: function(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=2e7130d2a7722f7e9152341449047f64&units=metric').then((response) => {
        console.log(response.data);
        this.weather = response.data;
    });
  },
  methods:{
    select: function(){
      axios.get('https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=2e7130d2a7722f7e9152341449047f64&units=metric').then((response) => {
        console.log(response.data);
        this.weather = response.data;
    });
    },
  },
}).mount('#app');

