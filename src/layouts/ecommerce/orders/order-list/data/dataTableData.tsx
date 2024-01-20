/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable react/prop-types */
// ProductsList page components
import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import ivana from "assets/images/ivana-squares.jpg";

const dataTableData = {
  columns: [
    { Header: "id", accessor: "id", Cell: ({ value }: any) => <IdCell id={value} /> },
    {
      Header: "date",
      accessor: "date",
      Cell: ({ value }: any) => <DefaultCell value={value} />,
    },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ value }: any) => {
        let status;

        if (value === "paid") {
          status = <StatusCell icon="done" color="success" status="Unpaid" />;
        } else if (value === "refunded") {
          status = <StatusCell icon="replay" color="dark" status="Unpaid" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Unpaid" />;
        }

        return status;
      },
    },
    {
      Header: "patient",
      accessor: "patient",
      Cell: ({ value: [name, data] }: any) => (
        <CustomerCell image={data.image} color={data.color || "dark"} name={name} />
      ),
    },
    {
      Header: "description",
      accessor: "description",
      Cell: ({ value }: any) => {
        const [name, data] = value;

        return (
          <DefaultCell
            value={typeof value === "string" ? value : name}
            suffix={data.suffix || false}
          />
        );
      },
    },
    {
      Header: "amount",
      accessor: "amount",
      Cell: ({ value }: any) => <DefaultCell value={value} />,
    },
  ],

  rows: [
    {
      id: "#10421",
      date: "1 Nov, 10:20 AM",
      status: "paid",
      patient: ["Orlando Imieto", { image: team2 }],
      description: "Nike Sport V2",
      amount: "$140,20",
    },
    {
      id: "#10422",
      date: "1 Nov, 10:53 AM",
      status: "paid",
      patient: ["Alice Murinho", { image: team1 }],
      description: "Valvet T-shirt",
      amount: "$42,00",
    },
    {
      id: "#10423",
      date: "1 Nov, 11:13 AM",
      status: "refunded",
      patient: ["Michael Mirra", { image: "M" }],
      description: ["Leather Wallet", { suffix: "+1 more" }],
      amount: "$25,50",
    },
    {
      id: "#10424",
      date: "1 Nov, 12:20 PM",
      status: "paid",
      patient: ["Andrew Nichel", { image: team3 }],
      description: "Bracelet Onu-Lino",
      amount: "$19,40",
    },
    {
      id: "#10425",
      date: "1 Nov, 1:40 PM",
      status: "canceled",
      patient: ["Sebastian Koga", { image: team4 }],
      description: ["Phone Case Pink", { suffix: "x 2" }],
      amount: "$44,90",
    },
    {
      id: "#10426",
      date: "1 Nov, 2:19 PM",
      status: "paid",
      patient: ["Laur Gilbert", { image: "L" }],
      description: "Backpack Niver",
      amount: "$112,50",
    },
    {
      id: "#10427",
      date: "1 Nov, 3:42 AM",
      status: "paid",
      patient: ["Iryna Innda", { image: "I" }],
      description: "Adidas Vio",
      amount: "$200,00",
    },
    {
      id: "#10428",
      date: "2 Nov, 9:32 AM",
      status: "paid",
      patient: ["Arrias Liunda", { image: "A" }],
      description: "Airpods 2 Gen",
      amount: "$350,00",
    },
    {
      id: "#10429",
      date: "2 Nov, 10:14 AM",
      status: "paid",
      patient: ["Rugna Ilpio", { image: team5 }],
      description: "Bracelet Warret",
      amount: "$15,00",
    },
    {
      id: "#10430",
      date: "2 Nov, 10:14 AM",
      status: "refunded",
      patient: ["Anna Landa", { image: ivana }],
      description: ["Watter Bottle India", { suffix: "x 3" }],
      amount: "$25,00",
    },
    {
      id: "#10431",
      date: "2 Nov, 3:12 PM",
      status: "paid",
      patient: ["Karl Innas", { image: "K" }],
      description: "Kitchen Gadgets",
      amount: "$164,90",
    },
    {
      id: "#10432",
      date: "2 Nov, 5:12 PM",
      status: "paid",
      patient: ["Oana Kilas", { image: "O", color: "info" }],
      description: "Office Papers",
      amount: "$23,90",
    },
  ],
};

export default dataTableData;
