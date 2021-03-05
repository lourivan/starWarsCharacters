export const displayName = (key: string) => {
  const result = key.split('_')
  return result.join(' ')
}
