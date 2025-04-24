"use server";

import notionPageMapper from "@/services/notion/mappers/page.mapper";
import NotionServiceFactory from "@/services/notion/notion-service.factory";
import NotionDatabaseService from "@/services/notion/services/database.service";
import NotionToMarkdownService from "@/services/notion/services/notionToMarkdown.service";
import NotionPageService from "@/services/notion/services/page.service";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const dbID = process.env.NOTION_DB_ID_PROJECTS as string;

export async function getMainProjects() {
  const notionService = NotionServiceFactory("database", dbID);

  try {
    if (notionService instanceof NotionDatabaseService) {
      const res = await notionService.getMainResults();
      return res.map((page) => {
        return notionPageMapper(page as PageObjectResponse);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectByCategory(category: string) {
  const notionService = NotionServiceFactory("database", dbID);

  try {
    if (notionService instanceof NotionDatabaseService) {
      const res =
        category === "all" || category === null || category === undefined
          ? await notionService.getAllResults()
          : await notionService.getResultsByFilter("category", category);
      return res.map((page) => {
        return notionPageMapper(page as PageObjectResponse);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getPageDetails(id: string) {
  const notionService = NotionServiceFactory("page", id);
  const n2mService = new NotionToMarkdownService();

  try {
    if (notionService instanceof NotionPageService) {
      const page = notionPageMapper(await notionService.getDetails());
      page.markdownContent = await n2mService.convertPageToMarkdown(id);
      return page;
    }
  } catch (error) {
    console.error(error);
  }
}
