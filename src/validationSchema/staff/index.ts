import * as yup from 'yup';

export const staffValidationSchema = yup.object().shape({
  hire_date: yup.date().nullable(),
  termination_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
