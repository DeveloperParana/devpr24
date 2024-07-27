export const getToken = () => {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("GITHUB_TOKEN is not defined");
  }

  return token;
};
