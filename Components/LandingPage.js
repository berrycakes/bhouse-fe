import MapSearch from './MapSearch'

const LandingPage = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 -z-50 bg-hero-image bg-no-repeat bg-bottom bg-contain bg-blend-normal saturation-125 contrast-125 opacity-70 w-full h-full bg-misty-rose"></div>
      <div className="max-w-xl container px-6 py-16 mx-auto text-center sm:bg-white sm:bg-opacity-90 sm:rounded-lg">
        <div className="max-w-lg mx-auto">
          <h1 className="text-6xl font-bold font-heading text-gray-600">
            Your home away from home
          </h1>

          <p className="mt-6 text-xl text-gray-400">
            rent bedspaces, rooms, and houses at convenient locations
          </p>

          <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40">
            <MapSearch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
