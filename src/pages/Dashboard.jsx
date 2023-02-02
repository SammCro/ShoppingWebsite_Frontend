import React from "react";

//Components
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

import {  Grid, GridColumn, GridRow } from "semantic-ui-react";

function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories></Categories>
          </GridColumn>
          <GridColumn width={12}>
            <ProductList></ProductList>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

export default Dashboard;