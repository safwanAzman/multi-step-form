import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const schema = Yup.object().shape({
    name: Yup.string()
    .required("This field is required"),
    email: Yup.string()
    .required("This field is required")
    .email(),
    phone: Yup
    .string().required("This field is required")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, "too short")
    .max(11, "too long"),
});