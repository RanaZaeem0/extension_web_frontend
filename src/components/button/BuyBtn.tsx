import React from 'react'

function BuyBtn({darkMode,stripe_link}:{darkMode:boolean,stripe_link:string}) {
  return (
    <div>
      <a href={stripe_link}>
              <button
                className={`w-full px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base text-white font-semibold transition-all duration-300 backdrop-blur-lg cursor-pointer ${
                  darkMode ? "bg-teal-800/80 hover:bg-teal-900/80" : "bg-teal-900/80 hover:bg-teal-950/80"
                }`}
              >
                But now
              </button>
              </a>
    </div>
  )
}

export default BuyBtn
