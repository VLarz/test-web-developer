export interface Section {
  id: string;
  content: Content;
}

export interface Content {
  heading: string;
  subHeading: string;
  paragraphs: [];
}
