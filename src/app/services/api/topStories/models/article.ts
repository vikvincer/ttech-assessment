/* tslint:disable */
export interface Article {
  abstract?: string;
  byline?: string;
  created_date?: string;
  des_facet?: Array<string>;
  geo_facet?: Array<string>;
  item_type?: string;
  kicker?: string;
  material_type_facet?: string;
  multimedia?: Array<{url?: string, format?: string, height?: number, width?: number, type?: string, subtype?: string, caption?: string, copyright?: string}>;
  org_facet?: Array<string>;
  per_facet?: Array<string>;
  published_date?: string;
  section?: string;
  short_url?: string;
  subsection?: string;
  title?: string;
  updated_date?: string;
  uri?: string;
  url?: string;
}
