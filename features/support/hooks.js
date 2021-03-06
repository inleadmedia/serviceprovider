
// We don't want to instrument with babel when running coverage, as it's pre-instrumented.
if (process.env.NODE_ENV !== 'cucumber-coverage') {
  require('babel-register')();
}

// Libraries
const http = require('http');
const events = require('events');
const request = require('supertest');
const app = require('../../src/app');

// Create a mock of the worker object to receive run everything in a single thread.
const workerMock = new events.EventEmitter();
workerMock.httpServer = http.createServer();

// Create a supertest wrapper that can call our app.
const api = request(app.run(workerMock));

// Setup mock websocket API
const ws = new events.EventEmitter();
workerMock.emit('connection', ws);

function beforeHookHandler() {
  // Set supertest wrapper to this so we can access it from steps.
  this.api = api;
  this.ws = ws;
}

function hooks() {
  this.Before(beforeHookHandler);
}

module.exports = hooks;
