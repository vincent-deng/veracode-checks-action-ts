import * as core from '@actions/core';
import * as github from '@actions/github';
import { parseInputs } from './inputs';
import { createRun } from './checks';

/**
 * Runs the action.
 */
export async function run(): Promise<void> {
  try {
    core.debug('Parsing inputs...');
    const inputs = parseInputs(core.getInput);

    core.debug('Setting up OctoKit...');
    const octokit = github.getOctokit(inputs.token);

    const ownership = {
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
    };

    if (inputs.repo) {
      const repo = inputs.repo.split('/');
      ownership.owner = repo[0];
      ownership.repo = repo[1];
    }

    const sha = inputs.sha || github.context.sha;

    core.debug(`Creating a new Run on ${ownership.owner}/${ownership.repo}@${sha}`);
    const id = await createRun(octokit, inputs.name, sha, ownership, inputs);
    core.setOutput('check_id', id);
    core.debug(`Done`);
  } catch (e) {
    const error = e as Error;
    core.debug(error.toString());
    core.setFailed(error.message);
  }
}
