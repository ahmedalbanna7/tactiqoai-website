import { act, renderHook } from "@testing-library/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

it("respects the visitor's reduced-motion preference", () => {
  const original = window.matchMedia;
  window.matchMedia = () => ({
    matches: true,
    media: "(prefers-reduced-motion: reduce)",
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => true,
  });
  const { result } = renderHook(() => useReducedMotion());
  act(() => undefined);
  expect(result.current).toBe(true);
  window.matchMedia = original;
});
