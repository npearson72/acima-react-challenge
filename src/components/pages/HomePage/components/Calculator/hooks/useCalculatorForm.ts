import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { inputFormatValidator } from '../validations';

// Not required for this project, but having a hook generate the schema
// is useful (ex: i18n, context state, etc.)
const useSchema = () => {
  return z.object({
    input: z
      .string()
      .trim()
      .min(1, { message: 'Input required' })
      .transform(value => value.toLowerCase())
      .refine(inputFormatValidator, { message: 'Invalid format' })
  });
};

export type CalculatorSchema = z.infer<ReturnType<typeof useSchema>>;

export const useCalculatorForm = () => {
  const schema = useSchema();

  return useForm<CalculatorSchema>({
    resolver: zodResolver(schema),
    reValidateMode: 'onSubmit'
  });
};
