import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Synchronize React's isOpen prop with the browser's native <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      dialog.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    dialog.addEventListener("keydown", handleKeyDown);
    return () => dialog.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close modal when clicking on the dark backdrop
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };



  return (
    <dialog
      ref={dialogRef}
      tabIndex={-1}
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1.5rem",
        maxWidth: "500px",
        width: "90%",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2 id="modal-title" style={{ margin: 0, fontSize: "1.25rem" }}>
          {title}  
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            background: "none",
            border: "none",
            fontSize: "1.25rem",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </header>

      {/* Main Content */}
      <section>{children}</section>
    </dialog>
  );
}