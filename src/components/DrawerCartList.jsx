import { cakesList } from '@/utils/constants'
import DrawerCartItem from './DrawerCartItem'

const DrawerCartList = ({removeCakeFromBag, getTotalPrice}) => {
  return (
    <div className='flex flex-col gap-4'>
      {localStorage.getItem('cakes') &&
        JSON.parse(localStorage.cakes).map((cake, index) => (
          <DrawerCartItem
            key={index}
            cake={cakesList[cake.id-1]}
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
