import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = (await getCollection('carnet-de-bord')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: 'Carnet de bord — À vous la ville',
    description:
      "Réflexions, méthodes et retours de terrain sur la fabrique éditoriale des projets urbains.",
    site: context.site,
    customData: '<language>fr-FR</language>',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.excerpt,
      pubDate: article.data.date,
      link: `/carnet-de-bord/${article.id}/`,
    })),
  });
}
