import { clientName } from "./clientName";

/**
 * Logs a message to the console, chat, or both.
 * @param {string} type - The destination for the message ('console', 'chat', or 'both').
 * @param {string} msg - The message to be logged.
 */
export function clog(type, msg) {
  if (type === "console" || type === "both") 
    console.log(`[${clientName}] ${msg}`);
  if (type === "chat" || type === "both") 
    ModAPI.displayToChat({ msg: `[${clientName}] ${msg}` });
}
