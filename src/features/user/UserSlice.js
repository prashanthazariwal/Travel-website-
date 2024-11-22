import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  users: [
    {
      acceptedTerms: true,
      address: "H.No 3149 A, Sector 3",
      date_of_birth: "2024-11-01",
      departureDateTime: "2024-11-13T06:50",
      departureFromCity: "fsdfsdf",
      departureFromCountry: "sfsdfsd",
      destinationCity: "Faridabad",
      destinationCountry: "India",
      email: "prashanthazariwal999@gmail.com",
      fare: "Round-Trip",
      firstName: "Prashant",
      id: "dJg2a3GSyq63wpzS3ONLw",
      lastName: "Hazariwal",
      phoneNumber: 8920208748,
      returnDateTime: "2024-11-17T06:50",
    },
  ],
};



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {

      const userdetails = {  ...action.payload };
      //   state.users?.push(userdetails);
      state.users = [...state.users, userdetails];
      console.log(
        "Updated state after addUser:",
        JSON.parse(JSON.stringify(state.users))
      ); // Log state here
    },
  },
});

export const { addUser } = userSlice.actions;

const UsersReducer = userSlice.reducer;

export default UsersReducer;
