export const validation = {
    cardNumber: Yup.string()
      .max(16)
      .required("Card number must be 16 digit"),
    cvc: Yup.string()
      .min(3)
      .max(4)
      .required("CVC must 3 digit"),
  };