const getBaseUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    return "http://localhost:3001"; 
  }
  return url;
};

export const API_BASE_URL: string = getBaseUrl();
