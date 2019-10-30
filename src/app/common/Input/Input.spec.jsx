import React from 'react'
import renderer from 'react-test-renderer'

import Input from './Input'

test('Properties are passed to input element', () => {
  const input = renderer.create(<Input id="input-id" name="input-name" />)
  let tree = input.toJSON()

  expect(tree).toMatchSnapshot()
})