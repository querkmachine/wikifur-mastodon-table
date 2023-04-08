module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncFilter("instanceInfo", async function (host) {
    try {
      console.log(`Pinging ${host}...`);
      const response = await fetch(`https://${host}/api/v1/instance`);
      const jsonData = await response.json();
      return jsonData;
    } catch (e) {
      return {
        host,
        error: e,
      };
    }
  });

  eleventyConfig.addFilter("numberFormat", function (num) {
    return Intl.NumberFormat("en").format(num);
  });

  return {};
};
