
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BatchedBridge = require('BatchedBridge');
var BugReporting = require('BugReporting');
var NativeModules = require('NativeModules');
var ReactNative = require('ReactNative');

var infoLog = require('infoLog');
var invariant = require('fbjs/lib/invariant');
var renderApplication = require('renderApplication');

if (__DEV__) {
  require('RCTRenderingPerf');
}

var runnables = {};
var runCount = 1;
var sections = {};
var tasks = new Map();

var AppRegistry = {
  registerConfig: function registerConfig(config) {
    config.forEach(function (appConfig) {
      if (appConfig.run) {
        AppRegistry.registerRunnable(appConfig.appKey, appConfig.run);
      } else {
        invariant(appConfig.component != null, 'AppRegistry.registerConfig(...): Every config is expected to set ' + 'either `run` or `component`, but `%s` has neither.', appConfig.appKey);
        AppRegistry.registerComponent(appConfig.appKey, appConfig.component, appConfig.section);
      }
    });
  },
  registerComponent: function registerComponent(appKey, component, section) {
    runnables[appKey] = {
      component: component,
      run: function run(appParameters) {
        return renderApplication(component(), appParameters.initialProps, appParameters.rootTag);
      }
    };
    if (section) {
      sections[appKey] = runnables[appKey];
    }
    return appKey;
  },
  registerRunnable: function registerRunnable(appKey, run) {
    runnables[appKey] = { run: run };
    return appKey;
  },
  registerSection: function registerSection(appKey, component) {
    AppRegistry.registerComponent(appKey, component, true);
  },
  getAppKeys: function getAppKeys() {
    return Object.keys(runnables);
  },
  getSectionKeys: function getSectionKeys() {
    return Object.keys(sections);
  },
  getSections: function getSections() {
    return _extends({}, sections);
  },
  getRunnable: function getRunnable(appKey) {
    return runnables[appKey];
  },
  getRegistry: function getRegistry() {
    return {
      sections: AppRegistry.getSectionKeys(),
      runnables: _extends({}, runnables)
    };
  },
  runApplication: function runApplication(appKey, appParameters) {
    var msg = 'Running application "' + appKey + '" with appParams: ' + JSON.stringify(appParameters) + '. ' + '__DEV__ === ' + String(__DEV__) + ', development-level warning are ' + (__DEV__ ? 'ON' : 'OFF') + ', performance optimizations are ' + (__DEV__ ? 'OFF' : 'ON');
    infoLog(msg);
    BugReporting.addSource('AppRegistry.runApplication' + runCount++, function () {
      return msg;
    });
    invariant(runnables[appKey] && runnables[appKey].run, 'Application ' + appKey + ' has not been registered.\n\n' + 'Hint: This error often happens when you\'re running the packager ' + '(local dev server) from a wrong folder. For example you have ' + 'multiple apps and the packager is still running for the app you ' + 'were working on before.\nIf this is the case, simply kill the old ' + 'packager instance (e.g. close the packager terminal window) ' + 'and start the packager in the correct app folder (e.g. cd into app ' + 'folder and run \'npm start\').\n\n' + 'This error can also happen due to a require() error during ' + 'initialization or failure to call AppRegistry.registerComponent.\n\n');
    runnables[appKey].run(appParameters);
  },
  unmountApplicationComponentAtRootTag: function unmountApplicationComponentAtRootTag(rootTag) {
    ReactNative.unmountComponentAtNodeAndRemoveContainer(rootTag);
  },
  registerHeadlessTask: function registerHeadlessTask(taskKey, task) {
    if (tasks.has(taskKey)) {
      console.warn('registerHeadlessTask called multiple times for same key \'' + taskKey + '\'');
    }
    tasks.set(taskKey, task);
  },
  startHeadlessTask: function startHeadlessTask(taskId, taskKey, data) {
    var taskProvider = tasks.get(taskKey);
    if (!taskProvider) {
      throw new Error('No task registered for key ' + taskKey);
    }
    taskProvider()(data).then(function () {
      return NativeModules.HeadlessJsTaskSupport.notifyTaskFinished(taskId);
    }).catch(function (reason) {
      console.error(reason);
      NativeModules.HeadlessJsTaskSupport.notifyTaskFinished(taskId);
    });
  }
};

BatchedBridge.registerCallableModule('AppRegistry', AppRegistry);

module.exports = AppRegistry;