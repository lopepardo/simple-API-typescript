interface Customer {
  id: number;
  name: string;
  email: string;
}

const customers: Customer[] = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  { id: 3, name: "Bob Smith", email: "bobsmith@example.com" },
];

const getCustomers = (): Customer[] => {
  return customers;
};

const getCustomerById = (id: number): Customer | undefined => {
  return customers.find((c) => c.id === id);
};

const createCustomer = (customer: Customer): Customer => {
  const newCustomer = { ...customer, id: customers.length + 1 };
  customers.push(newCustomer);
  return newCustomer;
};

export { Customer, getCustomers, getCustomerById, createCustomer };
