import { useState } from 'react';

export const useForm = ( initialDataForm = {} ) => {

    const [formState, setFormState] = useState( initialDataForm );

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    const onResetForm = () => {
        setFormState(initialDataForm);
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
