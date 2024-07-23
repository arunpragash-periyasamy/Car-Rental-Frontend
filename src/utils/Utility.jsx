

import { message } from "antd";
import dayjs from "dayjs";
import { toast } from "react-toastify";


export const firstCaps = (name) => {
    return (name !== undefined && name !== null) && name.trim(" ").charAt(0).toUpperCase() + name.slice(1);
} 


export const validateAndAdjustTimes = (form) => {
  const pickupDate = form.getFieldValue("pickupDate");
  const returnDate = form.getFieldValue("returnDate");
  console.log("Raw pickup date:", pickupDate);
  console.log("Raw return date:", returnDate);

  if (
    returnDate.isAfter(pickupDate.add(1, "hour")) ||
    returnDate.isSame(pickupDate.add(1, "hour"))
  ) {
    toast.success("Return date and time are valid.");
  } else {
    toast.error(
      "Return date and time must be greater than 1 hour after the pickup date and time."
    );
    return false;
  }

    return true;
};
  

export const disabledDate = (current) => {
  return current && current < dayjs().endOf("day");
};


export const dateToString = (date) => {
  return dayjs(date).toISOString();
}


export const transformString = (input) => {
  return input
    .toUpperCase() // Convert all characters to uppercase
    .replace(/[^A-Z0-9]/g, ""); // Remove all non-alphanumeric characters
}

export const extractNumbers = (input)=> {
  return input.replace(/\D/g, "");
}