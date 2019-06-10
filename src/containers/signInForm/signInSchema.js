import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  heardAboutUs: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  amountPaid: Yup.number()
    .min(0, 'Not enough!')
    .required('Must be a number'),
  paymentMethod: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

export default SignInSchema;
