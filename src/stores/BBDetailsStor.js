import { observable, makeObservable, action, computed } from 'mobx';
import Logo1 from '../../src/assets/images/topComplet.png';
import Swal from 'sweetalert2'

import e from '../../src/assets/images/e.jpg';
import f from '../../src/assets/images/f.jpg';
import g from '../../src/assets/images/g.jpg';
import h from '../../src/assets/images/h.jpeg';
import i from '../../src/assets/images/i.jpg';
import j from '../../src/assets/images/j.jpg';
import n from '../../src/assets/images/n.jpg';
import v from '../../src/assets/images/v.jpg';
import t from '../../src/assets/images/t.jpg';
import w from '../../src/assets/images/w.jpg';


//פרטי צימרים כמו שירותי העסק
class BBDetailsStor {
    isLogin = localStorage.getItem("isLog");
    isBussinesDetailsPost = false;
    BBDetails = [
        {
            id: "0",
            name: "אחוזת המצפה",
            address: "צפת",
            price: 6000,
            duration: 2880,
            numberOfPersons: "15-20-נפשות",
            numberOfRooms: "8 חד'",
            picture: w,

        },
        {
            id: "1",
            name: "אחוזת המצפה",
            address: "ירושלים האודם 18",
            price: 550,
            duration: 2880,
            numberOfPersons: "6-נפשות",
            numberOfRooms: "2 חד'",
            picture: t,


        },
        {
            id: "2",
            name: "תכלת דוד בנווה מיכאל",
            address: "ירושלים והסביבה",
            price: 600,
            duration: 2880,
            numberOfPersons: "6-נפשות",
            numberOfRooms: "חד'",
            picture: h,


        },
        {
            id: "3",
            name: "אחוזת כינורות טבריה",
            address: "הפלמח 2 טבריה",
            price: 1000,
            duration: 2880,
            numberOfPersons: "7-נפשות",
            numberOfRooms: " חד'",
            picture: f,

        },
        {
            id: "4",
            name: "המקום שלכם",
            address: "מצפה יריחו מוריה",
            price: 500,
            duration: 2880,
            numberOfPersons: "8-נפשות",
            numberOfRooms: "1 חד'",
            picture: e,

        },
        {
            id: "5",
            name: "נוף גן עדן צפת",
            address: "צפת, הר כנען",
            price: 4000,
            duration: 2880,
            numberOfPersons: "20-30-נפשות",
            numberOfRooms: " חד'",
            picture: n,

        },
        {
            id: "6",
            name: "דירה מדהימה לחמישי שישי שבת",
            address: "רכסים",
            price: 800,
            duration: 2880,
            numberOfPersons: "10-נפשות",
            numberOfRooms: "4 חד'",
            picture: v,

        }
    ];
    business = {
        id: "123",
        name: "צימר ברמה",
        address: "תל אביב",
        phone: "058363985",
        owner: "Leha ner - שיווק והפצה",
        logo: Logo1,
        description: "אתר הנופש החרדי הגדול",
        mail: " zimerBerama@gmail.com - לרישום צימר",
    };

    constructor() {
        makeObservable(this, {

            business: observable,
            BBDetails: observable,
            initBusinessDetails: action,//איתחול פרטי עסק
            postBusinessDetails: action,//עידכון פרטי עסק
            showingBusinessDetails: action,//הצגת פרטי עסק
            setBusiness: action,//הכנסת פרטי עסק מעודכנים

            isBussinesDetailsPost: observable,
            setIsBussinesDetailsPost: observable,
            initialServices: action,
            postBBDetails: action,
            initialServices: action,
            isLogin: observable,
          
            initialBBDetails: action,

        })
        const fetchBusinessDataExists = async () => {
            const bus = await this.showingBusinessDetails();
            if (Object.keys(bus).length === 0) {
                this.initBusinessDetails(this.business);
            }
            else {
                this.business = bus;
            }
        }
        fetchBusinessDataExists()
        const fetchServicesExists = async () => {
            const ser = await this.initialServices();
            console.log("ser", ser)
            if (ser.length === 0) {
                console.log("b", this.BBDetails)
                this.BBDetails.map((details) => {
                    this.initialBBDetails(details);
                    console.log(details, "details")
                })
                console.log("BBDetails", this.BBDetails)
                console.log("00000000000000")
            }
            else {
                this.BBDetails = ser;
            }
        }
        fetchServicesExists();
    }

    postBBDetails = async (newService) => {
        console.log("newService",newService)
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(newService),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("post")
        console.log(this.BBDetails)
        if (response.status === 200) {
            this.BBDetails = ([...this.BBDetails, newService])
            console.log(this.BBDetails)
           
            Swal.fire({
                icon: "success",
                title: "עריכת הפרטים הסתיימה בהצלחה",
                text: "קוד אשור: 285423668",
            });

        }
        else {
            Swal.fire({
                icon: "error",
                title: "...אופס",
                text: "בדוק את שדות הקלט שוב",

            });
        }
    }
    initialBBDetails = async (newService) => {
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(newService),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("post")
        console.log(this.BBDetails)
        if (response.status === 200) {

            console.log(this.BBDetails)
            return
        }
        return
    }

    initialServices = async () => {

        const response = await fetch("http://localhost:8787/services");
        const data = await response.json();
    
        return data;
    }

    setBusiness(data) {
        this.business = data;
    }
    initBusinessDetails = async () => {

        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify(BBDetailsStor.business),
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log(response.ok)
    }
    setIsBussinesDetailsPost(val) {
        this.isBussinesDetailsPost = val;
    }
    postBusinessDetails = async (val) => {
        console.log(val)

        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify(val),
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log("postBusinessDetails");
        console.log(response.statusText)
        if (response.ok) {
            this.business = val;
            Swal.fire({
                icon: "success",
                title: "עריכת הפרטים הסתיימה בהצלחה",
                text: "קוד אשור: 285423668",
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "...אופס",
                text: "בדוק את שדות הקלט שוב",

            });
        }
    }

    showingBusinessDetails = async () => {
        console.log("-------------------")
        const response1 = await fetch("http://localhost:8787/businessData")
        const data = await response1.json();
        return data;
    }
}
export default new BBDetailsStor();