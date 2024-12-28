'use client'
import SimpleInput from '@/common/SimpleImput'
import { useEffect, useRef, useState } from 'react'
import YandexMap from './YandexMap'

const SubmitForm = ({ closeModal }) => {
  const [mapCenter, setMapCenter] = useState([55.751244, 37.618423])

  const [formData, setFormData] = useState({
    address: '',
    phoneNumber: '',
    name: '',
    apartment: '',
    entrance: '',
    intercom: '',
    floor: '',
    comment: '',
  })

  const [errors, setErrors] = useState({})
  const [suggestions, setSuggestions] = useState([])

  const modalRef = useRef(null)

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const fetchSuggestions = async (address) => {
    if (!address.trim()) return

    try {
      const response = await fetch(
        `https://suggest-maps.yandex.ru/v1/suggest?text=${address}&lang=ru&results=4&types=street,metro,house&org_address_kind=house&strict_bounds=1&print_address=1&apikey=60ad28b5-1940-4579-aad6-c7853bf203b2&bbox=37.319328,55.489926~37.945661,56.009657`,
      )
      const data = await response.json()

      const filteredSuggestions = data?.results?.map(
        (item) => item.address.formatted_address,
      )

      setSuggestions(filteredSuggestions)
    } catch (error) {
      console.error('Error fetching address suggestions:', error)
    }
  }

  const fetchCoordinates = async (address) => {
    if (!address.trim()) return

    try {
      const response = await fetch(
        `https://geocode-maps.yandex.ru/1.x/?geocode=${address}&format=json&apikey=2ce6c484-545b-4e9c-844f-773129b12c47`,
      )
      const data = await response.json()
      const geoObject =
        data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject
      if (geoObject) {
        const [longitude, latitude] = geoObject?.Point?.pos?.split(' ') || []
        if (longitude && latitude) {
          setMapCenter([parseFloat(latitude), parseFloat(longitude)])
        }
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }))

    if (field === 'address') {
      fetchSuggestions(value)
      console.log(value, 'vv')
      if (value.length > 7) {
        console.log('fffff');
        fetchCoordinates(value)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    const phoneNumberDigits = formData.phoneNumber.replace(/\D/g, '')
    console.log(phoneNumberDigits, 'phoneNumberDigits')

    if (!formData.address.trim()) {
      newErrors.address = '"Адрес" является обязательным полем'
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = '"Номер телефона" является обязательным полем'
    } else if (phoneNumberDigits.length < 11) {
      newErrors.phoneNumber = '"Номер телефона" должен содержать ровно 10 цифр'
    }
    if (!formData.name.trim()) {
      newErrors.name = '"Имя получателя" является обязательным полем'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const submitedForm = {}

    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        if (key === 'phoneNumber') {
          submitedForm[key] = formData[key].slice(0, 18)
        } else {
          submitedForm[key] = formData[key]
        }
      }
    }),
      closeModal()
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div
        ref={modalRef}
        className='bg-white rounded-lg shadow-lg max-w-3xl w-full relative'
      >
        <button
          onClick={() => closeModal()}
          className='absolute top-4 right-6 text-black-500 hover:text-gray-800 transition text-5xl z-10'
        >
          &times;
        </button>
        <form
          onSubmit={handleSubmit}
          className='w-full h-full sm:h-[440px] flex flex-col-reverse sm:flex-row'
        >
          <div className='w-full sm:w-1/2 flex-1 p-4 flex flex-col justify-between gap-3 overflow-hidden'>
            <div className='flex flex-col gap-3 overflow-hidden'>
              <p>Укажите адрес доставки</p>
              <div className='flex flex-wrap gap-2'>
                <div className='w-full'>
                  <SimpleInput
                    text={'Адрес'}
                    fullWidth
                    onChange={(value) => handleInputChange('address', value)}
                    suggestions={suggestions}
                    restoreSelections={() => setSuggestions([])}
                    onSelectSuggestion={(address) =>
                      handleInputChange('address', address)
                    }
                  />
                  {errors.address && (
                    <p className='text-red-500 text-xs'>{errors.address}</p>
                  )}
                </div>
                <SimpleInput
                  text={'Имя получателя'}
                  fullWidth
                  onChange={(value) => handleInputChange('name', value)}
                />
                {errors.name && (
                  <p className='text-red-500 text-xs -mt-2'>{errors.name}</p>
                )}
                <SimpleInput
                  text={'Номер телефона'}
                  fullWidth
                  onChange={(value) => handleInputChange('phoneNumber', value)}
                />
                {errors.phoneNumber && (
                  <p className='text-red-500 text-xs -mt-2'>
                    {errors.phoneNumber}
                  </p>
                )}
                <SimpleInput
                  text={'Квартира'}
                  onChange={(value) => handleInputChange('apartment', value)}
                />
                <SimpleInput
                  text={'Подъезд'}
                  onChange={(value) => handleInputChange('entrance', value)}
                />
                <SimpleInput
                  text={'Домофон'}
                  onChange={(value) => handleInputChange('intercom', value)}
                />
                <SimpleInput
                  text={'Этаж'}
                  onChange={(value) => handleInputChange('floor', value)}
                />
                <SimpleInput
                  text={'Комментарий для курьера'}
                  fullWidth
                  fullHeight
                  onChange={(value) => handleInputChange('comment', value)}
                />
              </div>
            </div>

            <button
              type='submit'
              className='px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition'
            >
              Заказать
            </button>
          </div>

          <div className='w-full sm:w-1/2 h-[30vh] sm:h-auto rounded-r-lg overflow-hidden'>
            <YandexMap mapCenter={mapCenter} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SubmitForm
