import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please type in valid email address. Example: some@email.org')
    .required('This field is required'),
  password: yup
    .string()
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])\S*$/, {
      message:
        'You password should include latin letters, at list one capital later, one special char and at list one digit.',
    })
    .required(),
});
