import { PlusOutlined } from "@ant-design/icons"
import { Typography, Flex, Tag, Tooltip } from "antd"
import { useState } from "react"
import { AppModal } from "../../../../components"
import { CompanyBranchType, UserDataType } from "../../types"
import { ProfileParamsChart } from "../ProfileParammsChart"

const {Title} = Typography

export const ProfileParams = ({userData}: {userData: UserDataType}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [branchToDeleteData, setBranchToDeleteData] = useState<CompanyBranchType | null>(null)

    const onBranchAdd = () => {
        setIsDrawerOpen(true)
    }

    const setDrawerClose = () => {
        setIsDrawerOpen(false)
    }

    const onTagDelete = (e: any, tag: any) => {
        e.preventDefault();
        setBranchToDeleteData(tag)
    }

    const onModalClose = () => {
        setBranchToDeleteData(null)
    }
    
    return (
        <>
            <AppModal 
                open={Boolean(branchToDeleteData)} 
                title={`Вы действительно хотите удалить филиал "${branchToDeleteData?.name}"?`}
                onClose={onModalClose}
            >
                <Flex vertical>
                    <Tooltip><b>Адрес:</b> {branchToDeleteData?.address}</Tooltip>
                </Flex>
            </AppModal>
            <AppModal open={isDrawerOpen} onClose={setDrawerClose} title={'Добавить филиал'}>
                123
            </AppModal>
            <div className="profileParams">
                <div>
                    <Title level={4}>Характеристики компании</Title>
                    <Typography>Активных филиалов: {userData.userCompanyCounter}</Typography>
                    <Typography>Неактивных филиалов: {userData.userNotActiveCompanyCounter}</Typography>
                    <Typography>Минимальная стоимость аренды: {userData.minPrice}р</Typography>
                    <Typography>Максимальная стоимость аренды: {userData.maxPrice}р</Typography>
                    <Typography>Общий метраж всех помещений: {userData.totalSizePremises}м³</Typography>
                    <Typography>Активных заказов: {userData.activeOrders}</Typography>
                </div>
                <div>
                    <Title level={4}>Текущие филиалы</Title>
                    <Flex wrap={'wrap'}>
                        {userData.companyBranches.map(el => (
                            <Tooltip key={el.name} title={el.address}>
                                <Tag closable onClose={(e) => onTagDelete(e, el)}>{el.name}</Tag>
                            </Tooltip>
                        ))}
                        <Tag icon={<PlusOutlined />} onClick={onBranchAdd} className='branchAddTag'>
                            Добавить
                        </Tag>
                    </Flex>
                    <ProfileParamsChart ordersData={userData.ordersData} />
                </div>
            </div>
        </>
    )
}