module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito'],
      heading: ['Alegreya Sans'],
    },
    extend: {
      backgroundImage: {
        'hero-image':
          "url('https://res.cloudinary.com/dbegssigw/image/upload/v1651573596/bhouse/background_n5oq6b.jpg')",
      },
      colors: {
        'misty-rose': '#fbe9df',
      },
    },
    plugins: [require('flowbite/plugin')],
    darkMode: 'class',
  },
}
