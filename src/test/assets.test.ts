/// <reference types="node" />
import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const root = path.resolve(__dirname, "../..");
const sources = fs
  .readdirSync(path.join(root, "src"), { recursive: true, encoding: "utf8" })
  .filter((f) => /\.(tsx?|css)$/.test(f))
  .map((f) => [f, fs.readFileSync(path.join(root, "src", f), "utf8")] as const);

const refs = sources.flatMap(([file, code]) =>
  [...code.matchAll(/["'(]([^"'()\s]*\.webp)["')]/g)].map((m) => ({ file, src: m[1] })),
);

describe("public image references", () => {
  it("finds image references to check", () => {
    expect(refs.length).toBeGreaterThan(0);
  });

  it("are absolute, so they resolve on nested and trailing-slash URLs", () => {
    expect(refs.filter((r) => !r.src.startsWith("/"))).toEqual([]);
  });

  it("point at files that exist in public/", () => {
    expect(refs.filter((r) => !fs.existsSync(path.join(root, "public", r.src)))).toEqual([]);
  });
});
