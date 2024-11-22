import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/UserSlice";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className=" flex flex-col gap-2">
      <label
        className="font-semibold text-slate-600"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="text-input font-semibold px-2 py-1 rounded-lg"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="font-semibold px-2 py-1 rounded-lg"
        rows={5}
        {...field}
        {...props}
      ></textarea>

      {meta.touched && meta.error ? (
        <div className="error text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyNumberInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.id || props.name}
        className="font-semibold text-slate-600"
      >
        {label}
      </label>
      <input
        className="text-input font-semibold px-2 py-1 rounded-lg"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyDatePicker = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  //   console.log(field, "meta", meta);
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-semibold text-slate-600"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="text-input font-semibold px-2 py-1 rounded-lg"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyDateTimePicker = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  //   console.log(field, "meta", meta);
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-semibold text-slate-600"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="text-input font-semibold px-2 py-1 rounded-lg"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently from other input types: select and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" className="mr-4 " {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        className="mr-4 font-semibold text-slate-600"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        className="font-semibold px-2 py-1 rounded-lg"
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const BookACallForm = ({ modalHandeler }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      date_of_birth: "",
      phoneNumber: "",
      address: "",
      departureDateTime: "",
      returnDateTime: "",
      departureFromCity: "",
      departureFromCountry: "",
      destinationCity: "",
      destinationCountry: "",
      acceptedTerms: false, // added for our checkbox
      fare: "", // added for our select
    },
  ]);

  return (
    <div className="w-full">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          date_of_birth: "",
          phoneNumber: "",
          address: "",
          departureDateTime: "",
          returnDateTime: "",
          departureFromCity: "",
          departureFromCountry: "",
          destinationCity: "",
          destinationCountry: "",
          acceptedTerms: false, // added for our checkbox
          fare: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          //   jobType: Yup.string()
          //     .oneOf(
          //       ["designer", "development", "product", "other"],
          //       "Invalid Job Type"
          //     )
          //     .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // setFormValues((prev) => [...prev, values]);
          dispatch(addUser(values));

          toast.success("Booked sucessfuly", {
            autoClose: 800,
            theme: "light",
            className: "w-fit  h-fit py-0",
            closeButton: false,
            hideProgressBar: true,
            position: "top-center",
          });

          modalHandeler();
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 400);
        }}
      >
        <Form className="w-full flex gap-5 flex-col text-black">
          <div className="w-full flex flex-col md:flex-row gap-5 ">
            <div className="md:w-1/2 px-2 flex flex-col gap-5">
              <h2 className="text-base font-bold text-blue-500">
                Personal Information
              </h2>
              <div className="w-full flex flex-col md:flex-row gap-2">
                <MyTextInput
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <MyTextInput
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <MyDatePicker
                label={"Date of birth"}
                name="date_of_birth"
                type="date"
              />

              <div className="w-full flex flex-col md:flex-row gap-2">
                <MyTextInput
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                />

                <MyNumberInput
                  name="phoneNumber"
                  type="number"
                  placeholder="phoneNumber"
                />
              </div>

              <MyTextArea
                name="address"
                placeholder="type your Address here..."
              />
            </div>

            <div className="md:w-1/2 px-2 flex flex-col gap-5">
              <h2 className="text-base font-bold text-blue-500">
                Travel Information
              </h2>
              <MyDateTimePicker
                label={"Departure Date & Time"}
                type="datetime-local"
                name="departureDateTime"
                id="departureDateTime"
              />
              <MyDateTimePicker
                label={"Return Date & Time"}
                type="datetime-local"
                name="returnDateTime"
                id="returnDateTime"
              />

              <div className="w-full flex flex-col md:flex-row gap-2">
                <MyTextInput
                  label={"Departure City"}
                  name="departureFromCity"
                  type="text"
                  placeholder="city"
                />
                <MyTextInput
                  label={"Departure Country"}
                  name="departureFromCountry"
                  type="text"
                  placeholder="country"
                />
              </div>

              <div className="w-full flex flex-col md:flex-row gap-2">
                <MyTextInput
                  label={"Destination City"}
                  name="destinationCity"
                  type="text"
                  placeholder="city"
                />
                <MyTextInput
                  label={"Destination Country"}
                  name="destinationCountry"
                  type="text"
                  placeholder="country"
                />
              </div>

              <MySelect label="Fare" name="fare">
                <option value="One-way">One-way</option>
                <option value="Round-Trip">Round-Trip</option>
              </MySelect>
            </div>
          </div>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button
            type="submit"
            className="text-white text-sm mx-auto md:mx-0 font-semibold px-2 py-1 rounded-lg bg-blue-500 w-fit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookACallForm;
