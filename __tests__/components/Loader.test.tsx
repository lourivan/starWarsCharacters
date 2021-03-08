import React from 'react'
import { render } from '@testing-library/react-native'

import { Loader } from '../../src/components/Loader'
import { ThemeProviderMock } from '../../src/mock/ThemeProvider'

describe('Components/Loader', () => {
  it('renders with default props', async () => {
    const { getByTestId } = render(
      <ThemeProviderMock children={<Loader loading />} />,
    )
    expect(getByTestId('loading')).not.toBeNull()
  })
  it('should render snapshot', () => {
    const { toJSON } = render(
      <ThemeProviderMock children={<Loader loading />} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
