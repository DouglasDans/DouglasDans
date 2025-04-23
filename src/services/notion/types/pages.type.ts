export interface NotionPageProperties {
  id: UniqueIdProperty;
  name: TitleProperty;
  created_at: CreatedTimeProperty;
  updated_at: LastEditedTimeProperty;
  access_link: UrlProperty;
  github_link: UrlProperty;
  description: DescriptionProperty;
  tecnologies: MultiSelectProperty;
}

interface MultiSelectProperty {
  id: string;
  type: "multi_select";
  multi_select: any[]; // Adjust type if multi_select structure is known
}

interface LastEditedTimeProperty {
  id: string;
  type: "last_edited_time";
  last_edited_time: string;
}

interface DescriptionProperty {
  id: string;
  type: string;
  rich_text: RichText[];
}

interface UrlProperty {
  id: string;
  type: "url";
  url: null | string;
}

interface CreatedTimeProperty {
  id: string;
  type: "created_time";
  created_time: string;
}

interface UniqueIdProperty {
  id: string;
  type: "unique_id";
  unique_id: {
    prefix: null | string;
    number: number;
  };
}

interface TitleProperty {
  id: string;
  type: "title";
  title: TitleText[];
}

interface TitleText {
  type: string;
  text: {
    content: string;
    link: null | string;
  };
  annotations: TextAnnotations;
  plain_text: string;
  href: null | string;
}

interface RichTextProperty {
  id: string;
  type: "rich_text";
  rich_text: RichText[];
}

interface RichText {
  type: string;
  text: {
    content: string;
    link: null | string;
  };
  annotations: TextAnnotations;
  plain_text: string;
  href: null | string;
}

interface TextAnnotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}
