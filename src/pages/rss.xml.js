import rss from "@astrojs/rss";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser.astro";
import { sortByDate } from "@/lib/utils/sortFunctions";

export async function GET(context) {
  const posts = sortByDate(await getSinglePage("blog"));
  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: config.site.base_url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description || "",
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      author: (post.data.authors && post.data.authors[0]) || "Clienvora",
    })),
    customData: `<language>en-us</language>`,
  });
}
