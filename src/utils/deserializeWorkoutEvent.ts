import type { HKWorkoutEventRaw } from '../native-types'
import type { HKWorkoutEvent } from '../types'

function deserializeWorkoutEvent(event: HKWorkoutEventRaw): HKWorkoutEvent {
  return {
    ...event,
    dateInterval: {
      start: new Date(event.dateInterval.start),
      end: new Date(event.dateInterval.end),
    },
  }
}

export default deserializeWorkoutEvent
