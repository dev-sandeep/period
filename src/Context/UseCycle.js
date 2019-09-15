import { useContext } from 'react';
import { CycleContext } from "../Context/CycleContext";

const UseCycle = () => {
  const [state, setState] = useContext(CycleContext);

  function changeSelectDateVisibility(e) {
    setState(state => ({ ...state, dayModalVisibilityStatus: !state.dayModalVisibilityStatus }));
  }

  function changeSettingeVisibility(e) {
    setState(state => ({ ...state, displaySettingVisibilityStatus: !state.displaySettingVisibilityStatus }));
  }

  function createEvent(eventData) {
    setState(state => ({ ...state, events: [...state.events, eventData] }));
  }

  function updateTempEvent(eventData) {
    // setState(state => ({ ...state, currentTrackIndex: index, isPlaying: true }));
    setState(state => ({ ...state, tempEvent: eventData }));
  }
  return {
    dayModalVisibilityStatus: state.dayModalVisibilityStatus,
    displaySettingVisibilityStatus: state.displaySettingVisibilityStatus,
    changeSelectDateVisibility,
    changeSettingeVisibility,
    events: state.events,
    createEvent,
    tempEvent: state.tempEvent,
    updateTempEvent
  }
};

export default UseCycle;
