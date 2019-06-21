import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  company: Yup.string(),
  phone: Yup.string(),
  email: Yup.string().email('Invalid email')
});

export default SignInSchema;
