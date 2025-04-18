import NotionDatabaseService from "./services/database.service";

type serviceType = "database" | "page" | "block";

export default function NotionServiceFactory(type: serviceType, typeID: string): NotionDatabaseService {
  if (type === "database") return new NotionDatabaseService(typeID);

  throw new Error(`parametros type e typeID não informados corretamente. type: ${type}, typeID:${typeID}`);
}
