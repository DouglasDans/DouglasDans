import { NotionToMarkdown } from "notion-to-md";
import notion from "../notion.config";

export default class NotionToMarkdownService {
  private readonly n2m: NotionToMarkdown;

  constructor() {
    this.n2m = new NotionToMarkdown({ notionClient: notion });
  }

  async convertPageToMarkdown(pageID: string) {
    const mdBlocks = await this.n2m.pageToMarkdown(pageID);
    const mdString = this.n2m.toMarkdownString(mdBlocks);
    return mdString.parent;
  }
}
