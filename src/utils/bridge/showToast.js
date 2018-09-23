import wxb from 'wx-bridge'

export default (
  {
    icon = 'none',
    ...otherOptions
  }
) => {
  wxb.showToast({
    icon,
    ...otherOptions
  })
}
