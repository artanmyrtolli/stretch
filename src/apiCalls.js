const fetchAirQuality = () => {
   
    return fetch('https://api.airvisual.com/v2/city?city=denver&state=colorado&country=USA&key=3617f6f0-f606-4129-baf0-af48064ad14a').then(response=> response.json())
        
  }

  export {fetchAirQuality}