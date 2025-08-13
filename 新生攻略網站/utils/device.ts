export const checkShouldShowDeviceModal = (): boolean => {
  // 檢查用戶是否選擇了不再顯示
  const dontShowAgain = localStorage.getItem('device-recommendation-dismissed');
  
  if (dontShowAgain === 'true') {
    return false;
  }
  
  // 檢查是否為移動設備
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isSmallScreen = window.innerWidth < 768;
  
  // 如果是移動設備或小螢幕，顯示建議彈窗
  return isMobile || isSmallScreen;
};

export const handleDontShowAgain = (dontShow: boolean): void => {
  if (dontShow) {
    localStorage.setItem('device-recommendation-dismissed', 'true');
  }
};