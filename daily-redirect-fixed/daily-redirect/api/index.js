const moment = require("moment-timezone");

const links = [
  "https://docs.google.com/forms/d/e/1FAIpQLSfz8dm0ijxEfS8vRwRto8sXXrEDbJebvuI86cuGmULxY5TRLQ/viewform?usp=header",
  "https://docs.google.com/forms/d/e/1FAIpQLSemCYvxnlqWm6FQ23Nf-xjZh47ZX7H09Zh7ETuIBQPQcVXFVQ/viewform?usp=header",
  "https://docs.google.com/forms/d/e/1FAIpQLSfF2mbmp2ZXW98vCVbNuUREZP2qR5yA2yotnhXaqpx8sUDhEA/viewform?usp=header",
  "https://docs.google.com/forms/d/e/1FAIpQLSc0SNIpLJ81ktw8w2Kt6VVZCiTGxEeONiLZ-uFT-d6N7B93PA/viewform?usp=header",
  "https://docs.google.com/forms/d/e/1FAIpQLScd8rnE9FvI_dplKfga623Ow5J1dBXDhpXPwuWEwNDXZ62lvw/viewform?usp=header",
  "https://docs.google.com/forms/d/e/1FAIpQLSeTACXk8at3GQfIAihtz6yF12kqB8bcBJLDwbp0ccAE9GMiBA/viewform?usp=header",
  "https://docs.google.com/forms/d/e/1FAIpQLSdGwUeeFhJgPwQPhOGSIR-AEpatO6c00hY_CQpaJCHPIVEkHw/viewform?usp=header"
];

const baseDate = moment.tz("2025-06-10 22:00", "Africa/Cairo");

module.exports = (req, res) => {
  const now = moment.tz("Africa/Cairo");

  if (now.isBefore(baseDate)) {
    return res.redirect(302, links[0]);
  }

  const ref = now.hour() < 22 ? now.clone().subtract(1, "day") : now;
  const daysPassed = ref.startOf("day").diff(baseDate.clone().startOf("day"), "days");
  const index = Math.min(daysPassed, links.length - 1);

  return res.redirect(302, links[index]);
};
