export type BackgroundVariant = 'home' | 'courses' | 'orientation' | 'resources' | 'subject';

export const getBackgroundVariant = (activeTab: string): BackgroundVariant => {
  if (activeTab.startsWith('subject-')) {
    return 'subject';
  }
  switch (activeTab) {
    case 'courses':
      return 'courses';
    case 'orientation':
      return 'orientation';
    case 'resources':
      return 'resources';
    default:
      return 'home';
  }
};