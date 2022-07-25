import { createContext, useState, useMemo, useContext } from 'react';

const formContext = createContext();

function useForm() {
  const [values, setValues] = useState({});

  const api = {
    values,
    setValues,
    formContext,
  };

  const Form = useFormComponent(api);

  return {
    ...api,
    Form,
  };
}

function useFormComponent(api) {
  const Form = useMemo(
    () =>
      function Form({ children }) {
        const { formContext } = Form.api;

        return (
          <formContext.Provider value={Form.api}>
            <form>{children}</form>
          </formContext.Provider>
        );
      },
    []
  );

  Form.api = api;

  return Form;
}

function Input({ name }) {
  const { values, setValues } = useContext(formContext);

  return (
    <input
      value={values[name]}
      onChange={(e) => {
        e.persist();
        setValues((old) => ({ ...old, [name]: e.target.value }));
      }}
    />
  );
}

export { useForm, Input };
