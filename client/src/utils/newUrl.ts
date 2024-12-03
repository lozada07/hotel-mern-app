import axios from "axios";

export const newUrl = async (urls: string[]) => {
  const sizeImages = await Promise.all(
    urls.map(async (url) => {
      const info = url.replace("/q_20/", "/q_20,fl_getinfo/");
      const { data } = await axios.get(info);
      return [data.input.width, data.input.height];
    })
  );

  return sizeImages;
};
