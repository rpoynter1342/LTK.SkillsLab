import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Grid, TextField, Typography} from '@mui/material';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';
const BasicForm = () => {
  const dispatch = useDispatch()
  return (
  <Grid container direction="column" justifyContent="center" alignItems="center">
    <Grid item sx={{margin: '1rem'}}><Typography variant="h4">TODO</Typography></Grid>
    <Grid item sx={{margin: '1rem'}}>
      <Formik
        initialValues={{
          todo: '',
        }}
        validate={values=> {
          const errors = {};
          if (!values.todo) {
            errors.todo = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addTodo(values.todo));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field 
              as={TextField} 
              size="small" 
              label="Add Todo" 
              id="todo" 
              name="todo"
              error={errors.todo && touched.todo}
              helperText={errors.todo && touched.todo && errors.todo}
            />
            <Grid container alignItems="center" justifyContent="center" sx={{marginTop: '1rem'}}>
              <Button variant="outlined" type="submit">Add Todo</Button>
            </Grid>
          </Form>
        )}
        
      </Formik>
      <Todo />
    </Grid>
  </Grid>
  );
};

export default BasicForm
