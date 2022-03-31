/* tslint:disable */
import { Link } from './link';
import { MultiMedia } from './multi-media';
export interface Review {

  /**
   * Author of the review (e.g. Manohla Dargis).
   */
  byline?: string;

  /**
   * Set to 1 if a critics' pick and 0 if not.
   */
  critics_pick?: number;

  /**
   * Last modified date of the review.
   */
  date_updated?: string;

  /**
   * Movie title.
   */
  display_title?: string;

  /**
   * Headline of the review.
   */
  headline?: string;
  link?: Link;

  /**
   * Movie MPAA rating (e.g. PG-13).
   */
  mpaa_rating?: string;
  multimedia?: MultiMedia;

  /**
   * Movie U.S. opening date.
   */
  opening_date?: string;

  /**
   * Review publication date.
   */
  publication_date?: string;

  /**
   * Short summary about the review.
   */
  summary_short?: string;
}
