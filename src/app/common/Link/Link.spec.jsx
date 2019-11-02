import React from 'react'
import renderer from 'react-test-renderer'

import Link from './Link'

test('must render link component', () => {
  const link = renderer.create(
    <Link to="/home">Click Here</Link>
  )
  let tree = link.toJSON()

  expect(tree).toMatchSnapshot()
})