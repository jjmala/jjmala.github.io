import { graphql, useStaticQuery } from 'gatsby';

function useMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            sources
            contacts {
              phone
              email
              website
              project
            }
            social {
              github
              linkedin
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
}

export default useMetadata;
