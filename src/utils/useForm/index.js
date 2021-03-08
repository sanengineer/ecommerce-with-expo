import { useState } from "react";

const useForm = (initalValue) => {
  const [form, setForm] = useState(initalValue);

  return [
    form,
    (formType, formValue) => {
      if (formType === "reset") {
        return setForm(initalValue);
      }

      return setForm({ ...form, [formType]: formValue });
    },
  ];
};

export default useForm;
