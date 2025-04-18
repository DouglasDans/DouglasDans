import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import notion from "../notion.config";

export default class NotionDatabaseService {
  private readonly databaseID: string;

  constructor(databaseID: string) {
    this.databaseID = databaseID;
  }

  async getResults() {
    const db = await notion.databases.query({
      database_id: this.databaseID,
    });

    return db.results as Partial<PageObjectResponse>[];
  }
}
