import { useState, useEffect } from "react";
import { notification } from "antd";
import { Fade } from 'react-awesome-reveal';
import emailjs from "emailjs-com";
// import { SuccessNotification } from "../../components/SuccessNotification/SuccessNotification";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your email has been sent!",
    });
  };

  const openNotificationWithfailedIcon = () => {
    notification["error"]({
      message: "Error",
      description: "Your email has failed sent!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const url = "";
    if (Object.keys(values).length === 3) {
      // emailjs.sendForm('contact_service', 'contact_form', this);
      // axios
      //   .post(url, {
      //     ...values,
      //   })
      //   .then(() => {
      //     setShouldSubmit(true);
      //   });
      // Object.keys(values).forEach(

      interface Person {
        name: string;
        email: string;
      }
     
      const person = values as Person; 
     
      sendUserEmail(person.name, person.email,event.target);
    }
  };
  const sendUserEmail = (name: string, email: string, form: any) => {
    emailjs
      .sendForm(
        "service_sybmgbp",
        "template_xsc9vc8",
        form,
        "ojjaRmoVmRvQRGeix"
      )
      .then((response) => {
        // Show a success message to the user
        console.log("SUCCESS!", response.status, response.text);
        openNotificationWithIcon();
      })
      .catch((err) => {
        // Show an error message to the user
        console.error("FAILED...", err);
        openNotificationWithfailedIcon();
      });
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
