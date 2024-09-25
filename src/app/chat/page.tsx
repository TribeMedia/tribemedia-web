'use client';

import React from 'react';
import MyAssistant from '@/components/my-assistant'; // Adjust the import path as needed
import ApplicationContainer from '@/components/application-container';
export default function ChatPage() {
  return (
    <ApplicationContainer rightPageComponent={<MyAssistant />} />
  );
}