export const formatDate = (date:string) => {
    const newDate = new Date(date);
    return `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;
};
