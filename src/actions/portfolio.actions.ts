"use server";

import NotionServiceFactory from "@/services/notion/notion-service.factory";

const dbID = process.env.NOTION_DB_ID_PROJECTS as string;

export default async function getMainProjects() {
  const notionService = NotionServiceFactory("database", dbID);

  try {
    const res = await notionService.getResults();
    return res.results;
  } catch (error) {
    console.error(error);
  }
}
