export const orderStatusOptions = [
  {
    name: "Ordered",
    value: "ordered",
  },
  {
    name: "Preparing",
    value: "preparing",
  },
  {
    name: "Ready",
    value: "ready",
  },
  {
    name: "Delivered",
    value: "delivered",
  },
];

export const status = [
  {
    name: "Ordered",
    value: "ordered",
  },
  {
    name: "Preparing",
    value: "preparing",
  },
  {
    name: "Stitching",
    value: "stitching",
  },
  {
    name: "Ironing",
    value: "ironing",
  },
  {
    name: "Completed",
    value: "completed",
  },
];

export const unit = [
  {
    name: "Inch",
    value: "inch",
  },
  {
    name: "CM",
    value: "cm",
  },
];

export const pantTypeOptions = [
  {
    name: "Full-Size",
    value: "full-size",
  },
  {
    name: "Half-Size",
    value: "half-size",
  },
  {
    name: "3/4-Size",
    value: "3/4-size",
  },
];

export const shirtTypeOptions = [
  {
    name: "Full-Size",
    value: "full-size",
  },
  {
    name: "Half-Size",
    value: "half-size",
  },
];

export const newPant = {
  measurements: {
    H: "",
    W: "",
    S: "",
    F: "",
    D: "",
    HL: "",
    B: "",
    IN: "",
  },
  orderId: "",
  quantity: 1,
  unitOfMeasurement: "inch",
  status: "ordered",
  type: "full-size",
};

export const newShirt = {
  measurements: {
    H: "",
    SO: "",
    SH: "",
    B: "",
    N: "",
    HF: "",
    SL: "",
  },
  orderId: "",
  quantity: 1,
  unitOfMeasurement: "inch",
  status: "ordered",
  type: "full-size",
};

export const newOrder = {
  orderNumber: "",
  orderDate: "",
  schoolName: "",
  standard: "",
  name: "",
  mobileNumber: "",
  status: "ordered",
  quantity: 0,
};

export const DOMAIN = "http://localhost:5000/api";
