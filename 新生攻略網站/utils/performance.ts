export const checkPerformanceMode = (): boolean => {
  // 首先檢查用戶手動設定
  const savedPreference = localStorage.getItem('performance-mode');
  if (savedPreference === 'true') {
    return true;
  } else if (savedPreference === 'false') {
    return false;
  }
  
  // 更寬鬆的性能檢測 - 只在真正的低端設備上啟用
  const veryLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 1;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const veryLowMemory = navigator.deviceMemory && navigator.deviceMemory < 1;
  
  console.log('Performance check:', {
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory,
    reducedMotion,
    veryLowEndDevice,
    veryLowMemory
  });
  
  // 只有在極端情況下才啟用性能模式
  return (veryLowEndDevice && veryLowMemory) || reducedMotion;
};

export const initializePerformanceMode = (
  setPerformanceMode: (mode: boolean) => void
): (() => void) => {
  const handlePerformanceMode = (enabled: boolean) => {
    setPerformanceMode(enabled);
    if (enabled) {
      document.documentElement.classList.add('performance-mode');
      console.log('Performance mode enabled');
    } else {
      document.documentElement.classList.remove('performance-mode');
      console.log('Performance mode disabled - animations enabled');
    }
  };

  const initialMode = checkPerformanceMode();
  handlePerformanceMode(initialMode);
  
  // 監聽動畫偏好變化
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handleMotionChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      handlePerformanceMode(true);
    } else {
      // 只有在用戶沒有手動設定性能模式時才自動恢復
      const savedPreference = localStorage.getItem('performance-mode');
      if (savedPreference !== 'true') {
        handlePerformanceMode(false);
      }
    }
  };
  
  motionQuery.addEventListener('change', handleMotionChange);

  return () => {
    motionQuery.removeEventListener('change', handleMotionChange);
  };
};