/**
 * Created by Nick on 9/23/15.
 */
var app = angular.module('app', []);
app.controller("IndexController", ['$scope', '$http', function($scope, $http){

    $scope.project = generateProject();

    $scope.getProject = function(){
       $scope.project = generateProject();
    };

    $scope.hire = function(){
        hireNewTeamMember();
    };

    var hireNewTeamMember = function() {
        return $http.get('/team').then(function (response) {
            $scope.project.team.push(response.data);
            console.log(response.data);
        });
    };

}]);

    //generates new project
var generateProject = function(){
    var newProject = {
        companyName: "blue",
        scrum: getScrum(10,60),
        team: [],
        scrumPower: {},
        sprints:0
    }
    return newProject;

};

var getScrum = function(min, max){
    var scrum = {};
    scrum.front = Math.floor(Math.random()*(max-min)+min);
    scrum.client = Math.floor(Math.random()*(max-min)+min);
    scrum.server = Math.floor(Math.random()*(max-min)+min);
    return scrum;
};


var getScrumPower = function(){

};
