angular.module('TasksApp', ['ngRoute'])
  .config( function( $routeProvider ) {

    $routeProvider
      .when('/tasks/todo', {
          templateUrl: '/partials/tasks.html',
          controller: 'TodoTasksCtrl'
      })
      .when('/tasks/done', {
          templateUrl: '/partials/tasks.html',
          controller: 'DoneTasksCtrl'
      })
      .otherwise('/tasks/todo')

  })
  .controller('TodoTasksCtrl', function($rootScope, $scope, DataFactory) {

    $scope.isSectionDone = false;

    DataFactory.getTasks() // will assign tasks to rootScope

    $scope.removeTask = function(e, id) {
      e.preventDefault()
      DataFactory.removeTask(id)
        .then( DataFactory.getTasks )
    }

    $scope.completeTask = function (e, id) {
      e.preventDefault()
      DataFactory.completeTask(id)
        .then( DataFactory.getTasks )
    }

    $scope.addTask = function(e) {
      e.preventDefault()
      const title = $scope.title
      DataFactory.addTask(title)
        .then( DataFactory.getTasks )
    }

  })
  .controller('DoneTasksCtrl', function($scope, DataFactory) {

    $scope.isSectionDone = true;

    DataFactory.getTasks() // will assign tasks to rootScope


  })
  .factory('DataFactory', function($http, $rootScope) {

    function getTasks() {
      return $http.get('/api/Todos')
                .then( ({ data }) => data )
                .then( tasks => $rootScope.tasks = tasks)
    }
    function addTask( title ) {
      return $http.post('/api/Todos', { title } )
    }

    function removeTask( id ) {
      return $http.delete(`/api/Todos/${id}`)
    }

    function completeTask( id, done, title, createdAt ) {
      var task = $rootScope.tasks.filter((elem) => elem.id == id)
      console.log(task)
      return $http.put(`/api/Todos/${id}`, {
        done: 'true',
        title: task[0].title,
        createdAt: task[0].createdAt
      })
    }

    return { getTasks, addTask, removeTask, completeTask }

  })