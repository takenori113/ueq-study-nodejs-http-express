import { test, expect } from "@playwright/test";
import { ChildProcessWithoutNullStreams } from "child_process";
import { readFile } from "fs/promises";

import { startServer } from "./utils";

let serverProcess: ChildProcessWithoutNullStreams;

test.beforeAll("setup", async () => {
  serverProcess = await startServer(["./express.js"]);
});

test.afterAll("teardown", () => {
  serverProcess.kill("SIGINT");
});

test.describe("expressを使用しシンプルなHTTPサーバーを実装", () => {
  test("HTTPサーバーがHello Worldを表示する", async ({ page }) => {
    await page.goto("http://localhost:3001");
    const text = await page.textContent("body");
    await expect(text).toEqual("Hello World");
  });
  test("HTTPサーバーが指定のJSONを返す", async ({ page }) => {
    const response = await page.goto("http://localhost:3001/hello");
    const data = await response?.json();
    await expect(data).toEqual({ message: "hello" });
  });
  test("HTTPサーバーが指定の静的ファイルを返す", async ({ page }) => {
    const response = await page.goto("http://localhost:3001/hello.html");
    const answer = await readFile("./public/hello.html", "utf-8");
    const result = await response?.text();
    await expect(result).toContain(answer);
  });
});
