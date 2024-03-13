import { Auction } from "./models/Auction";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Bid } from "./models/Bid";

let actions: Auction[] = [
  {
    id: "ABC123",
    img:"https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F11.png",
    name:"Nissan GT-R",
    year:2022,
    highestBid: 0,
    highestBidder: "",
    bids: [
      { amount: 100, name: "Långben",auctionId:"ABC123" },
      { amount: 200, name: "Kajsa Anka",auctionId:"ABC123" },
    ],
  },

  {
    id: "HEJ123",
    img:"https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F2.png",
    name:"Ford Egde",
    year:2023,
    highestBid: 0,
    highestBidder: "",
    bids: [
      { amount: 120000, name: "Krösus Sork",auctionId:"HEJ123" },
      { amount: 120001, name: "Farbror Joakim" ,auctionId:"HEJ123"},
    ],
  },

  {
    id: "DDD222",
    img:"https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F13.png",
    name:"Kia Forte",
    year:2019,
    highestBid: 0,
    highestBidder: "",
    bids: [
      { amount: 500, name: "Mårten Gås",auctionId:"DDD22" },
      { amount: 200, name: "Kajsa Anka" ,auctionId:"DDD222"},
    ],
  },




];

const PORT = 3000;
const app = express();

app.use(cors()); 


app.get("/api/auctions", (req, res) => {
  res.json(actions)
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("a user connected");

  // socket.emit(
  //   "auctions",
  //   actions.map((p) => {
  //     return { id: p.id, name: p.name };
  //   })
  // );

  // socket.on("join_room", (id: string, callback) => {
  //   socket.rooms.forEach((room) => {
  //     console.log("Leaving room: ", room);

  //     socket.leave(room);
  //   });

  //   console.log("Joining room: ", id);

  //   socket.join(id);

  //   callback(actions.find((p) => p.id === id));
  // });

  // Callback är den funktion som skickas med i händelsen från klienten
//   socket.on("placebid", (bid: Bid) => {
//     console.log(bid);
//     //console.log(actions)
//     console.log(actions[1].id , bid.auctionId)
//     const product = actions.find((p) => p.id == bid.auctionId);
//     console.log(product)
//     product?.bids.push(bid);

//     io.emit(
//       "newbid",
//       actions.find((p) => p.id === bid.auctionId)
//     );
//   });
// });

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
