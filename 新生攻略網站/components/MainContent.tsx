import React from 'react';
import { HomePage } from './HomePage';
import { CoursePage } from './CoursePage';
import { OrientationPage } from './OrientationPage';
import { ResourcesPage } from './ResourcesPage';
import { SubjectDetailPage } from './SubjectDetailPage';

interface MainContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function MainContent({ activeTab, setActiveTab }: MainContentProps) {
  // Handle subject detail pages
  if (activeTab.startsWith('subject-')) {
    const subjectId = activeTab.replace('subject-', '');
    return <SubjectDetailPage key={`subject-${subjectId}`} subjectId={subjectId} setActiveTab={setActiveTab} />;
  }

  switch (activeTab) {
    case 'home':
      return <HomePage key="home-page" setActiveTab={setActiveTab} />;
    case 'courses':
      return <CoursePage key="courses-page" setActiveTab={setActiveTab} />;
    case 'orientation':
      return <OrientationPage key="orientation-page" />;
    case 'resources':
      return <ResourcesPage key="resources-page" />;
    default:
      return <HomePage key="home-page-default" setActiveTab={setActiveTab} />;
  }
}