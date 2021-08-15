import { useFormikContext } from "formik";
import React from "react";

import ButtonBase from "../ButtonBase";

export default function AppSubmitButton({ children }) {
  const { handleSubmit } = useFormikContext();

  return <ButtonBase onPress={handleSubmit}>{children}</ButtonBase>;
}
