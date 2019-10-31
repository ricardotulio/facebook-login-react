import React from 'react'
import renderer from 'react-test-renderer'

import InputText from './InputText'

test('Properties are passed element', () => {
  const inputText = renderer.create(
    <InputText id="inputText-id" name="inputText-name" />
  )
  let tree = inputText.toJSON()

  expect(tree).toMatchSnapshot()
})

test('Type property cannot be overwritten', () => {
  const inputText = renderer.create(
    <InputText id="inputText-id" name="inputText-name" type="password" />
  )
  let tree = inputText.toJSON()

  expect(tree).toMatchSnapshot()
})