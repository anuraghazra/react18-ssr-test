import React from "react";
import { Writable } from "stream";

declare module "react" {
  function useId(): string;
  function startTransition(arg: any): any;
}

declare module "react-dom/server" {
  type Controls = {
    // Cancel any pending I/O and put anything remaining into
    // client rendered mode.
    abort(): void;
    pipe<T extends Writable>(destination: T): T;
  };
  type Options = {
    identifierPrefix?: string;
    namespaceURI?: string;
    nonce?: string;
    bootstrapScriptContent?: string;
    bootstrapScripts?: Array<string>;
    bootstrapModules?: Array<string>;
    progressiveChunkSize?: number;
    onShellReady?: () => void;
    onShellError?: () => void;
    onAllReady?: () => void;
    onError?: (error: any) => void;
  };
  function renderToPipeableStream(
    jsx: React.ReactNode,
    options: Options
  ): Controls;
}
