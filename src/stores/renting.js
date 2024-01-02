import { observable, makeObservable, action, computed } from 'mobx';
import { useState } from 'react';
import Swal from 'sweetalert2'
//rented-מושכר (בהווה)

class RentingStor {

    orderList = [];
    isPost = false;

    constructor() {
        makeObservable(this, {
            orderList: observable,
            addOrder: action,
            postRenting: action,
            setOrderList: action,
            isPost: observable,
            // enrolling:action,
            // currentOrderList:computed,

        })
    }
    postRenting = async ({ serviceType: id, clientName: invitingName, clientPhone: invitingPhone, clientEmail: invitingMail, dateTime: invitingDate }) => {
        // console.log(invitingName, invitingPhone, invitingMail, invitingDate, invitingNumberOfNights)

        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify({ serviceType: id, clientName: invitingName, clientPhone: invitingPhone, clientEmail: invitingMail, dateTime: invitingDate }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log("respose", response)

        if(response.ok)
        {
            Swal.fire({
                icon: "success",
                title: "ההרשמה הסתימה בהצלחה",
                text: "מחכים לכם מאד",
                
              }); 
        }
        else{
            Swal.fire({
                icon: "error",
                title: "...אופס",
                text: "תאריך זה תפוס בחר תאריך אחר",
               
              });
        }


    }
    setOrderList(data) {
        this.orderList = data;
    }
    // getRenting = async () => {
    //     console.log("-------------------")
    //     const response1 = await fetch("http://localhost:8787/appointment", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     });
    //     const data = await response1.json();
    //     console.log(data)
    //     this.setOrderList(data);


    // }
    getRenting = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        console.log(data);
        this.orderList = data;
        console.log(this.orderList)

    }
    addOrder = (invitingName, invitingPhone, invitingMail, invitingDate, invitingNumberOfNights) => {
        console.log("date", invitingDate)
        console.log("name", invitingName)
        console.log(invitingMail)
        console.log(invitingNumberOfNights)
        this.orderList = [...this.orderList, {
            id: this.orderList.length, name: invitingName,
            phone: invitingPhone, mail: invitingMail, date: invitingDate, nights: invitingNumberOfNights
        }]
    }
    // get currentOrderList(){
    //     return this.
    // }
}
export default new RentingStor();