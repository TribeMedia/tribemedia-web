'use client';

import MyAssistant from '@/components/my-assistant';
import ApplicationContainer from '@/components/application-container';

export default function MyAssistantPage() {
  return (
    <ApplicationContainer rightPageComponent={<MyAssistant />} />
  );
}