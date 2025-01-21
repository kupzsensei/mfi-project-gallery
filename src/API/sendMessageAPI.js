export const sendMessageAPI = async (postData) => {
  const response = await fetch(
    "https://djangoportfolio.sirbenj.pro/api/messages/",
    {
      method: "POST",
      body: postData,
    }
  );

  const res = await response.json();
  return res;
};
