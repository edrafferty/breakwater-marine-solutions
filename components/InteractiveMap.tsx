'use client'

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L, { LatLngExpression, LeafletMouseEvent } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default marker icons
delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl
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

const ports: Port[] = [/* ... your port array stays unchanged ... */]

export default function InteractiveMap() {
  return (
    <MapContainer
      center={[46, -63]}
      zoom={6}
      scrollWheelZoom
      touchZoom
      zoomControl
      className="w-full h-full z-10"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />
      {ports.map((port) => (
        <Marker
          key={port.name}
          position={port.position}
          eventHandlers={{
            click: () => {
              console.log(`Map click: ${port.name}`)
            },
          }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1}>
            <div className="bg-white p-2 rounded shadow max-w-xs text-black">
              <strong>{port.name}</strong>
              <ul className="list-disc list-inside">
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
