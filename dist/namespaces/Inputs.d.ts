interface ArgsBase {
    repo?: string;
    sha?: string;
    token: string;
    conclusion?: Conclusion;
    status: Status;
    actionURL?: string;
    detailsURL?: string;
    output?: Output;
}
export interface ArgsCreate extends ArgsBase {
    name: string;
}
export type Args = ArgsCreate;
export type Output = {
    title?: string;
    summary: string;
    text_description?: string;
};
export declare enum Conclusion {
    Success = "success",
    Failure = "failure",
    Neutral = "neutral",
    Cancelled = "cancelled",
    TimedOut = "timed_out",
    ActionRequired = "action_required",
    Skipped = "skipped"
}
export declare enum Status {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
export {};
