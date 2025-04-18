import notion from "../notion.config";

export default class NotionDatabaseService {
  private readonly databaseID: string;

  constructor(databaseID: string) {
    this.databaseID = databaseID;
  }

  async getResults() {
    return await notion.databases.query({
      database_id: this.databaseID,
    });
  }
}
