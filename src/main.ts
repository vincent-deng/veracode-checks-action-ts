import * as core from '@actions/core';
import { parseInputs } from './inputs';

export async function run(): Promise<void> {
  // try {
  core.debug('Parsing inputs...');
  const inputs = parseInputs(core.getInput);
  // }
}