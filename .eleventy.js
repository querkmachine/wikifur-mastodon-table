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

  eleventyConfig.addFilter("registrationStatus", function (info) {
    if (info.registrations && info.approval_required) {
      return "New users require approval.";
    }
    if (info.registrations) {
      return "Open registration.";
    }
    if (info.invites_enabled) {
      return "New users by invite only.";
    }
    return "";
  });

  return {};
};
