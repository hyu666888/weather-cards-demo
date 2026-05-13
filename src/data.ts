export type Condition = 'Sunny' | 'Rainy' | 'Snowy' | 'Cloudy' | 'Stormy'

export interface City {
  name: string
  country: string
  temp: number
  condition: Condition
  emoji: string
}

export const cities: City[] = [
  { name: 'New York',   country: 'USA',       temp: 72,  condition: 'Sunny',  emoji: '☀️'  },
  { name: 'Tokyo',      country: 'Japan',     temp: 28,  condition: 'Snowy',  emoji: '❄️'  },
  { name: 'Paris',      country: 'France',    temp: 55,  condition: 'Rainy',  emoji: '🌧️' },
  { name: 'Sydney',     country: 'Australia', temp: 68,  condition: 'Cloudy', emoji: '☁️'  },
  { name: 'São Paulo',  country: 'Brazil',    temp: 84,  condition: 'Stormy', emoji: '⛈️' },
  { name: 'Cairo',      country: 'Egypt',     temp: 95,  condition: 'Sunny',  emoji: '🌤️' },
]
