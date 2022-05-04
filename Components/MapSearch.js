import react, { useState, useEffect, useRef } from 'react'
import { MdGpsFixed } from 'react-icons/md'
import { Loader } from '@googlemaps/js-api-loader'

const mapApiJs = 'https://maps.googleapis.com/maps/api/js'
// const apiKey = process.env.NEXT_PUBLIC_API_KEY
const apiKey = ''

const loadAsyncScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    Object.assign(script, {
      type: 'text/javascript',
      async: true,
      src,
    })
    script.addEventListener('load', () => resolve(script))
    document.head.appendChild(script)
  })
}

const extractAddress = (place) => {
  console.log(place.place_id)
  const address = {
    city: '',
    state: '',
    zip: '',
    country: '',
    lat: '',
    lng: '',
  }
  if (!Array.isArray(place?.address_components)) {
    return address
  }
  place.address_components.forEach((component) => {
    const types = component.types
    const value = component.long_name
    if (types.includes('locality')) {
      address.city = value
    }
    if (types.includes('administrative_area_level_2')) {
      address.state = value
    }
    if (types.includes('postal_code')) {
      address.zip = value
    }
    if (types.includes('country')) {
      address.country = value
    }

    address.lat = place.geometry.location.lat()
    address.lng = place.geometry.location.lng()
  })

  return address
}

const MapSearch = () => {
  const searchInput = useRef(null)
  const [coordinates, setCoordinates] = useState()

  // init gmap script
  const initMapScript = () => {
    // if script is already loaded
    if (window.google) {
      return Promise.resolve()
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`
    return loadAsyncScript(src)
  }

  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace()
    console.log(extractAddress(place))
  }

  // init autocomplete
  const initAutoComplete = () => {
    if (!searchInput.current) return
    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    )
    autocomplete.setComponentRestrictions({
      country: ['ph'],
    })
    autocomplete.setFields(['address_component', 'geometry', 'place_id'])
    autocomplete.addListener('place_changed', () =>
      onChangeAddress(autocomplete)
    )
  }

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords)
      })
    }
  }

  // load map script
  useEffect(() => {
    initMapScript().then(() => {
      initAutoComplete()
    })
  }, [])

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <input
          ref={searchInput}
          type="text"
          placeholder="Enter your preferred area or landmark"
          className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
        />
        <button onClick={findMyLocation}>
          <MdGpsFixed />
        </button>
      </div>
    </div>
  )
}

export default MapSearch
