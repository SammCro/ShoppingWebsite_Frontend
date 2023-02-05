import React from "react";

import { Route, Routes } from "react-router-dom";

//Components
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

//Semantic UI components
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import AddProduct from "../pages/AddProduct";


//Categories dashboard da hep olacağı için routes içine konulmuyor.
//exact demek sadece o alanda olduğunda çalışır demek

function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories></Categories>
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/"></Route>
              <Route exact path="/products/" element={<ProductList/>}></Route>
              <Route path="/products/:id" element={<ProductDetail/>}></Route>
              <Route exact path="/cartDetail" element={<CartDetail/>}></Route>
              <Route exact path="/products/addProduct" element={<AddProduct></AddProduct>}></Route>
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

export default Dashboard;
