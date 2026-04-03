import React from 'react';
import { WifiOff } from 'lucide-react';
import { useNetworkStatus } from '../hooks';

export const OfflineIndicator = () => {
  const isOnline = useNetworkStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-red-900/90 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-red-700 backdrop-blur-sm">
      <WifiOff className="w-4 h-4" />
      <span className="text-sm font-medium">Offline Mode</span>
    </div>
  );
};
