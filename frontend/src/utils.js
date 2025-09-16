// src/utils.js

/**
 * Creates a page URL slug based on the given page name.
 * Examples:
 *   createPageUrl("Portfolio") -> "/"
 *   createPageUrl("About")     -> "/about"
 *   createPageUrl("Projects")  -> "/projects"
 *   createPageUrl("Contact")   -> "/contact"
 */
export function createPageUrl(name) {
  if (name.toLowerCase() === "portfolio" || name.toLowerCase() === "home") {
    return "/";
  }
  return "/" + name.toLowerCase();
}
