import * as Inputs from './namespaces/Inputs';
import { GitHub } from '@actions/github/lib/utils';
export declare const createRun: (octokit: InstanceType<typeof GitHub>, name: string, sha: string, ownership: {
    owner: string;
    repo: string;
}, inputs: Inputs.Args) => Promise<number>;
