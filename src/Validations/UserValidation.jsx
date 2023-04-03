import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName:yup.string().required("firstName is required"),
  lastName:yup.string().required("lastName is required"),
  email: yup.string().email("Email is valid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 5 characters")
    .max(15, "Password must be 12 characters or less")
    .required("Password is required"),
});
