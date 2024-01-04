import { observer } from "mobx-react";
import { useEffect } from "react";
import RentingStor from "../../stores/renting";
import '../orderList/orderList.css'
const OrderList = (observer(() => {

    const getColr = (datetime) => {
        const today = new Date();
        const myDate = new Date(datetime);
        const x = myDate.getTime() - today.getTime()//datediff
       
        const diffDays = Math.ceil(x / (1000 * 3600 * 24));
      
        if (diffDays === 0)//today
            return 0
        
        if (diffDays <= 7)//this week
            return 1
       
        if (diffDays > 7)//futur
            return 2
        
    }
    useEffect(() => {
        RentingStor.getRenting();
        console.log("console", RentingStor.orderList)
    }, [])
    return (
        <>
            <h1>:רשימת ההזמנות</h1>
            <div id="div">
                {RentingStor.orderList.map((list) => {
                    return (

                        <div className={getColr(list.dateTime) === 0 ? `red` : getColr(list.dateTime) === 1 ? `orange` : `green`} key={list.id}>
                            <p>{list.serviceType}:קוד צימר</p>
                            <p>{list.clientName} :שם לקוח </p>
                            <p>{list.dateTime} :תאריך הזמנה </p>
                            <p>{list.clientPhone} :טלפון מזמין</p>
                            <p>{list.clientEmail } :מייל מזמין   </p>
                        </div>
                    )
                }
                )}
            </div>
        </>
    )
}))
export default OrderList