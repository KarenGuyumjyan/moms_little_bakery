import { useState, useEffect, useRef } from 'react'

export default function SimpleInput({
  text,
  fullWidth = false,
  onChange,
  suggestions = [],
  onSelectSuggestion,
  restoreSelections,
}) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasText, setHasText] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const suggestionsRef = useRef(null)

  // Handle focus and blur to control the input label
  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e) => {
    if (!e.target.value.trim()) {
      setIsFocused(false)
      setHasText(false)
    } else {
      setHasText(true)
    }
  }

  // Close suggestions if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClear = () => {
    setInputValue('')
    setShowSuggestions(false)
    if (onChange) onChange('')
    if (restoreSelections) restoreSelections()
  }

  const formatPhoneNumber = (input) => {
    const digits = input.replace(/\D/g, '')

    let formattedNumber = '+7'

    if (digits.length > 1) {
      formattedNumber += ` (${digits.slice(1, 4)}`
    }
    if (digits.length > 4) {
      formattedNumber += `) ${digits.slice(4, 7)}`
    }
    if (digits.length > 7) {
      formattedNumber += `-${digits.slice(7, 9)}`
    }
    if (digits.length > 9) {
      formattedNumber += `-${digits.slice(9, 11)}`
    }

    return formattedNumber
  }

  useEffect(() => {
    setInputValue(inputValue)
  }, [inputValue])

  return (
    <div
      style={{ width: fullWidth ? '100%' : 'calc(25% - 6px)' }}
      className={`relative`}
    >
      <label
        htmlFor={`${text}-field`}
        className={`absolute left-2 transition-all duration-300 ${
          isFocused || hasText
            ? '-top text-xs text-gray-500'
            : 'top-2 text-sm text-gray-500'
        } ${isFocused ? 'text-[10px]' : ''}`}
      >
        {text}
      </label>
      {inputValue && (
        <button
          type='button'
          onClick={handleClear}
          className='absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'
        >
          &times;
        </button>
      )}
      <input
        type='text'
        id={`${text}-field`}
        value={inputValue}
        onFocus={() => {
          setIsFocused(true)
          setShowSuggestions(true)
        }}
        onBlur={handleBlur}
        onChange={(e) => {
          text === 'Номер телефона'
            ? setInputValue(formatPhoneNumber(e.target.value))
            : setInputValue(e.target.value)
          setHasText(!!e.target.value.trim())
          if (onChange) onChange(e.target.value)
          setShowSuggestions(true) // Show suggestions while typing
        }}
        autoComplete='off'
        className='w-full p-4 pb-2 bg-gray-200 rounded-md outline-none focus:ring-0 focus:border-none'
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className='absolute bg-white w-full mt-1 border border-gray-300 shadow-lg z-50 rounded-lg'
        >
          {suggestions.map((address, index) => (
            <li
              key={index}
              onClick={() => {
                onSelectSuggestion(address)
                setInputValue(address)
                setShowSuggestions(false)
              }}
              className='p-2 cursor-pointer hover:bg-gray-200 text-sm'
            >
              {address}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
