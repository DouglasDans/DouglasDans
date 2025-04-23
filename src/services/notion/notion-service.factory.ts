import NotionDatabaseService from "./services/database.service";
import NotionToMarkdownService from "./services/notionToMarkdown.service";
import NotionPageService from "./services/page.service";

type serviceType = "database" | "page" | "markdown";

export default function NotionServiceFactory(
  type: serviceType,
  typeID: string,
): NotionDatabaseService | NotionPageService | NotionToMarkdownService {
  if (type === "database") return new NotionDatabaseService(typeID);
  if (type === "page") return new NotionPageService(typeID);
  if (type === "markdown") return new NotionToMarkdownService();

  throw new Error(`parametros type e typeID não informados corretamente. type: ${type}, typeID:${typeID}`);
}
