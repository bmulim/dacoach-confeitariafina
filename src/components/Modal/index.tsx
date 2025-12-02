"use client";

import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function Modal({
  isOpen,
  title,
  children,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const initialRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel?.();
    }

    if (isOpen) {
      document.addEventListener("keydown", onKey);
      // prevent background scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onCancel]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => initialRef.current?.focus(), 10);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
      aria-modal="true"
      role="dialog"
      onPointerDown={(e) => {
        // close when clicking the overlay (not the dialog)
        if (e.target === overlayRef.current) onCancel?.();
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 max-w-lg w-full bg-white rounded-xl shadow-2xl p-6 border border-[var(--color-border)]">
        {title && (
          <h3 className="text-xl font-title font-semibold mb-4 text-[var(--color-ink)]">
            {title}
          </h3>
        )}

        <div className="mb-4">{children}</div>

        <div className="flex justify-end gap-3">
          <button
            ref={initialRef}
            className="px-5 py-2.5 rounded-lg bg-[var(--background-alt)] text-[var(--color-ink)] font-medium hover:bg-[var(--color-support)] transition-colors"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <button
            className="px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-all hover:shadow-md"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
