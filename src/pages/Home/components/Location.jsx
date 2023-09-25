import React, { useEffect } from 'react';

function GoogleMap() {
  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 32.76961780838574, lng:  -96.86049124676603 }, // Default coordinates (San Francisco)
      zoom: 13, // Default zoom level
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
                <p className='text-lg text-center xl:text-xl'>2110 Panoramic Circle <br/> Dallas, Texas 75212</p>
            </div>
            <div id="map" className="w-full h-96 md:w-2/3 md:rounded-lg">
            {/* Map container */}
            </div>
        </div>
    </>
  );
}

export default GoogleMap;
