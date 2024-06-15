import { siteConfig } from '@/config/site';

export const generateSeo = ({ title, description, url, image }) => ({
  title,
  description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title,
    description,
    siteName: siteConfig.name,
    url,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: image?.url ? image.url : siteConfig.ogImage,
        width: image?.width ? image.width : 1200,
        height: image?.height ? image.height : 675,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitterHandle,
    title,
    description,
    images: [
      {
        url: image?.url ? image.url : siteConfig.ogImage,
        width: image?.width ? image.width : 1200,
        height: image?.height ? image.height : 675,
      },
    ],
  },
  alternates: {
    canonical: url,
  },
});
