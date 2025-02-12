import { ProfileType } from '@/types/profile';
import * as yup from 'yup';

const defaultValidations = {
  required: 'obrigatório',
};

export type NewProfileValidator = yup.InferType<typeof validatorNewProfile>;

export const validatorNewProfile = yup.object().shape({
  name: yup
    .string()
    .required(defaultValidations.required)
    .matches(
      /^(?!\s)(?!.*\s{2})[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
      'campo inválido'
    ),
  type: yup.string(),
  dependents: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .test(
          'name-required-if-type-caregiving',
          defaultValidations.required,
          function (value) {
            const parentType = this.from?.[1].value.type;
            return parentType === ProfileType.CAREGIVING ? !!value : true;
          }
        ),
      color: yup.string(),
    })
  ),
});
