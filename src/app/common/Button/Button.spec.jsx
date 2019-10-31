import React from 'react'
import renderer from 'react-test-renderer'

import Button from './Button'

test('Properties are passed to element', () => {
  const button = renderer.create(
    <Button type="button" onclick="() => {}">Click here</Button>
  )
  let tree = button.toJSON()

  expect(tree).toMatchSnapshot()
})