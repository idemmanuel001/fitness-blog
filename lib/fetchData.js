import { GraphQLClient, gql } from 'graphql-request';

/* Contnentful graphQL endpoint  */
const graphQLEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;


/* GraphQl request headers */
const headers = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  }
};


/* Get all blog post data */
export const getAllPosts = async () => {
  const graphQLClient = new GraphQLClient(graphQLEndpoint, headers);

  const query = gql`
    query {
    blogPostCollection{
      items{
        title,
        slug,
        image{
          url
        }
        excerpt,
        content{
          json
        },
        publishDate,
        author{
          name,
          thumbnail{
            url
          },
          image{
            url
          },
          bioPreview,
          bio,
          facebook,
          twitter,
          pinterest,
          instagram,
          youtube
          
        }
      }
    }
  }
  `;

  // const result = await request(graphQLEndpoint, query, headers);
  const data = await graphQLClient.request(query);
  return data;
};