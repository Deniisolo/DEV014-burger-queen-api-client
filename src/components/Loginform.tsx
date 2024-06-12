import styles from "./Loginform.module.css";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { IoIosAlert } from "react-icons/io";
import { loginApi } from "../services /APIService";

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
        onSubmit={async (
          values: FormValues,
          { setSubmitting, setFieldError }: FormikHelpers<FormValues>
        ) => {
          try {
            const data = await loginApi(values.email, values.password);
            localStorage.setItem("token", data.token);
            window.location.href = "/waiterview";
          } catch (error) {
            setFieldError("email", "Invalid email or password");
          } finally {
            setSubmitting(false);
          }
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
              <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
              </style>
              <input
                placeholder="Correo"
                className={styles.input}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className={styles.errorMessage}>
                {errors.email && touched.email && (
                  <>
                    <IoIosAlert className={styles.icon} />
                    {errors.email}
                  </>
                )}
              </div>
              <input
                placeholder="Contraseña"
                className={styles.input}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className={styles.errorMessage}>
                {errors.password && touched.password && (
                  <>
                    <IoIosAlert className={styles.icon} />
                    {errors.password}
                  </>
                )}
              </div>
              <button
                className={styles.button}
                type="submit"
                disabled={isSubmitting}
              >
                Ingresar
              </button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
}
