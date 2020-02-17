import React, { useState, createContext } from 'react';
import {ScheduleArray, ClassTypes} from '../../Data/schedule';

export const ScheduleContext = createContext();
export const ClassContext = createContext();

export const ScheduleProvider = props => {
  const [schedule, setSchedule] = useState(ScheduleArray); 
  const [types, setTypes] = useState(ClassTypes);

  return (
    <ScheduleContext.Provider value={[schedule, setSchedule, types, setTypes]}>
      {props.children}
    </ScheduleContext.Provider>
  );
};