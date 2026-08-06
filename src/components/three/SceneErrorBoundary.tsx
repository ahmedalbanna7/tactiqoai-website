"use client";

import { Component, type ReactNode } from "react";

export class SceneErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    // The static visual below keeps the story intact if WebGL is unavailable.
  }

  render() {
    return this.state.failed ? <div className="core-fallback" aria-hidden="true"><span /><i /><b /></div> : this.props.children;
  }
}
