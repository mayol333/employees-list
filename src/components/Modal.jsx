export const Modal = ({ modalOpen, handleModalClose, children }) => {
    if (!modalOpen) {
        return null;
    }
    return (
        <div className={`modal-background ${modalOpen ? "open" : "closed"}`}>
            <div className="modal">
                <span onClick={handleModalClose} className="modal-close-button">
                    X
                </span>
                {children}
            </div>
        </div>
    );
};
