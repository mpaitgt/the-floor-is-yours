import React, { useState, createContext } from 'react';
import {ScheduleArray} from '../../Data/schedule';

export const ScheduleContext = createContext();
// export const ClassContext = createContext();

export const ScheduleProvider = props => {
  const [schedule, setSchedule] = useState(ScheduleArray); 
  // const [types, setTypes] = useState(ClassTypes);

  return (
    <ScheduleContext.Provider value={[schedule, setSchedule]}>
      {props.children}
    </ScheduleContext.Provider>
  );
};