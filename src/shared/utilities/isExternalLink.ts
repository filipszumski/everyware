export const isExternalLink = (href: string) => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (href.search(/^https?:\/\//) < 0) {
    return false;
  }
  return appUrl ? !href.includes(appUrl) : true;
};
