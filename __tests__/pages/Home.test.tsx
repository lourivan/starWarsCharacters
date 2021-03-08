import React from 'react'
import { render } from '@testing-library/react-native'

import { ThemeProviderMock } from '../../src/mock/ThemeProvider'
import Home from '../../src/pages/Home'

describe('Pages/Home', () => {
  it('renders home with default props', async () => {
    const { getByTestId } = render(<ThemeProviderMock children={<Home />} />)
    expect(getByTestId('home')).not.toBeNull()
  })
  it('should render snapshot', () => {
    const { toJSON } = render(<ThemeProviderMock children={<Home />} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
