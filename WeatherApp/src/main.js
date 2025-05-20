export default function getWeatherFromLocation(apiKey) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    }, (err) => {
      reject(err);
    });
  });
}