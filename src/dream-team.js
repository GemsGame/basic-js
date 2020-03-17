module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let cleanArray = members.filter((item, index) => typeof item === "string").map(item => item.trim()).map(item => item[0].toUpperCase());
    return cleanArray.sort().join("");
  } else return false;
};