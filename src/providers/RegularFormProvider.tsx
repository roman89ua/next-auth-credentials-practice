import { type ReactNode } from 'react';
import {
  type FieldValues,
  FormProvider,
  type UseFormReturn,
} from 'react-hook-form';

export function RegularFormProvider<T extends FieldValues>({
  children,
  ...rest
}: {
  children: ReactNode;
} & UseFormReturn<T>) {
  return <FormProvider {...rest}>{children}</FormProvider>;
}

export default RegularFormProvider;
