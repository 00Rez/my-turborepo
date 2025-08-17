"use client";

import { useRef, useState } from "react";
import styles from "../page.module.scss";
import { InputText } from "@repo/ui/lib/molecules/inputs/input-text";
import { Button } from "@repo/ui/lib/atoms/button";
import { log } from "@repo/logger";

export const DialogTest = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [text, setText] = useState('');
  const handleClick = () => {
    log('showing dialog test')
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }
  const handleClose = () => {
    log('closing dialog test');
    setText('');
    dialogRef.current?.requestClose(text);
  }
  return (
    <>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        // @ts-expect-error: no def
        closedby="any"
      >
        <div style={{ background: "white", padding: "2rem", display: "flex", gap: "1rem" }}>
          <InputText autoFocus value={text} onChange={(ev) => setText(ev.target.value)} />
          <Button onClick={handleClose}>Close</Button>
        </div>
      </dialog>
      <Button onClick={handleClick}>Open dialog</Button>
    </>
  )
}