import react from 'react'
import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import {
  GoogleMap,
  useLoadSript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
function Map() {
  const googlemap = useRef(null)
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: 'weekly',
    })
    let map
    loader.load().then(() => {
      const google = window.google
      map = new google.maps.Map(googlemap.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })
    })
  })
  return <div id="map" ref={googlemap} />
}
export default Map
