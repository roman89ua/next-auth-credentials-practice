'use client';

import { type FieldValues, useForm, type UseFormProps } from 'react-hook-form';

export function useRegularForm<T extends FieldValues, TContext = unknown>(
  props?: UseFormProps<T, TContext>
) {
  return useForm<T, TContext>(props);
}
