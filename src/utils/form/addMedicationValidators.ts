import * as yup from 'yup';

export type MedicationValidators = yup.InferType<
  typeof addMedicationValidators
>;

const defaultValidations = {
  required: 'obrigatório',
  max: 'maximo é de 128 caracteres',
};

export const addMedicationValidators = yup.object().shape({
  name: yup
    .string()
    .required(defaultValidations.required)
    .matches(/^\S.*$/, 'campo inválido'),
  type: yup.string().required(defaultValidations.required),
  interval: yup.string().required(defaultValidations.required),
  quantity: yup
    .string()
    .matches(/^(?!0$|00$)\d*$/, 'campo inválido')
    .required(defaultValidations.required),
  measure: yup.string().required(defaultValidations.required),
  observation: yup.string().max(128, defaultValidations.max),
});
