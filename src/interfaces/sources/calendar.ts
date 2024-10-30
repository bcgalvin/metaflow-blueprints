import { EventPersistence, EventSourceFilter } from '../types';

/**
 * CalendarEventSource describes a time based dependency. One of the fields (schedule,
 * interval, or recurrence) must be passed. Schedule takes precedence over interval;
 * interval takes precedence over recurrence
 */
export interface CalendarEventSource {
  /**
   * ExclusionDates defines the list of DATE-TIME exceptions for recurring events.
   */
  readonly exclusionDates?: string[];
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * Interval is a string that describes an interval duration, e.g. 1s, 30m, 2h...
   */
  readonly interval?: string;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Persistence hold the configuration for event persistence
   */
  readonly persistence?: EventPersistence;
  /**
   * Schedule is a cron-like expression. For reference, see: https://en.wikipedia.org/wiki/Cron
   */
  readonly schedule?: string;
  /**
   * Timezone in which to run the schedule
   */
  readonly timezone?: string;
}
