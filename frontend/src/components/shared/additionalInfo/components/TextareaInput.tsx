import { useField } from 'formik';
import React from 'react';

type InputProps = {
  name: string;
};

const TextareaInput: React.FC<InputProps> = props => {
  const [field, meta] = useField(props.name);

  return (
    <textarea
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      rows={11}
      cols={53}
      className="textarea"
    />
  );
};

export default TextareaInput;
