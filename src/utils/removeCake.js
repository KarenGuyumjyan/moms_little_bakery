export function removeCake(id, size) {
  const cakesBag = JSON.parse(localStorage.cakes)
  const newCakesBag = cakesBag.filter((cake) => {
    if (cake.id !== id) {
      return cake
    } else {
      if (cake.size !== size) {
        return cake
      }
    }
  })
  localStorage.cakes = JSON.stringify(newCakesBag)
}
