import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email'),
  heardAboutUs: Yup.string().max(50, 'Too Long!'),
  amountPaid: Yup.string(),
  paymentMethod: Yup.string()
});

export default SignInSchema;
