import { eventHandler } from "h3";
import { start } from "workflow/api";
import { test } from "../../../workflows/test";

export default eventHandler(async (event) => {
  const run = await start(test);
  const result = await run.returnValue;
  return result;
});
