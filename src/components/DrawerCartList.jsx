import { cakesList, smallCakes } from '@/utils/constants'
import DrawerCartItem from './DrawerCartItem'

const DrawerCartList = ({removeCakeFromBag, getTotalPrice}) => {
  const allCakes = [...cakesList, ...smallCakes]
  return (
    <div className='flex flex-col gap-4'>
      {localStorage.getItem('cakes') &&
        JSON.parse(localStorage.cakes).map((cake, index) => (
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
