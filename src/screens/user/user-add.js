import React, {Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {userAdd} from '../../actions/user';
import {View, StyledButton, StyledTextInput} from './styled';

export const UserAddComponent = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Formik
        initialValues={{users: ''}}
        onSubmit={(values) => dispatch(userAdd(values.users))}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <StyledTextInput
              onChangeText={handleChange('users')}
              onBlur={handleBlur('users')}
              value={values.users}
              placeholder="Enter User name"
            />
            <StyledButton onPress={handleSubmit} mode="contained">
              jfdk
            </StyledButton>
          </View>
        )}
      </Formik>
    </Fragment>
  );
};
