import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionPage } from "../classes/NotionPage";
import { NotionPageProperties } from "../types/pages.type";

export default function notionPageMapper(res: PageObjectResponse): NotionPage {
  const properties = res.properties as unknown as NotionPageProperties;

  const pageObj = new NotionPage({
    id: res.id,
    accessLink: properties.access_link.url as string,
    github_link: properties.github_link.url as string,
    created_at: properties.created_at.created_time,
    updated_at: properties.updated_at.last_edited_time,
    name: properties.name.title.map((text) => text.plain_text).join(" "),
    description: properties.description.rich_text.map((text) => text.plain_text).join(" "),
    tecnologies: properties.tecnologies.multi_select.map((tech) => tech.name),

    banner:
      res.cover?.type === "external"
        ? res.cover.external.url
        : res.cover?.type === "file"
          ? res.cover.file.url
          : undefined,
  });

  return pageObj;
}
