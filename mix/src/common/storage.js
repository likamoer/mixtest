const KEY_DISPLAY_REALTIME_EXPOSURE_TIP = 'display_realtime_exposure_tip'

export function shouldDisplayRealtimeExposureTip() {
  return localStorage.getItem(KEY_DISPLAY_REALTIME_EXPOSURE_TIP) !== '1'
}

export function setRealtimeExposureTipDisplayed() {
  return localStorage.setItem(KEY_DISPLAY_REALTIME_EXPOSURE_TIP, '1')
}
