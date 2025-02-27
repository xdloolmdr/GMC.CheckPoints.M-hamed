import * as yup from "yup";
const nameSchema = yup
  .string()
  .required("i need a name")
  .min(6, "not cain")
  .max(42, "okay now stop this none sense");
const RegistrationSchema = yup.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: yup
    .string()
    .email()
    .required("if you don't have an email create one "),
  phone: yup.string().test((val) => {
    if (/i/.test(val)) return true;
    return "not a valid phone number";
  }),
  address:yup.array(yup.string("i will find you and i will kill you")).required().min(1).max(3),
});
export default RegistrationSchema;