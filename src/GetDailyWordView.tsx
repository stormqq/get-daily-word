import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { GetDailyWordViewProps } from './GetDailyWord.types';

const NativeView: React.ComponentType<GetDailyWordViewProps> =
  requireNativeViewManager('GetDailyWord');

export default function GetDailyWordView(props: GetDailyWordViewProps) {
  return <NativeView {...props} />;
}
