"use client";

import { useRef, useState } from "react";
import styles from "./sledlings.module.css";

/**
 * The invite code, large, with a Copy code button. The code stays readable and selectable without JavaScript;
 * where the clipboard is not available (an app's own browser may block it) the button selects the code instead.
 */
export function CopyCode({ label, code, long = false }: { label: string; code: string; long?: boolean }) {
  const value = useRef<HTMLSpanElement>(null);
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("Copied");
    } catch {
      const node = value.current;
      const selection = window.getSelection();
      if (node && selection) selection.selectAllChildren(node);
      setStatus("Code selected. Copy it from your phone’s menu.");
    }
  }

  return (
    <div className={styles.codeBox}>
      <p className={styles.codeLabel}>{label}</p>
      <p className={long ? `${styles.code} ${styles.codeLong}` : styles.code}>
        <span ref={value}>{code}</span>
      </p>
      <div className={styles.codeActions}>
        <button type="button" className={styles.copy} onClick={copy}>
          Copy code
        </button>
        <span className={styles.copyStatus} role="status">
          {status}
        </span>
      </div>
    </div>
  );
}
