import React from 'react'

import {  Field, ErrorMessage } from "formik";
import { FormField, Label } from "semantic-ui-react";


function CustomFormController(props) {
    const{name,placeholder} = props;
  return (
    <FormField>
            <Field name={name} placeholder={placeholder}></Field>
            <ErrorMessage
              name={name}
              render={(error) => (
                <Label pointing basic content={error} color="red"></Label>
              )}
            ></ErrorMessage>
    </FormField>
  )
}

export default CustomFormController;