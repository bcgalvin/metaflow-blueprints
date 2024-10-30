import { EventSourceFilter, WatchPathConfig } from '../types';

/**
 * FileEventSource describes an event-source for file related events.
 */
export interface FileEventSource {
  /**
   * Type of file operations to watch Refer
   * https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go for more information
   */
  readonly eventType: string;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Use polling instead of inotify
   */
  readonly polling?: boolean;
  /**
   * WatchPathConfig contains configuration about the file path to watch
   */
  readonly watchPathConfig: WatchPathConfig;
}
