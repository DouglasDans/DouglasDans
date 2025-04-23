export type NotionPageData = {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
  description: string;
  accessLink: string;
  github_link: string;
  tecnologies: string[];

  banner?: string;
  markdownContent?: string;
};

export class NotionPage {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
  description: string;
  accessLink: string;
  github_link: string;
  tecnologies: string[];

  banner?: string;
  markdownContent?: string;

  constructor(data: NotionPageData) {
    this.id = data.id;
    this.name = data.name;
    this.updated_at = data.updated_at;
    this.created_at = data.created_at;
    this.description = data.description;
    this.accessLink = data.accessLink;
    this.github_link = data.github_link;
    this.tecnologies = data.tecnologies;
    this.banner = data.banner;
    this.markdownContent = data.markdownContent;
  }
}
