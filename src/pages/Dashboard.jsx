import React from 'react'

//Components
import Navi from '../components/Navi';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

import {Button} from 'semantic-ui-react'

function Dashboard() {
  return (
    <div>
        <Navi>
        </Navi>
        <Categories>
        </Categories>
        <ProductList>
        </ProductList>
    </div>
  )
}

export default Dashboard;