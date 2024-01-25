import type { FieldValues, Path } from 'react-hook-form';
import type { InputElementProps } from '@/components/form/TextInput/types';

export default function InputElement<T extends FieldValues>({
  labelProps,
  inputProps,
  formMethods,
}: InputElementProps<T>) {
  const { errors } = formMethods.formState;

  const thisInputHasError = !!errors[`${inputProps.id}`];

  return (
    <label
      className={`'flex flex-col py-4' ${labelProps.className}`}
      {...labelProps}
    >
      <span className={`${thisInputHasError ? 'text-error' : ''}`}>
        {labelProps.children}
      </span>

      <input
        type="text"
        className={`input input-bordered w-full my-3 ${inputProps.className} ${thisInputHasError ? 'input-error' : ''}`}
        {...inputProps}
        {...formMethods.register(inputProps.name as Path<T>)}
      />
      {thisInputHasError && (
        <p className="text-error">
          {errors[`${inputProps.id}`]?.message as string}
        </p>
      )}
    </label>
  );
}
