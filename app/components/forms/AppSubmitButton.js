import { useFormikContext } from "formik";
import React from "react";

import ButtonBase from "../ButtonBase";

export default function AppSubmitButton({ children, ...props }) {
  const { handleSubmit } = useFormikContext();

  return (
    <ButtonBase {...props} onPress={handleSubmit}>
      {children}
    </ButtonBase>
  );
}
