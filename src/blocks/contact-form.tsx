import { yupResolver } from "@hookform/resolvers/yup";

import { memo, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  Box,
  Button,
  chakra,
  type ChakraProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  type ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";

interface ContactFormValues {
  fullName: string;
  email: string;
  companyName: string;
  message: string;
  phone?: string;
  accept: boolean;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// string()
//   .nullable()
//   .transform((o, c) => (o === "" ? null : c))
//   .min(10, "This value must be minimum of 10 characters.");

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(6, "Full name must be at least 6 characters long")
      .required("Full name is a required field")
      .matches(
        /^[a-zA-Z.]+\s+[a-zA-Z.]+$/,
        "Full name must contain only letters",
      ),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    companyName: yup
      .string()
      .nullable(true)
      .min(3, "Company name must be at least 3 characters long")
      .transform((_, val) => (val === "" ? null : val)),
    phone: yup
      .string()
      .nullable(true)
      .matches(phoneRegExp, "Phone number is not valid")
      .transform((_, val) => (val === val ? val : null)),
    message: yup.string().required("Message is a required field"),
    // accept: yup
    //   .boolean()
    //   .oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

const ContactForm: React.FC<ChakraProps & ThemingProps> = ({
  colorScheme = "brand",
}) => {
  const [
    formData, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFormData,
  ] = useState<ContactFormValues>();

  const inactiveColor = useColorModeValue("gray.500", "gray.400");

  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm<ContactFormValues>({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormValues) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
      }, 4000);
    });
  };

  const inputBG = useColorModeValue("gray.50", "gray.800");

  return (
    <Box>
      <div className="hb-p-63632202e0a3290007104a56-2"></div>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.honeybook.com/p.png?pid=63632202e0a3290007104a56"
      />
    </Box>
  );
};

export default memo(ContactForm);
