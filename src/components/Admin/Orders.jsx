import React, { useState } from "react";
import Layout from "./Layout";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      orderId: "#rty0012",
      customerName: "Raushan Kumar",
      email: "example@gmail.com",
      mobile: "+91 9765098874",
      product: "lenovo laptop",
      amount: 52000,
      date: "12-10-2014 10:15:14 AM",
      status: "pending",
    },
    {
      orderId: "#rty0013",
      customerName: "Anjali Verma",
      email: "anjali@gmail.com",
      mobile: "+91 9876543210",
      product: "Apple iPhone 14",
      amount: 95000,
      date: "15-10-2024 11:30:00 AM",
      status: "shipped",
    },
    {
      orderId: "#rty0014",
      customerName: "Vikram Singh",
      email: "vikram.singh@yahoo.com",
      mobile: "+91 8888776655",
      product: "Samsung Galaxy S22",
      amount: 75000,
      date: "16-10-2024 02:45:09 PM",
      status: "delivered",
    },
    {
      orderId: "#rty0015",
      customerName: "Priya Sharma",
      email: "priya.sharma@outlook.com",
      mobile: "+91 8776655443",
      product: "Sony 55-inch LED TV",
      amount: 45000,
      date: "18-10-2024 09:00:00 AM",
      status: "pending",
    },
    {
      orderId: "#rty0016",
      customerName: "Arvind Rao",
      email: "arvind.rao@gmail.com",
      mobile: "+91 9666777889",
      product: "Dell XPS 13",
      amount: 95000,
      date: "19-10-2024 01:15:00 PM",
      status: "shipped",
    },
    {
      orderId: "#rty0017",
      customerName: "Suman Gupta",
      email: "suman.gupta@gmail.com",
      mobile: "+91 9098765432",
      product: "HP Pavilion Gaming Laptop",
      amount: 67000,
      date: "20-10-2024 04:00:00 PM",
      status: "delivered",
    },
    {
      orderId: "#rty0018",
      customerName: "Karan Mehta",
      email: "karan.mehta@icloud.com",
      mobile: "+91 9999888777",
      product: "Oppo Reno 8 Pro",
      amount: 33000,
      date: "22-10-2024 11:20:30 AM",
      status: "pending",
    },
    {
      orderId: "#rty0012",
      customerName: "Raushan Kumar",
      email: "example@gmail.com",
      mobile: "+91 9765098874",
      product: "lenovo laptop",
      amount: 52000,
      date: "12-10-2014 10:15:14 AM",
      status: "pending",
    },
    {
      orderId: "#rty0013",
      customerName: "Anjali Verma",
      email: "anjali@gmail.com",
      mobile: "+91 9876543210",
      product: "Apple iPhone 14",
      amount: 95000,
      date: "15-10-2024 11:30:00 AM",
      status: "shipped",
    },
    {
      orderId: "#rty0014",
      customerName: "Vikram Singh",
      email: "vikram.singh@yahoo.com",
      mobile: "+91 8888776655",
      product: "Samsung Galaxy S22",
      amount: 75000,
      date: "16-10-2024 02:45:09 PM",
      status: "delivered",
    },
    {
      orderId: "#rty0015",
      customerName: "Priya Sharma",
      email: "priya.sharma@outlook.com",
      mobile: "+91 8776655443",
      product: "Sony 55-inch LED TV",
      amount: 45000,
      date: "18-10-2024 09:00:00 AM",
      status: "pending",
    },
    {
      orderId: "#rty0016",
      customerName: "Arvind Rao",
      email: "arvind.rao@gmail.com",
      mobile: "+91 9666777889",
      product: "Dell XPS 13",
      amount: 95000,
      date: "19-10-2024 01:15:00 PM",
      status: "shipped",
    },
    {
      orderId: "#rty0017",
      customerName: "Suman Gupta",
      email: "suman.gupta@gmail.com",
      mobile: "+91 9098765432",
      product: "HP Pavilion Gaming Laptop",
      amount: 67000,
      date: "20-10-2024 04:00:00 PM",
      status: "delivered",
    },
    {
      orderId: "#rty0018",
      customerName: "Karan Mehta",
      email: "karan.mehta@icloud.com",
      mobile: "+91 9999888777",
      product: "Oppo Reno 8 Pro",
      amount: 33000,
      date: "22-10-2024 11:20:30 AM",
      status: "pending",
    },
    {
      orderId: "#rty0012",
      customerName: "Raushan Kumar",
      email: "example@gmail.com",
      mobile: "+91 9765098874",
      product: "lenovo laptop",
      amount: 52000,
      date: "12-10-2014 10:15:14 AM",
      status: "pending",
    },
    {
      orderId: "#rty0013",
      customerName: "Anjali Verma",
      email: "anjali@gmail.com",
      mobile: "+91 9876543210",
      product: "Apple iPhone 14",
      amount: 95000,
      date: "15-10-2024 11:30:00 AM",
      status: "shipped",
    },
    {
      orderId: "#rty0014",
      customerName: "Vikram Singh",
      email: "vikram.singh@yahoo.com",
      mobile: "+91 8888776655",
      product: "Samsung Galaxy S22",
      amount: 75000,
      date: "16-10-2024 02:45:09 PM",
      status: "delivered",
    },
    {
      orderId: "#rty0015",
      customerName: "Priya Sharma",
      email: "priya.sharma@outlook.com",
      mobile: "+91 8776655443",
      product: "Sony 55-inch LED TV",
      amount: 45000,
      date: "18-10-2024 09:00:00 AM",
      status: "pending",
    },
    {
      orderId: "#rty0016",
      customerName: "Arvind Rao",
      email: "arvind.rao@gmail.com",
      mobile: "+91 9666777889",
      product: "Dell XPS 13",
      amount: 95000,
      date: "19-10-2024 01:15:00 PM",
      status: "shipped",
    },
    {
      orderId: "#rty0017",
      customerName: "Suman Gupta",
      email: "suman.gupta@gmail.com",
      mobile: "+91 9098765432",
      product: "HP Pavilion Gaming Laptop",
      amount: 67000,
      date: "20-10-2024 04:00:00 PM",
      status: "delivered",
    },
    {
      orderId: "#rty0018",
      customerName: "Karan Mehta",
      email: "karan.mehta@icloud.com",
      mobile: "+91 9999888777",
      product: "Oppo Reno 8 Pro",
      amount: 33000,
      date: "22-10-2024 11:20:30 AM",
      status: "pending",
    },
  ]);

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-semibold">Orders</h1>
        <div className="mt-6">
          <table className=" w-full">
            <thead>
              <tr className="bg-rose-500 text-white">
                <th className="py-4">OrderId</th>
                <th>Customer's Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((item, index) => (
                <tr
                  key={item.orderId}
                  className="text-center"
                  style={{
                    background: (index + 1) % 2 === 0 ? "#e2e8f0" : "white",
                  }}
                >
                  <td className="py-4">{item.orderId}</td>
                  <td className="capitalize">{item.customerName}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td className="capitalize">{item.product}</td>
                  <td>₹{item.amount.toLocaleString()}</td>
                  <td>{item.date}</td>
                  <td className="capitalize">
                    <select className="border border-gray-400 p-1 rounded">
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="dispatched">Dispatched</option>
                      <option value="returned">Returned</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
