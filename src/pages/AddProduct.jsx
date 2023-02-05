import React from "react";

import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";

import * as Yup from "yup";

import CustomFormController from "../utilities/CustomFormController";

function AddProduct() {
  const initalValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Product name is required!"),
    unitPrice: Yup.number().required("Unit price is required!"),
  });
  return (
    <div>
      <Formik
        initialValues={initalValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <CustomFormController name="productName" placeholder="Product Name"></CustomFormController>
          <CustomFormController name="unitPrice" placeholder="Unit Price"></CustomFormController>
          <Button color="green" fluid type="submit">
            Add New Product
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddProduct;
