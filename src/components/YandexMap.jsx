import React, { useState, useEffect } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import ReactDOMServer from 'react-dom/server'
import { MapPinIcon } from '@/assets/icons/MapPinIcon'

const YandexMap = ({ mapCenter }) => {
  const [center, setCenter] = useState(mapCenter)
  const [pinUrl, setPinUrl] = useState('')

  const defaultState = {
    center: center,
    zoom: 16,
  }

  useEffect(() => {
    setCenter(mapCenter)
  }, [mapCenter])

  // Function to render the MapPin to an image URL
  const renderPinToImage = () => {
    const svgString = ReactDOMServer.renderToStaticMarkup(<MapPinIcon />)
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(svgBlob)
    setPinUrl(url)
  }

  // Render the MapPin as an image when the component mounts
  useEffect(() => {
    renderPinToImage()
  }, [])

  return (
    <YMaps query={{ apikey: '60ad28b5-1940-4579-aad6-c7853bf203b2' }}>
      <Map
        state={defaultState}
        width='100%'
        height='100%'
        options={{
          suppressMapOpenBlock: true,
          controls: [],
          scrollZoom: false, 
          dragging: false, 
        }}
      >
        <Placemark
          geometry={center}
          options={{
            iconLayout: 'default#image',
            iconImageHref: pinUrl,
            iconImageSize: [40, 40], 
            iconImageOffset: [-15, -30],
          }}
        />
      </Map>
    </YMaps>
  )
}

export default YandexMap
