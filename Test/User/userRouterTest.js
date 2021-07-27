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
  const userId = '0ZcyKdOeIu7JEPTT3qCf';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IklvZ1RLYnYxbWVwcEhqIiwiaWF0IjoxNjI3MzI5NTfp6YG0g19DNEc8W5D3N_n-M'
  try {
    const res = await axios.post(
      `${path}/user/password/recover`, 
      userId,
      {headers:{'x-access-token': token}}
      );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

async function resetPasswordTest() {
  console.log("=================Test Reset Password=================");
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

async function changePasswordTest() {
  console.log("=================Test Change Password=================");
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



// signupTest();
// signinTest();
recoverPasswordTest();
// resetPasswordTest();
// changePasswordTest();