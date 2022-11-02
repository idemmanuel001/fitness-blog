import { GraphQLClient, gql } from 'graphql-request';

/* Contnentful graphQL API endpoint  */
const graphQLEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;


/* GraphQl request headers */
const headers = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  }
};

/* Instantiating a new GraphQLClient instance */
const graphQLClient = new GraphQLClient(graphQLEndpoint, headers);


/* A function to extract the post entries */
function extractPostEntries(fetchResponse) {
  return fetchResponse?.blogPostCollection?.items;
}


/* Get list of categories  */
export const getAllCategpries = async () => {
  const query = gql`
    query {
      categoriesCollection{
        items{
          name
          slug
        }
      }
    }
  `;

  try {
    const categories = await graphQLClient.request(query);
    return categories?.categoriesCollection?.items;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};

/* Get author's details  */
export const getAuthour = async () => {
  const query = gql`
    query {
      authorCollection(limit: 1) {
      items {
      name
      thumbnail {
        title
        url
      }
      bioPreview
      facebook
      twitter
      pinterest
      instagram
      youtube
    }
  }
    }
  `;

  try {
    const author = await graphQLClient.request(query);
    return author?.authorCollection?.items[0];
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};


/* Get list of tags  */
export const getAllTags = async () => {
  const query = gql`
    query {
       tagsCollection(order: tags_ASC) {
          items {
            tags
          }
        }
    }
  `;

  try {
    const tags = await graphQLClient.request(query);
    return tags?.tagsCollection?.items;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};


/* Get all blog posts for homepage */
export const getAllPosts = async () => {
  const query = gql`
    query {
      blogPostCollection {
      items {
      title
      slug
      image {
        title
        url
      }
      excerpt
      publishDate
      categories {
        name
        slug
      }
      tagsCollection{
        items{
            tags
        }
      }
    }
  }
    }
  `;


  try {
    const data = await graphQLClient.request(query);
    return extractPostEntries(data);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};


/* Get a single blog post details by slug  */
export const getPostBySlug = async (slug) => {
  const query = gql`
    query {
      blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
      items {
      title
      slug
      image {
        title
        url
      }
      excerpt
      content {
        json
      }
      publishDate
      categories {
        slug
      }
      tagsCollection {
        items {
          tags
        }
       }
      }
    }
   }
  `;

  try {
    const data = await graphQLClient.request(query);
    return extractPostEntries(data);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};


/* Get a similar posts   */
export const getSimilarPosts = async (category, slug) => {
  const query = gql`
    query {
    blogPostCollection(
    where: {
      slug_not: "${slug}"
      AND: { categories: { slug_in: "${category}" } }
    }
    limit: 2
  ) {
    items {
      title
      slug
      image {
        title
        url
      }
      excerpt
      content {
        json
      }
      publishDate
      categories {
        slug
      }
      tagsCollection {
        items {
          tags
        }
      }
    }
  }
  }
  `;

  try {
    const data = await graphQLClient.request(query);
    return extractPostEntries(data);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};


