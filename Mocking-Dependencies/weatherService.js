// weatherService.js
const weatherService = {
    async fetchWeatherData(city) {
        // In a real app, this would make an HTTP request but for this blog, we will use custom data
        const weatherData = {
            Mumbai: { temp: 20, condition: 'Sunny' },
            Banglore: { temp: 25, condition: 'Cloudy' },
            Delhi: { temp: 22, condition: 'Rainy' }
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const cityData = weatherData[city];
                if (cityData) {
                    resolve(cityData);
                } else {
                    reject(new Error('City not found'));
                }
            }, 1000);
        });
    },

    formatWeatherReport(weatherData) {
        return `Temperature: ${weatherData.temp}°C, Condition: ${weatherData.condition}`;
    },

    async getWeatherReport(city) {
        try {
            const weatherData = await this.fetchWeatherData(city);
            return this.formatWeatherReport(weatherData);
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
};

module.exports = weatherService;