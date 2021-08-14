import axios from 'axios';

const path = 'http://localhost:3000'

async function signupTest() {
  console.log("=================Test Signup=================");
  const user = {
    email: 'alexunio28@gmail.com',
    name: 'Jose',
    lastName: 'Alfonso',
    password: 'jose123123'
  }

  try {
    const res = await axios.post(`${path}/signup/`, user);
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
}

async function signinTest() {
  console.log("=================Test Signin=================");
  const user = {
    email: 'alexunio28@gmail.com',
    password: 'jose123123'
  }
  try {
    const res = await axios.post(`${path}/signin/`, user);
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
}

async function recoverPasswordTest() {
  console.log("=================Test Recover Password=================");
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRwRHVhTWlvZ1RLYnYxbWVwcEhqIiwiaWF0IjoxNjI3ODYxOTUzfQ.iaq3wtlyiYwZFqxC_53Z7ZsYGgyZwFaWV1-znRuAn4E'
  try {
    const res = await axios.post(
      `${path}/user/password/recover`,
      {headers:{'x-access-token': token}}
      );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

async function resetPasswordTest() {
  console.log("=================Test Reset Password=================");
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRwRHVhTWlvZ1RLYnYxbWVwcEhqIiwiaWF0IjoxNjI3ODYxOTUzfQ.iaq3wtlyiYwZFqxC_53Z7ZsYGgyZwFaWV1-znRuAn4E'
  const newPassword = 'jose123123'
  try {
    const res = await axios.post(
      `${path}/user/password/reset`,
      {newPassword},
      {headers:{'x-access-token': token}}
    );
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
}

async function changePasswordTest() {
  console.log("=================Test Change Password=================");
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRwRHVhTWlvZ1RLYnYxbWVwcEhqIiwiaWF0IjoxNjI3ODYxOTUzfQ.iaq3wtlyiYwZFqxC_53Z7ZsYGgyZwFaWV1-znRuAn4E'
  const newPassword = {
    oldPassword: 'jose123123',
    newPassword: 'PepePepon',
  }
  try {
    const res = await axios.post(
      `${path}/user/password/change`,
      newPassword,
      {headers:{'x-access-token': token}}
    );
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
}

async function getProfile(){
  console.log("=================Test User Profile=================");
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRwRHVhTWlvZ1RLYnYxbWVwcEhqIiwiaWF0IjoxNjI3ODYxOTUzfQ.iaq3wtlyiYwZFqxC_53Z7ZsYGgyZwFaWV1-znRuAn4E';
  try {
    const res = await axios.get(`${path}/user/profile`,{headers:{'x-access-token': token}});
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
}

// signupTest();
// signinTest();
// recoverPasswordTest();
// resetPasswordTest();
// changePasswordTest();
getProfile();