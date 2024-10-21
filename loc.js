const findMyLocation = () => {

    const status = document.querySelector('.status');
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

    fetch(geoApiUrl)

        .then(res => res.json())
        .then(data =>{

            status.textContent = data.city;
            let location = data.city;
            alert('Location: ' + location);
        })
    }

        const error = () => {
            status.textContent = 'Unable to retrieve your location';
        }
       
        navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.find-loc').addEventListener('click', findMyLocation);