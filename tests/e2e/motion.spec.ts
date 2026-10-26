import { expect, test } from "@playwright/test";

test("home remains readable without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(
    page.getByRole("heading", { name: "Veja suas conexões com mais clareza." }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Começar importação" }),
  ).toBeVisible();
  await expect(page.locator("ol > li")).toHaveCount(3);
  for (const element of await page.locator("[data-motion-reveal]").all()) {
    await expect(element).toHaveCSS("opacity", "1");
  }
  await context.close();
});

test("reduced motion keeps content still and controls usable", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const action = page.getByRole("link", { name: "Começar importação" });
  await action.focus();
  await expect(action).toBeFocused();
  await expect(action).toHaveCSS("transition-duration", "0s");
  for (const element of await page.locator("[data-motion-reveal]").all()) {
    await expect(element).toHaveCSS("opacity", "1");
    await expect(element).toHaveCSS("transform", "none");
  }
  await action.press("Enter");
  await expect(
    page.getByRole("button", { name: "Selecionar arquivo ZIP" }),
  ).toBeVisible();
});
