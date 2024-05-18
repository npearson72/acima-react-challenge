'use client';

import { Box, Button, Stack, TextInput, Title } from '@mantine/core';
import { useState } from 'react';
import { formatCurrency } from '~/utils';
import styles from './Calculator.module.scss';
import { calculateAction } from './actions';
import { CalculatorSchema, useCalculatorForm } from './hooks';

const DEFAULT_DISPLAY = formatCurrency(0);

export const Calculator = () => {
  const form = useCalculatorForm();
  const [display, setDisplay] = useState(DEFAULT_DISPLAY);

  const {
    register,
    reset,
    setError,
    formState: { errors }
  } = form;

  const handleSubmit = async (formData: CalculatorSchema) => {
    const { data, error } = await calculateAction(formData);

    if (error) {
      setError('input', { message: error.message });

      return;
    }

    setDisplay(formatCurrency(data.total));
  };

  const handleReset = () => {
    setDisplay(DEFAULT_DISPLAY);
    reset();
  };

  return (
    <Box w={{ base: '100%', xs: 500 }}>
      <Title my="lg" className={styles.display}>
        {display}
      </Title>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Stack gap="xs">
          <TextInput
            {...register('input')}
            placeholder="Example: A+B"
            classNames={styles}
            error={errors.input?.message}
          />

          <Button type="submit" size="md" mt="md" color="gray.9">
            Calculate
          </Button>

          <Button
            type="reset"
            size="md"
            variant="white"
            color="gray.9"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
