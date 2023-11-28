import { test, expect } from "@playwright/test";
import { ChildProcessWithoutNullStreams } from "child_process";

import { startServer } from "./utils";

let serverProcess: ChildProcessWithoutNullStreams;

test.beforeAll("setup", async () => {
  serverProcess = await startServer(["./http.js"]);
});

test.afterAll("teardown", () => {
  serverProcess.kill("SIGINT");
});

test.describe("httpモジュールのみでシンプルなHTTPサーバーを実装", () => {
  test('HTTPサーバーがHello World"を表示する', async ({ page }) => {
    await page.goto("http://localhost:3000");
    const text = await page.textContent("body");
    await expect(text).toEqual("Hello World");
  });
});
