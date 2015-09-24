var skills = ["front", "client", "server"];

var getSkill = function(){
    return skills[Math.round(Math.random()*(2-0)+0)];
};

module.exports = getSkill;