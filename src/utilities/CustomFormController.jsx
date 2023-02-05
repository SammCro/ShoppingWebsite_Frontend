import React from 'react'

import {  useField, } from "formik";
import { FormField, Label } from "semantic-ui-react";

//Custom form ve diğer componentler oluşturmak için kullanılıyor, kullanıldığı yerden aldığı propslarla işlem yapıyor.
function CustomFormController(props) {
    const[field,meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <input {...field} {...props}></input>
      {meta.touched && !!meta.error  ? (
        <Label pointing basic color='red' content={meta.error}></Label>
      ) : null}
    </FormField>
  )
}

export default CustomFormController;