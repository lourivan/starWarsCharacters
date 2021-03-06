import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import { Header, HeaderProps } from '../../src/components/Header'
import { ThemeProviderMock } from '../../src/mock/ThemeProvider'

describe('Components/Header', () => {
  let props: HeaderProps = {
    type: 'default',
    onBack: jest.fn(),
  }

  let pageProps: HeaderProps = {
    type: 'page',
    title: 'Page',
    subtitle: 'subtitle',
  }

  const defaultHeaderId = 'Header_component_default_image'

  it('renders Header with default props', async () => {
    const { getByTestId } = render(
      <ThemeProviderMock children={<Header {...props} />} />,
    )
    expect(getByTestId('Header_component_default_image')).not.toBeNull()
  })

  it('renders Header with type props', async () => {
    const page = { ...props, ...pageProps }
    const { queryByText } = render(
      <ThemeProviderMock children={<Header {...page} />} />,
    )
    expect(queryByText('Page')).not.toBeNull()
    expect(queryByText('subtitle')).not.toBeNull()
  })

  it('fire event onBack', async () => {
    const page = { ...props, ...pageProps }
    const { getByTestId } = render(
      <ThemeProviderMock children={<Header {...page} />} />,
    )
    fireEvent.press(getByTestId('Header_component_button_back'))
    expect(props.onBack).toHaveBeenCalledTimes(1)
  })

  it('should render snapshot', () => {
    const { toJSON } = render(
      <ThemeProviderMock children={<Header {...props} />} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
