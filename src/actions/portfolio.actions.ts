"use server";

import notionPageMapper from "@/services/notion/mappers/page.mapper";
import NotionServiceFactory from "@/services/notion/notion-service.factory";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const dbID = process.env.NOTION_DB_ID_PROJECTS as string;

export default async function getMainProjects() {
  const notionService = NotionServiceFactory("database", dbID);

  try {
    const res = await notionService.getResults();
    const obj = res.map((page) => {
      return notionPageMapper(page as PageObjectResponse);
    });

    return obj;
  } catch (error) {
    console.error(error);
  }
}
