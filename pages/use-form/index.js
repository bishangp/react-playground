import { useForm, Input } from '../../lib/hooks/use-form';

const UseFormDemo = () => {
  const { Form, values } = useForm();

  return (
    <div>
      <h1>a use-form hook</h1>
      <Form>
        <Input name='foo' />
        <div>{values.foo}</div>
      </Form>
    </div>
  );
};

export default UseFormDemo;
