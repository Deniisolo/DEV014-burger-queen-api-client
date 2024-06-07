import styles from "./Loginform.module.css"; // Importa el módulo CSS y asigna a 'styles'
import { Formik, FormikHelpers, FormikProps } from "formik";

export function Loginform() {
  interface FormValues {
    email: string;
    password: string;
  }

  interface Errors {
    email?: string;
    password?: string;
  }

  return (
    <section className={styles.section}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values: FormValues) => {
          const errors: Errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props: FormikProps<FormValues>) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Correo"
                className={styles.input}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div>{errors.email && touched.email && errors.email}</div>
              <input
                placeholder="Contraseña"
                className={styles.input}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div>
                {errors.password && touched.password && errors.password}
              </div>
              <button
                className={styles.button}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
}
