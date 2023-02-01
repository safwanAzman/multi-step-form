import * as Yup from "yup";
const phoneRegExp = /^(\+\s?)?(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
export const schema = Yup.object().shape({
    name: Yup.string()
    .required("This field is required"),
    email: Yup.string()
    .required("This field is required")
    .email(),
    phone: Yup
    .string().required("This field is required")
    .matches(phoneRegExp, 'Phone number is not valid')
});