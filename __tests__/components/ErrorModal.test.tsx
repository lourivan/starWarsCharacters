import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import { ErrorModal } from '../../src/components/ErrorModal'
import { ThemeProviderMock } from '../../src/mock/ThemeProvider'

describe('Components/ErrorModal', () => {
  it('renders ErrorModal with default props', async () => {
    const { getByTestId } = render(
      <ThemeProviderMock children={<ErrorModal loading />} />,
    )
    expect(getByTestId('errorModal')).not.toBeNull()
  })
  it('should render snapshot', () => {
    const { toJSON } = render(
      <ThemeProviderMock children={<ErrorModal loading />} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
