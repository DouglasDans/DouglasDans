import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import notion from "../notion.config";

export default class NotionPageService {
  private readonly pageID: string;

  constructor(pageID: string) {
    this.pageID = pageID;
  }

  async getDetails(): Promise<PageObjectResponse> {
    const page = await notion.pages.retrieve({ page_id: this.pageID });
    return page as PageObjectResponse;
  }
}
