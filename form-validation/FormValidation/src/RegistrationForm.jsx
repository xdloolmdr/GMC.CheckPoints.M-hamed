import { Formik, Field, Form, ErrorMessage, FieldArray } from "Formik";
import RegistrationSchema from "./RegistrationSchema";

export default function RegistrationForm() {
  return (
    <Formik
      initialValues={{
        FirstName: "",
        LastName: "",
        email: "",
        Phone: "",
        addresses: [],
      }}
      validationSchema={RegistrationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <Field
            className=""
            name="FirstName"
            placeholder="First Name please"
            type="text"
          />
          <ErrorMessage
            component="p"
            name="FirstName"
            className="error-message"
          />
        </div>
        <div>
          <Field
            className=""
            name="LasttName"
            placeholder="Last Name please"
            type="text"
          />
          <ErrorMessage
            component="p"
            name="LasstName"
            className="error-message"
          />
        </div>
        <div>
          <Field
            className=""
            name="email"
            placeholder="email please"
            type="email"
          />
          <ErrorMessage component="p" name="email" className="error-message" />
        </div>
        <div>
          <Field
            className=""
            name="phone"
            placeholder="enter a phone number"
            type="text"
          />
          <ErrorMessage component="p" name="phone" className="error-message" />
        </div>
        <div>
          <FieldArray
            render={({ form, push, remove }) => {
              return (
                <>
                  {form.values.addresses.map((_, i) => (
                    <div key={i}>
                      <Field
                        className=""
                        placeholder={"addresses " + i}
                        name={"addresses." + i}
                        type="text"
                      />
                      <button type="button" onClick={() => remove(i)}>
                        -
                      </button>
                    </div>
                  ))}
                  {form.values.addresses.length < 3 && (
                    <button type="button" onClick={() => push("")}>
                      +
                    </button>
                  )}
                </>
              );
            }}
            className=""
            name="addresses"
          />
          <ErrorMessage
            component="p"
            name="address"
            className="error-message"
          />
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
}
