<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>Current Date & Time: {{ formattedDate }}</p>
    <p>Current Temperature in Belleville, ON: {{ temperature }}°C</p>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'Home',
  data() {
    return {
      temperature: 'Loading...',
    };
  },
  computed: {
    formattedDate() {
      return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    },
  },
  methods: {
    async fetchWeather() {
      try {
        const apiKey = '4dc4413233b17510d94ea3d4f28539d0'; // Replace with your OpenWeatherMap API key
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Belleville,CA&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        this.temperature = data.main.temp.toFixed(1);
      } catch (error) {
        console.error('Weather fetch error:', error);
        this.temperature = 'Unavailable';
      }
    },
  },
  mounted() {
    this.fetchWeather();
  },
};
</script>