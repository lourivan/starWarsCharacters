import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ListItem, ItemProps } from '../../src/components/ListItem'

describe('Components/ListItem', () => {
  let props: ItemProps = {
    title: 'Page Title',
    onPress: jest.fn(),
  }

  it('renders with default props', () => {
    const { queryByText } = render(<ListItem {...props} />)
    expect(queryByText('Page Title')).not.toBeNull()
  })

  it('renders with description props', () => {
    props.description = 'subtitle'
    const { queryByText } = render(<ListItem {...props} />)
    expect(queryByText('subtitle')).not.toBeNull()
  })

  it('fire event onPress', async () => {
    const { queryByText } = render(<ListItem {...props} />)
    fireEvent.press(queryByText('Page Title'))
    expect(props.onPress).toHaveBeenCalledTimes(1)
  })

  it('should render snapshot', () => {
    const { toJSON } = render(<ListItem {...props} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
