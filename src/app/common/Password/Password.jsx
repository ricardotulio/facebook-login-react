import React from 'react'

import Input from '../Input'

const Password = (props) => {
  const typePassword = {
    type: "password",
    ...props,
  }

  return (
    <Input {...typePassword} />
  )
}

export default Password