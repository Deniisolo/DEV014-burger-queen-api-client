// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import { Ordersview } from "./Ordersview";
// import { OrdersApi } from "../../services/APIService";
// import { Navbar } from "../Navbar";

// // Mock de la API
// jest.mock("../../services/APIService", () => ({
//   OrdersApi: jest.fn(),
// }));

// jest.mock("../Navbar", () => {
//   return {
//     Navbar: () => <div>Navbar</div>,
//   };
// });

// describe("Ordersview", () => {
//   const mockOrders = [
//     {
//       id: 1,
//       userId: 2,
//       client: "Jude Milhon",
//       products: [
//         {
//           qty: 1,
//           product: {
//             id: 9,
//             name: "Ham and cheese sandwich",
//             price: 1000,
//             image: "",
//             type: "Breakfast",
//             dateEntry: "2022-03-05 15:14:10",
//           },
//         },
//       ],
//       status: "pending",
//       dataEntry: "2022-03-05 15:00",
//     },
//   ];

//   beforeEach(() => {
//     (OrdersApi as jest.Mock).mockResolvedValue(mockOrders);
//   });

//   test("renders the Navbar", () => {
//     render(<Ordersview />);
//     expect(screen.getByText("Navbar")).toBeInTheDocument();
//   });

//   test("displays the correct title", () => {
//     render(<Ordersview />);
//     expect(screen.getByText("Historial de pedidos")).toBeInTheDocument();
//   });

//   test("displays order information", async () => {
//     render(<Ordersview />);

//     await waitFor(() => {
//       expect(screen.getByText("Cliente: Jude Milhon")).toBeInTheDocument();
//       expect(screen.getByText("Estado: pending")).toBeInTheDocument();
//       expect(
//         screen.getByText("Fecha de creación: 3/5/2022, 3:00:00 PM")
//       ).toBeInTheDocument();
//     });
//   });

//   test("displays product details", async () => {
//     render(<Ordersview />);

//     await waitFor(() => {
//       expect(
//         screen.getByText("Producto: Ham and cheese sandwich")
//       ).toBeInTheDocument();
//       expect(screen.getByText("Cantidad: 1")).toBeInTheDocument();
//       expect(screen.getByText("Precio: $1000")).toBeInTheDocument();
//     });
//   });

//   test("handles missing dataEntry", async () => {
//     const ordersWithMissingDate = [
//       {
//         id: 2,
//         userId: 2,
//         client: "Katie Bouman",
//         products: [
//           {
//             qty: 2,
//             product: {
//               id: 1,
//               name: "American coffee",
//               price: 500,
//               image: "",
//               type: "Beverages",
//               dateEntry: "2022-03-05 15:14:10",
//             },
//           },
//         ],
//         status: "delivered",
//         dataEntry: undefined,
//       },
//     ];

//     (OrdersApi as jest.Mock).mockResolvedValue(ordersWithMissingDate);

//     render(<Ordersview />);

//     await waitFor(() => {
//       expect(
//         screen.getByText("Fecha de creación: Fecha no disponible")
//       ).toBeInTheDocument();
//     });
//   });
// });
