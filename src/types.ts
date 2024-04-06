
export interface User {
    id: string;
    name: string;
    email: string;
    picture: string;
  }
  
  export interface UserDetails extends User {
    gender: string;
    phone: string;
    location: {
      street: string;
      city: string;
      state: string;
      postcode: string;
    };
  }
  