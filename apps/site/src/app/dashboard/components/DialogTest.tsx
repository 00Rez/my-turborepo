"use client";

import { useRef, useState } from "react";
import styles from "../page.module.scss";
import { InputText } from "@repo/ui/lib/molecules/inputs/input-text";
import { Button } from "@repo/ui/lib/atoms/button";

export const DialogTest = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleClick = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }
  return (
    <>
      <dialog ref={dialogRef} className={styles.dialog} closedby="any">
        <div style={{ background: "white", padding: "2rem", display: "flex", gap: "1rem" }}>
          <InputText autoFocus />
          <Button onClick={() => dialogRef.current?.requestClose()}>Close</Button>
        </div>
      </dialog>
      <Button onClick={handleClick}>Open dialog</Button>
    </>
  )
}