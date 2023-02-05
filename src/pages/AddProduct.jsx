import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormField, Button, Label } from "semantic-ui-react";

import * as Yup from "yup";

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
          <FormField>
            <Field name="productName" placeholder="Product Name"></Field>
            <ErrorMessage
              name="productName"
              render={(error) => (
                <Label pointing basic content={error} color="red"></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="unitPrice" placeholder="Unit Price"></Field>
            <ErrorMessage
              name="unitPrice"
              render={(error) => (
                <Label pointing basic content={error} color="red"></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <Button color="green" fluid type="submit">
            Add New Product
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddProduct;
