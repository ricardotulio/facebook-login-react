import React from 'react'

import Input from '../Input'

const InputText = (props) => {
  const typeText = {
    ...props,
    type: "text",
  }

  return (
    <Input {...typeText} />
  )
}

export default InputText