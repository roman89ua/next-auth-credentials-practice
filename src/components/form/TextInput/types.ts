import type { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { WithRequired } from '@/components/sharedTypes';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type InputModifiedProps = WithRequired<InputProps, 'name'>;

interface FormMethods<T extends FieldValues> {
  formMethods: UseFormReturn<T>;
}

export type InputElementProps<T extends FieldValues> = {
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: InputModifiedProps;
} & FormMethods<T>;
