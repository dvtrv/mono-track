export const generateId = () => {
  const startSeed = 1770653878117
  const dateSeed = (Date.now() - startSeed).toString(36)
  const randomSeed = Math.round(Math.random() * 1000).toString(36)
  return randomSeed + dateSeed
}
