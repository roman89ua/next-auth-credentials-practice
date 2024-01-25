import { loginSchema } from '@/components/schemas/loginSchema';
import * as yup from 'yup';
export const registrationSchema = loginSchema.shape({
  name: yup
    .string()
    .matches(
      /^[A-Z\u0410-\u042F\u0406\u0407\u0404][A-Z\u0410-\u042F\u0406\u0407\u0404a-z\u0430-\u044F\u0456\u0457\u04540-9' -]*$/,
      {
        message:
          'Name should start from capital letter, can include dashes, spaces and apostrophes',
      }
    )
    .required('This field is required'),
});
