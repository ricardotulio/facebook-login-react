import React from 'react'
import renderer from 'react-test-renderer'

import LoginContainer from './LoginContainer'

test('Componet must be render as expected', () => {
  const loginContainer = renderer.create(<LoginContainer />)
  const tree = loginContainer.toJSON()

  expect(tree).toMatchSnapshot()
})