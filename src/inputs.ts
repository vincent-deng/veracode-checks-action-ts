import { InputOptions } from '@actions/core';
import * as Inputs from './namespaces/Inputs';

type GetInput = (name: string, options?: InputOptions | undefined) => string;

export const parseInputs = (getInput: GetInput): Inputs.Args => {
  const repo = getInput('repo');
  const sha = getInput('sha');
  const token = getInput('token', { required: true });
  const name = getInput('name');
  const status = getInput('status') as Inputs.Status;
  const detailsURL = getInput('details_url');

  if (repo && repo.split('/').length !== 2) {
    throw new Error('repo needs to be in the {owner}/{repo} format');
  }

  if (!name) {
    throw new Error('name is required');
  }

  if (!Object.values(Inputs.Status).includes(status)) {
    throw new Error(`invalid value for 'status': '${status}'`);
  }

  return {
    repo,
    sha,
    name,
    token,
    status,
    detailsURL,
  };
};
