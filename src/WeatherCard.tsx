import type { City } from './data'

const gradients: Record<string, string> = {
  Sunny:  'from-amber-200 via-yellow-100 to-orange-100',
  Cloudy: 'from-slate-300 via-gray-200 to-blue-100',
  Rainy:  'from-blue-400 via-blue-200 to-slate-200',
  Snowy:  'from-sky-100 via-white to-blue-50',
  Stormy: 'from-slate-600 via-slate-400 to-indigo-200',
}

const textColors: Record<string, string> = {
  Sunny:  'text-amber-900',
  Cloudy: 'text-slate-700',
  Rainy:  'text-blue-900',
  Snowy:  'text-sky-800',
  Stormy: 'text-slate-100',
}

const subTextColors: Record<string, string> = {
  Sunny:  'text-amber-700',
  Cloudy: 'text-slate-500',
  Rainy:  'text-blue-700',
  Snowy:  'text-sky-600',
  Stormy: 'text-slate-300',
}

export default function WeatherCard({ city }: { city: City }) {
  const gradient = gradients[city.condition]
  const text = textColors[city.condition]
  const sub = subTextColors[city.condition]

  return (
    <div
      className={`
        bg-gradient-to-br ${gradient}
        rounded-2xl p-6 shadow-md
        flex flex-col items-center gap-3
        transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg
      `}
    >
      <span className="text-5xl leading-none select-none">{city.emoji}</span>
      <div className="text-center">
        <h2 className={`text-xl font-bold ${text}`}>{city.name}</h2>
        <p className={`text-sm ${sub}`}>{city.country}</p>
      </div>
      <div className={`text-4xl font-extrabold ${text}`}>{city.temp}°F</div>
      <span
        className={`
          text-sm font-medium tracking-wide uppercase
          px-3 py-1 rounded-full
          bg-white/40 ${text}
        `}
      >
        {city.condition}
      </span>
    </div>
  )
}
