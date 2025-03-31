import { Modal } from "antd"
import './AppModal.scss'

type AppModalProps = {
    open: boolean,
    title: string,
    children: React.ReactNode,
    onClose: () => void
}

export const AppModal = ({open, title, children, onClose}: AppModalProps) => {
    return (
        <Modal 
            cancelText='Отмена' 
            open={open} 
            title={title} 
            className="AppModal"
            onCancel={onClose}
            onClose={onClose}
        >
            {children}
        </Modal>
    )
}