import { useState, useCallback, useEffect } from "react";

interface FormState {
  name: string;
  cedula: string;
  telefono: string;
}

interface Errors {
  name?: string;
  cedula?: string;
  telefono?: string;
}

export function useClientForm(initialState: FormState) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = useCallback((field: keyof FormState, value: string) => {
    setFormState(prevState => ({ ...prevState, [field]: value }));
  }, []);

  const validate = useCallback(() => {
    const newErrors: Errors = {};
    if (!formState.name) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formState.cedula) {
      newErrors.cedula = "La cédula es requerida";
    } else if (!/^[0-9]+$/.test(formState.cedula)) {
      newErrors.cedula = "La cédula solo debe contener números";
    }
    if (!formState.telefono) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^[0-9]+$/.test(formState.telefono)) {
      newErrors.telefono = "El teléfono solo debe contener números";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formState]);

  const resetForm = useCallback(() => {
    setFormState(initialState);
    setErrors({});
  }, [initialState]);

  return {
    formState,
    errors,
    handleChange,
    validate,
    resetForm,
  };
}
