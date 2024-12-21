import { cakesList, smallCakes, pieceCakes } from '@/utils/constants'
import DrawerCartItem from './DrawerCartItem'

const DrawerCartList = ({removeCakeFromBag, getTotalPrice}) => {
  const allCakes = [...cakesList, ...smallCakes, ...pieceCakes]
  return (
    <div className='flex flex-col gap-4'>
      {localStorage.getItem('cakes') &&
        JSON.parse(localStorage.cakes).map((cake) => (
          <DrawerCartItem
            key={cake.id}
            cake={allCakes[cake.id-1]}
            count={cake.count}
            size={cake.size}
            removeCakeFromBag={removeCakeFromBag}
            getTotalPrice={getTotalPrice}
          />
        ))}
    </div>
  )
}

export default DrawerCartList
