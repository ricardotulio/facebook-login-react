import React from 'react'
import renderer from 'react-test-renderer'

import Password from './Password'

test('Properties are passed element', () => {
  const password = renderer.create(
    <Password id="password-id" name="password-name" />
  )
  let tree = password.toJSON()

  expect(tree).toMatchSnapshot()
})

test('Type property cannot be overwritten', () => {
  const password = renderer.create(
    <Password id="password-id" name="password-name" type="text" />
  )
  let tree = password.toJSON()

  expect(tree).toMatchSnapshot()
})