import React from 'react'
import { render } from '@testing-library/react-native'

import { ThemeProviderMock } from '../../src/mock/ThemeProvider'
import Details from '../../src/pages/Details'

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
})
let url = 'https://swapi.dev/api/planets/1/'

describe('Pages/Home', () => {
  it('renders details with default props', async () => {
    let props = createTestProps({ route: { params: { url: url } } })
    const { getByTestId } = render(
      <ThemeProviderMock children={<Details {...props} />} />,
    )
    expect(getByTestId('details')).not.toBeNull()
  })
  it('should render snapshot', () => {
    let props = createTestProps({ route: { params: { url: url } } })
    const { toJSON } = render(
      <ThemeProviderMock children={<Details {...props} />} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
