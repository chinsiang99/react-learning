import { createPortal } from "react-dom"

const PopupContent = ({copied}) => {
    return createPortal(
        <section>
            {copied && (
                <div style={{
                    position: "absolute",
                    bottom: "-2rem",
                    right: "0",
                    background: "#4CAF50",
                    color: "#fff",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                }}>
                    Copied to Clipboard!
                </div>
            )}
        </section>,
        document.querySelector("#popup-content")
    );
}

export default PopupContent