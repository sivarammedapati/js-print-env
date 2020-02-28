const core = require('@actions/core');
const github = require('@actions/github');

const process = require('process');

try {
  console.log(process.env);
} catch (error) {
  core.setFailed(error.message);
}
