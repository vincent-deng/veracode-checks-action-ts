import * as core from '@actions/core';
import * as Inputs from './namespaces/Inputs';
import { GitHub } from '@actions/github/lib/utils';

const formatDate = (): string => {
  return new Date().toISOString();
};

export const createRun = async (
  octokit: InstanceType<typeof GitHub>,
  name: string,
  sha: string,
  ownership: { owner: string; repo: string },
  inputs: Inputs.Args,
): Promise<number> => {
  const { data } = await octokit.rest.checks.create({
    ...ownership,
    head_sha: sha,
    name: name,
    started_at: formatDate(),
    status: inputs.status,
    details_url: inputs.detailsURL,
  });
  return data.id;
};
