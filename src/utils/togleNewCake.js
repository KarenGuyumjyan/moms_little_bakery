export function togleNewCake(modalData, size = 'small', isAdd = true) {
    if (!localStorage.getItem('cakes')) {
        localStorage.setItem(
          'cakes',
          JSON.stringify([{ id: modalData.id, size: size, count: 1 }]),
        )
      } else {
        const cakesBag = JSON.parse(localStorage.cakes)
        const cakeIndex = cakesBag.findIndex(
          (cake) => cake.id === modalData.id && cake.size === size,
        )
        if (cakeIndex !== -1) {
          cakesBag[cakeIndex] = {
            id: modalData.id,
            size: size,
            count: isAdd ? cakesBag[cakeIndex].count + 1 : cakesBag[cakeIndex].count - 1,
          }
          localStorage.cakes = JSON.stringify(cakesBag)
        } else {
          localStorage.cakes = JSON.stringify([
            ...JSON.parse(localStorage.cakes),
            { id: modalData.id, size: size, count: 1 },
          ])
        }
      }
}