// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  })

  .state('app.class', {
      url: '/class',
      views: {
        'menuContent': {
          templateUrl: 'templates/class.html'
        }
      }
    })

    .state('app.timetable', {
        url: '/timetable',
        views: {
          'menuContent': {
            templateUrl: 'templates/timetable.html'
          }
        }
      })

      .state('app.group1', {
          url: '/group1',
          views: {
            'menuContent': {
              templateUrl: 'templates/first/group.html'
            }
          }
        })

        .state('app.group2', {
            url: '/group2',
            views: {
              'menuContent': {
                templateUrl: 'templates/second/group.html'
              }
            }
          })

        .state('app.sci1', {
              url: '/sci1',
              views: {
                'menuContent': {
                  templateUrl: 'templates/first/sci/sci.html'
                }
              }
            })

            .state('app.sci2', {
                  url: '/sci2',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/second/sci/sci.html'
                    }
                  }
                })

            .state('app.com1', {
                url: '/com1',
                views: {
                  'menuContent': {
                    templateUrl: 'templates/first/com/com.html'
                  }
                }
              })

              .state('app.com2', {
                  url: '/com2',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/second/com/com.html'
                    }
                  }
                })

              .state('app.eng1', {
                  url: '/eng1',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/first/eng.html'
                    }
                  }
                })
                .state('app.urdu1', {
                    url: '/urdu1',
                    views: {
                      'menuContent': {
                        templateUrl: 'templates/first/urdu.html'
                      }
                    }
                  })
                  .state('app.isl1', {
                      url: '/isl1',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/first/isl.html'
                        }
                      }
                    })
                    .state('app.it1', {
                        url: '/it1',
                        views: {
                          'menuContent': {
                            templateUrl: 'templates/first/It.html'
                          }
                        }
                      })

                      .state('app.maths1', {
                          url: '/maths1',
                          views: {
                            'menuContent': {
                              templateUrl: 'templates/first/sci/math.html'
                            }
                          }
                        })

                        .state('app.chem1', {
                            url: '/chem1',
                            views: {
                              'menuContent': {
                                templateUrl: 'templates/first/sci/chem.html'
                              }
                            }
                          })

                          .state('app.phy1', {
                              url: '/phy1',
                              views: {
                                'menuContent': {
                                  templateUrl: 'templates/first/sci/phy.html'
                                }
                              }
                            })

                            .state('app.acc1', {
                                url: '/acc1',
                                views: {
                                  'menuContent': {
                                    templateUrl: 'templates/first/com/acc.html'
                                  }
                                }
                              })

                              .state('app.poc1', {
                                  url: '/poc1',
                                  views: {
                                    'menuContent': {
                                      templateUrl: 'templates/first/com/poc.html'
                                    }
                                  }
                                })

                                .state('app.eco', {
                                    url: '/eco',
                                    views: {
                                      'menuContent': {
                                        templateUrl: 'templates/first/com/eco.html'
                                      }
                                    }
                                  })

                                  .state('app.bm1', {
                                      url: '/bm1',
                                      views: {
                                        'menuContent': {
                                          templateUrl: 'templates/first/com/maths.html'
                                        }
                                      }
                                    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/class');
});
