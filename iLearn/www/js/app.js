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

// Main Pages

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

// Class

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

// Group

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

// Comulsory Subjects

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

  .state('app.isl', {
    url: '/isl',
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

  .state('app.eng2', {
    url: '/eng2',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/eng.html'
      }
    }
  })

  .state('app.urdu2', {
    url: '/urdu2',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/urdu.html'
      }
    }
  })

  .state('app.pst', {
    url: '/pst',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/pst.html'
      }
    }
  })

  .state('app.it2', {
    url: '/it2',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/It.html'
      }
    }
  })

// Science Subjects

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

  .state('app.maths2', {
    url: '/maths2',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/sci/math.html'
      }
    }
  })

  .state('app.chem2', {
    url: '/chem2',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/sci/chem.html'
      }
    }
  })

  .state('app.phy2', {
    url: '/phy2',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/sci/phy.html'
      }
    }
  })

// Commerce Subjects

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

  .state('app.bm', {
    url: '/bm',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/com/maths.html'
      }
    }
  })

  .state('app.stat', {
    url: '/stat',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/com/stat.html'
      }
    }
  })

  .state('app.acc2', {
    url: '/acc2',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/com/acc.html'
      }
    }
  })

  .state('app.bank', {
    url: '/bank',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/com/banking.html'
      }
    }
  })

  .state('app.cg', {
    url: '/cg',
    views: {
      'menuContent': {
        templateUrl: 'templates/second/com/cg.html'
      }
    }
  })

// English First Year

  .state('app.engt1', {
    url: '/engt1',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/eng/one.html'
      }
    }
  })

  .state('app.engt2', {
    url: '/engt2',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/eng/two.html'
      }
    }
  })

  .state('app.engt3', {
    url: '/engt3',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/eng/three.html'
      }
    }
  })

// Urdu First Year

  .state('app.urdut1', {
    url: '/urdut1',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/urdu/one.html'
      }
    }
  })

  .state('app.urdut2', {
    url: '/urdut2',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/urdu/two.html'
      }
    }
  })

  .state('app.urdut3', {
    url: '/urdut3',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/urdu/three.html'
      }
    }
  })

// Islamiat

  .state('app.islt1', {
    url: '/islt1',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/isl/one.html'
      }
    }
  })
  .state('app.islt2', {
    url: '/islt2',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/isl/two.html'
      }
    }
  })

  .state('app.islt3', {
    url: '/islt3',
    views: {
      'menuContent': {
        templateUrl: 'templates/first/isl/three.html'
      }
    }
  })

// I.T First Year

  .state('app.itt1', {
    url: '/itt1',
    views: {
        'menuContent': {
          templateUrl: 'templates/first/it/one.html'
        }
      }
    })
    .state('app.itt2', {
      url: '/itt2',
      views: {
        'menuContent': {
          templateUrl: 'templates/first/it/two.html'
        }
      }
    })

    .state('app.itt3', {
      url: '/itt3',
      views: {
        'menuContent': {
          templateUrl: 'templates/first/it/three.html'
        }
      }
    })

// Chemistry First Year

  .state('app.chemt1', {
    url: '/chemt1',
    views: {
            'menuContent': {
              templateUrl: 'templates/first/chem/one.html'
            }
          }
        })
        .state('app.chemt2', {
          url: '/chemt2',
          views: {
            'menuContent': {
              templateUrl: 'templates/first/chem/two.html'
            }
          }
        })

        .state('app.chemt3', {
          url: '/chemt3',
          views: {
            'menuContent': {
              templateUrl: 'templates/first/chem/three.html'
            }
          }
        })

// Physics First Year

.state('app.phyt1', {
    url: '/phyt1',
                    'menuContent': {
                      views: {
                      templateUrl: 'templates/first/phy/one.html'
                    }
                  }
                })
.state('app.phyt2', {
                  url: '/phyt2',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/first/phy/two.html'
                    }
                  }
                })

.state('app.phyt3', {
                  url: '/phyt3',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/first/phy/three.html'
                    }
                  }
                })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/class');
});
