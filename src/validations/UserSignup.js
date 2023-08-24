import * as yup from "yup";

export const UserValidationSchema = yup.object().shape({
    firstName : yup.string().required("*required"),
    lastName : yup.string().required("*required"),
    email : yup.string().email("Invalid email").required("*required"),
    number : yup.string().required("*required"),
    password : yup.string().min(5, "Password must be minimum 5 characters")
                    .max(12, "Password must be maximum 12 characters").required("*required"),
    confirmPassword : yup.string().min(5, "Password must be minimum 5 characters")
                    .max(12, "Password must be maximum 12 characters").required("*required")
});