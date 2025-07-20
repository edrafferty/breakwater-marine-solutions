'use client'

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet marker icon paths for Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

type Port = {
  name: string
  position: LatLngExpression
  cargo: string[]
}

const ports: Port[] = [
  {
    name: 'Halifax, NS',
    position: [44.65, -63.58],
    cargo: [
      'Breakbulk', 'Crude Oil', 'Coal', 'Containers', 'Cruise Ships',
      'Gypsum', 'Refined Fuels', 'Vehicles', 'Wind Components', 'Yachts',
    ],
  },
  {
    name: 'Sydney, NS',
    position: [46.13, -60.19],
    cargo: [
      'Aggregates', 'Coal', 'Cruise Ships', 'Petcoke', 'Gypsum',
      'Heavy Lifts', 'Wind Components', 'Slag', 'Subsea Cable', 'Yachts',
    ],
  },
  {
    name: 'Little Narrows, NS',
    position: [45.96, -60.93],
    cargo: ['Gypsum', 'Yachts'],
  },
  {
    name: 'Aulds Cove, NS',
    position: [45.61, -61.41],
    cargo: ['Aggregates'],
  },
  {
    name: 'Mulgrave, NS',
    position: [45.61, -61.38],
    cargo: ['Aggregates', 'Gypsum', 'Heavy Lifts', 'Salt', 'Subsea Cable', 'Wind Components'],
  },
  {
    name: 'Point Tupper, NS',
    position: [45.57, -61.38],
    cargo: ['Coal', 'Crude Oil', 'Petcoke', 'Refined Fuels'],
  },
  {
    name: 'Yarmouth, NS',
    position: [43.84, -66.12],
    cargo: ['Cruise Ships', 'Fish Products', 'Yachts', 'Fishing vessels', 'Ship Repair'],
  },
  {
    name: 'Liverpool, NS',
    position: [44.05, -64.72],
    cargo: ['Wind Components', 'Wood Chips'],
  },
  {
    name: 'Pictou, NS',
    position: [45.68, -62.71],
    cargo: ['Aggregates', 'Paper Products', 'Peat Moss', 'Wood Pulp'],
  },
  {
    name: 'Sheet Harbour, NS',
    position: [44.92, -62.54],
    cargo: ['Aggregates', 'Heavy Lifts', 'Slag', 'Coiled Steel', 'Wind Components'],
  },
  {
    name: 'Shelburne, NS',
    position: [43.77, -65.32],
    cargo: ['Yachts'],
  },
  {
    name: "St. John's, NL",
    position: [47.56, -52.71],
    cargo: ['Yachts'],
  },
  {
    name: 'Saint John, NB',
    position: [45.27, -66.06],
    cargo: ['Aggregates', 'Crude Oil', 'Cruise Vessels', 'Refined Fuels', 'Scrap Steel', 'Yachts'],
  },
  {
    name: 'Belledune, NB',
    position: [47.9, -65.89],
    cargo: [
      'Aggregates', 'Coal', 'Petcoke', 'Gypsum', 'Salt', 'Sand',
      'Wind Components', 'Wood Chips/Pellets'],
  },
  {
    name: 'Bayside, NB',
    position: [45.06, -67.1],
    cargo: ['Aggregates', 'Wind Components'],
  },
  {
    name: 'Charlottetown, PEI',
    position: [46.24, -63.13],
    cargo: ['Aggregates', 'Cruise Ships', 'Fertilizer', 'Subsea Cable'],
  },
  {
    name: 'Summerside, PEI',
    position: [46.4, -63.78],
    cargo: ['Aggregates', 'Fertilizer'],
  },
  {
    name: 'Georgetown, PEI',
    position: [46.18, -62.53],
    cargo: ['Aggregates', 'Cruise Ships', 'Wind Components'],
  },
  {
    name: 'Bécancour, QC',
    position: [46.35, -72.43],
    cargo: ['Coal'],
  },
]

export default function InteractiveMap() {
  return (
    <MapContainer
      center={[46.5, -63.5]}
      zoom={6}
      scrollWheelZoom
      touchZoom
      className="w-full h-full z-10"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />

      {ports.map((port) => (
        <Marker key={port.name} position={port.position}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
            <div className="bg-white p-2 rounded shadow max-w-xs text-black text-sm">
              <strong>{port.name}</strong>
              <ul className="list-disc list-inside mt-1">
                {port.cargo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  )
}
