import { type FieldValues, useFormContext } from 'react-hook-form';
import type { InputElementProps } from '@/components/form/TextInput/types';
import InputElement from '@/components/form/TextInput/InputElement';

export function TextInputContainer<T extends FieldValues>(
  props: Omit<InputElementProps<T>, 'formMethods'>
) {
  const methods = useFormContext<T>();

  const allProps: InputElementProps<T> = {
    ...props,
    formMethods: methods,
  };

  return <InputElement {...allProps} />;
}

export default TextInputContainer;
