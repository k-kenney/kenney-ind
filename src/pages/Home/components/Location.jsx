import React, { useEffect } from 'react';


function GoogleMap() {
  const googleMapsLink = 'https://www.google.com/maps/place/2110+Panoramic+Cir,+Dallas,+TX+75212,+USA/@32.76964,-96.8641662,17z/data=!4m6!3m5!1s0x864e9bb98639aba7:0xd0094bdbe861fff7!8m2!3d32.7693923!4d-96.8605127!16s%2Fg%2F11c23d4rp9?entry=ttu'
  
  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 32.76961780838574, lng:  -96.86049124676603 }, // Default coordinates (San Francisco)
      zoom: 14, // Default zoom level
    });


    // Add a marker to the map
    new window.google.maps.Marker({
      position: { lat: 32.76961780838574, lng:  -96.86049124676603 }, // Default marker position (San Francisco)
      map: map,
      title: 'Marker Title', // Title for the marker (optional)
    });
  }, []);

  return (
    <>
        <div className='pt-12 pb-32 md:flex md:gap-20 md:w-4/5 lg:w-2/3 md:items-center m-auto'>
            <div className='flex flex-col justify-center items-center pb-14'>
                <h1 className='text-2xl md:text-3xl xl:text-4xl pb-6'>Location</h1>
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                <p className='text-lg text-center xl:text-xl underline'>2110 Panoramic Circle <br/> Dallas, Texas 75212</p>
                </a>
            </div>
            <div id="map" className="w-full h-96 md:w-2/3 md:rounded-lg">
            {/* Map container */}
            </div>
        </div>
    </>
  );
}

export default GoogleMap;
