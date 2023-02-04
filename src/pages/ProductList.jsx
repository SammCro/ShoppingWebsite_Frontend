import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import ProductService from "../services/productService";

import { Link } from "react-router-dom";


import { Icon, Menu, Table } from "semantic-ui-react";


//eğer jsx filelarda proporty içine birşeyler yazmak istersen '/products${product.id}'

//useEffectin sonundaki array notationu hangi stateler değiştirildiğinde useEffect çalışır onu gösterir.
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data));
  },[]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Product Price</Table.HeaderCell>
            <Table.HeaderCell>Units in Stock</Table.HeaderCell>
            <Table.HeaderCell>Quantity Per Unit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id} >
              <Table.Cell><Link to={`/products/${product.id}`}>{product.productName}</Link></Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
