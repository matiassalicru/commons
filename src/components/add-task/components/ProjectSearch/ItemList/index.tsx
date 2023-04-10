import { FunctionComponent, ReactElement } from 'react'

// Types
import { ItemListProps } from './index.interface'
import { SCTitle } from './styles'

// Components
import { BreadCrumb } from '../../../../breadCrumb'

const ItemList: FunctionComponent<ItemListProps> = ({ data }): ReactElement => {
  const { client, brand, product, name } = data
  return (
    <div>
      <BreadCrumb brandName={brand?.name} clientName={client?.name} projectName={product?.name} theme="light" />
      <SCTitle>{name}</SCTitle>
    </div>
  )
}

export default ItemList
