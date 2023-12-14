import { ChangeEventHandler, Dispatch, ReactNode, SetStateAction } from "react"
type VoidFunction = () => void
type RefreshUsers = Dispatch<SetStateAction<User[]>>
export interface Person {
    firstName:string
    lastName:string
    email:string
}
export interface Person2 {
    firstName:string
    lastName:string
}
export type Person3 = Omit<Person, "firstName" | "lastName">
export interface FormState extends Person {
    select:string
}
export interface User extends Person{
    id: string
    profession: string
    createdAt: string
    updatedAt: string
}
export interface SelectProps {
    placeholder:string
    options:string[]
    handleSelect:ChangeEventHandler<HTMLSelectElement>
    value:string
}
export interface ModalProps {
    modalOpen:boolean
    handleModalClose:VoidFunction
    children:ReactNode
}
export interface SearchInputProps {
    handleSearch: ChangeEventHandler<HTMLInputElement>
    value: string
}
export interface HeaderProps {
    count:number
}
export interface EditEmployeeFormProps extends Person {
    profession:string
    refreshUsers:RefreshUsers
    id:string
    handleModalClose:VoidFunction
}
export interface DeleteEmployeeProps {
    handleModalClose: VoidFunction
    id:string
    refreshUsers:RefreshUsers
}
export interface AddEmployeeButtonProps{
    handleModalOpen: VoidFunction
}
export interface EmployeeProps extends Person{
    profession:string
    created:string
    updated:string
    refreshUsers:RefreshUsers
    id:string
}
export interface CreateEmployeeFormProps {
    submit:(formState:FormState) => Promise<void>
}