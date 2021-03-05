import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import { Header, HeaderProps } from '../../src/components/Header'
import { ThemeProviderMock } from '../../src/mock/ThemeProvider'

describe('Components/Header', () => {
  let props: HeaderProps = {
    type: 'default',
  }

  it('renders with default props', async () => {
    const { getByTestId, update } = render(
      <ThemeProviderMock>
        <Header {...props} />
      </ThemeProviderMock>,
    )
    expect(getByTestId('Header_component_default_image')).not.toBeNull()
  })
})
