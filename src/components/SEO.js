import { useSiteMetadata } from "../hooks/useSiteMetadata";

const SEO = ({ description, pathname, children }) => {
  const { description: defaultDescription, siteUrl } = useSiteMetadata();

  const seo = {
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};

export default SEO;
