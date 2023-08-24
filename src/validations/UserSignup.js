import * as yup from "yup";
const atLeastOneChecked = (obj) => {
    return Object.values(obj).some((item) => item.checked);
};

export const UserValidationSchema = yup.object().shape({
    firstName : yup.string().required("*required").min(3, "Name must be at least 3 characters long"),
    lastName : yup.string().required("*required").min(3, "Last Name must be at least 3 characters long"),
    email : yup.string().email("Invalid email").required("*required"),
    number : yup.string().required("*required").min(10, "Invalid number"),
    password : yup.string().min(5, "Password must be minimum 5 characters")
                    .max(12, "Password must be maximum 12 characters").required("*required"),
    confirmPassword : yup.string().min(5, "Password must be minimum 5 characters")
                    .max(12, "Password must be maximum 12 characters").required("*required"),
    dob: yup.date("Invalid Date").required("*required"),
    interests : yup.object().test('at-least-one-checked', 'Select at least one option.', atLeastOneChecked),
    proficiency : yup.object()
});
