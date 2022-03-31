/* tslint:disable */
export interface Critic {

  /**
   * Critic name for URL (spaces are replaced with hyphens and periods removed).
   */
  "seo-name"?: string;

  /**
   * Short bio of critic.
   */
  bio?: string;

  /**
   * Critic's name (e.g. A. O. Scott).
   */
  display_name?: string;

  /**
   * Image of critic.
   */
  multimedia?: {resource?: {type?: string, src?: string, height?: number, width?: number, credit?: string}};

  /**
   * Field used when sorting.
   */
  sort_name?: string;

  /**
   * Status of the critic (full-time, part-time, or null).
   */
  status?: string;
}
