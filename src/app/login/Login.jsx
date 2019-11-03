import React from 'react'
import {
  InputText,
  Password,
  Button,
} from '../common'

const Login = () => (
  <form>
    <InputText id="login" name="login" />
    <Password id="password" name="password" />
    <Button type="button">SIGN IN</Button>
  </form>
)

export default Login