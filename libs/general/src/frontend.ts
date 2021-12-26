/**
 * A set of common utility functions that can be used in the frontend.
 *
 * *NOTE*: This was separated into a different module since the other modules imported
 * packages that were not available in a browser environment.
 */

/**
 * Sleep the main thread for some time. It pauses execution for `delay` milliseconds.
 * @param delay The delay duration in milliseconds
 */

export const sleep = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
