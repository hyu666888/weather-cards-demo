import { cities } from './data'
import WeatherCard from './WeatherCard'

export default function App() {
  return (
    <main className="min-h-screen py-12 px-4">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          🌍 World Weather
        </h1>
        <p className="text-slate-500 mt-1 text-sm">Live conditions across 6 cities</p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cities.map((city) => (
          <WeatherCard key={city.name} city={city} />
        ))}
      </div>
    </main>
  )
}
