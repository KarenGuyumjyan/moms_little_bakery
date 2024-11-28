export function removeCake(id, size) {
  const cakesBag = JSON.parse(localStorage.cakes)
  const newCakesBag = cakesBag.filter(
    (cake) => cake.id !== id && cake.size === size,
  )
  localStorage.cakes = JSON.stringify(newCakesBag)
}
