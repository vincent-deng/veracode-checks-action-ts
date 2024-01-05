import { InputOptions } from '@actions/core';
import * as Inputs from './namespaces/Inputs';
type GetInput = (name: string, options?: InputOptions | undefined) => string;
export declare const parseInputs: (getInput: GetInput) => Inputs.Args;
export {};
