import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to GetDailyWord.web.ts
// and on native platforms to GetDailyWord.ts
import GetDailyWordModule from './GetDailyWordModule';
import GetDailyWordView from './GetDailyWordView';
import { ChangeEventPayload, GetDailyWordViewProps } from './GetDailyWord.types';

// Get the native constant value.
export const PI = GetDailyWordModule.PI;

export function hello(): string {
  return GetDailyWordModule.hello();
}

export async function setValueAsync(value: string) {
  return await GetDailyWordModule.setValueAsync(value);
}

const emitter = new EventEmitter(GetDailyWordModule ?? NativeModulesProxy.GetDailyWord);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { GetDailyWordView, GetDailyWordViewProps, ChangeEventPayload };
