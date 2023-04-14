export interface IUsers {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      name: string;
    };
    state: string;
    city: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  dob: {
    age: number;
    date: string;
  };
  cell: string;
  picture: {
    large: string;
  };
  nat: string;
}
