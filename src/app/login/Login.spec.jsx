import React from 'react'
import renderer from 'react-test-renderer'

import Login from './Login'

test('login form must be built correctly', () => {
  const login = renderer.create(<Login />)
  let tree = login.toJSON()

  expect(tree).toMatchSnapshot()
})