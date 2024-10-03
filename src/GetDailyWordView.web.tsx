import * as React from 'react';

import { GetDailyWordViewProps } from './GetDailyWord.types';

export default function GetDailyWordView(props: GetDailyWordViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
