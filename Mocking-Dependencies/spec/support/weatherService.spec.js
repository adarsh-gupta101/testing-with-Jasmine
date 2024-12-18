// weatherService.spec.js
const weatherService = require("../../weatherService");

describe("Weather Service with Mocking", () => {
  describe("getWeatherReport", () => {
    it("should return formatted weather report for Mumbai", async () => {
      // Mock the API call to return specific data for Mumbai
      spyOn(weatherService, "fetchWeatherData").and.returnValue(
        Promise.resolve({ temp: 40, condition: "Sunny" })
      );

      const report = await weatherService.getWeatherReport("Mumbai");

      expect(weatherService.fetchWeatherData).toHaveBeenCalledWith("Mumbai");
      expect(report).toBe("Temperature: 40°C, Condition: Sunny");
    });

    it("should handle API errors for invalid Indian city", async () => {
      // Mock the API call to simulate an error
      spyOn(weatherService, "fetchWeatherData").and.returnValue(
        Promise.reject(new Error("City not found"))
      );

      const report = await weatherService.getWeatherReport("Not a City #123");

      expect(report).toBe("Error: City not found");
    });
  });

  describe("formatWeatherReport", () => {
    it("should format Bangalore weather data correctly", () => {
      const mockData = { temp: 25, condition: "Cloudy" };
      const formatted = weatherService.formatWeatherReport(mockData);

      expect(formatted).toBe("Temperature: 25°C, Condition: Cloudy");
    });
  });

  describe("fetchWeatherData", () => {
    it("should return weather data for Delhi", async () => {
      const data = await weatherService.fetchWeatherData("Delhi");

      expect(data).toEqual(
        jasmine.objectContaining({
          temp: 22,
          condition: "Rainy",
        })
      );
    });

    it("should reject with error for Kolkata (not in database)", async () => {
      try {
        await weatherService.fetchWeatherData("Kolkata");
        fail("Should have thrown an error");
      } catch (error) {
        expect(error.message).toBe("City not found");
      }
    });
  });

  describe("Complex mocking scenarios", () => {
    it("should mock multiple weather updates for Mumbai", async () => {
      // Mock fetch to return different values simulating weather changes
      const fetchSpy = spyOn(weatherService, "fetchWeatherData");

      fetchSpy.and.returnValues(
        Promise.resolve({ temp: 20, condition: "Sunny" }),
        Promise.resolve({ temp: 23, condition: "Humid" })
      );

      const morningReport = await weatherService.getWeatherReport("Mumbai");
      const eveningReport = await weatherService.getWeatherReport("Mumbai");

      expect(morningReport).toBe("Temperature: 20°C, Condition: Sunny");
      expect(eveningReport).toBe("Temperature: 23°C, Condition: Humid");
      expect(fetchSpy).toHaveBeenCalledTimes(2);
    });

    it("should mock weather service with season-based logic", async () => {
      // Mock with custom monsoon season logic
      spyOn(weatherService, "fetchWeatherData").and.callFake((city) => {
        const monsoonData = {
          Mumbai: { temp: 24, condition: "Heavy Rain" },
          Delhi: { temp: 28, condition: "Light Rain" },
          Banglore: { temp: 20, condition: "Moderate Rain" },
        };

        if (monsoonData[city]) {
          return Promise.resolve(monsoonData[city]);
        }
        return Promise.reject(new Error("City not found in monsoon database"));
      });

      const mumbaiReport = await weatherService.getWeatherReport("Mumbai");
      const chennaiReport = await weatherService.getWeatherReport("Chennai");

      expect(mumbaiReport).toBe("Temperature: 24°C, Condition: Heavy Rain");
      expect(chennaiReport).toBe("Error: City not found in monsoon database");
    });

    it("should simulate temperature range checks for Indian cities", async () => {
      spyOn(weatherService, "fetchWeatherData").and.callFake((city) => {
        const cityTemp = {
          Mumbai: 20,
          Delhi: 22,
          Banglore: 25,
        };

        if (cityTemp[city]) {
          let condition;
          if (cityTemp[city] < 22) condition = "Pleasant";
          else if (cityTemp[city] < 25) condition = "Warm";
          else condition = "Hot";

          return Promise.resolve({
            temp: cityTemp[city],
            condition: condition,
          });
        }
        return Promise.reject(new Error("City not found"));
      });

      const mumbaiReport = await weatherService.getWeatherReport("Mumbai");
      const delhiReport = await weatherService.getWeatherReport("Delhi");
      const bangloreReport = await weatherService.getWeatherReport("Banglore");

      expect(mumbaiReport).toBe("Temperature: 20°C, Condition: Pleasant");
      expect(delhiReport).toBe("Temperature: 22°C, Condition: Warm");
      expect(bangloreReport).toBe("Temperature: 25°C, Condition: Hot");
    });
  });
});
