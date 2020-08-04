import React from 'react';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {userAdd} from '../../actions/user';
import {View, Button, TextInput} from './styled';

export const UserAddComponent = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{users: ''}}
        onSubmit={(values) => dispatch(userAdd(values.users))}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('users')}
              onBlur={handleBlur('users')}
              value={values.users}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </>
  );
};
