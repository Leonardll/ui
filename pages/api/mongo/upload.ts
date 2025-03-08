// import clientPromise from "../../lib/mongodb"
// export default async function uploader(req, res) {
//     try {
//         const client = await clientPromise
//         const db = client.db("my_Database")
//         const collection = await db.collection("portfolio").insertMany([
//             {
//                 imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2F1_RN_5KZaVN0xkUXKW4pnTFg.webp?alt=media&token=4ebb933b-888c-4659-891a-d98ba78ef65c",
//                 title: "Polypus",
//                 description:
//                     "Polypus is a decentralized application that enables users to borrow assets using the value of their NFTs as collateral, or to lend assets. The technology stack used for this project includes HTML, Tailwind CSS, Next JS, and Fleek. The smart contract is written in Solidity and deployed on the Polygon and Arbitrum networks. I was responsible for the front-end development and integration of the smart contract. The project has received recognition and awarded as the best application on Polygon and Arbitrum, as well as the Compound Labs Pool Prize.",
//                 link: "https://morning-king-0051.on.fleek.co/",
//                 github: "https://github.com/npasquie/best-nft-as-collateral",
//             },
//             {
//                 imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2FchainlinkHackathon.png?alt=media&token=09bc96a0-2daa-40f1-853f-331a12977113",
//                 title: "The Raffle House",
//                 description:
//                     "The Raffle House is a decentralized application that enables users to participate in fair raffles for an opportunity to win a variety of prizes, including fancy sneakers, artifacts, cars, motorbikes, and real estate derivatives. As project manager, I was in charge of overseeing the full-stack development during the Chainlink Hackathon in 2022. The technology stack used includes HTML, Tailwind CSS, Next JS, and Fleek. The smart contract, written in Solidity, is currently being tested on the testnet while the project is still in development. We are actively seeking ways to tokenize real-world assets and production chains in order to reduce the trust factor and enhance transparency in the raffle process. Development is ongoing.",
//                 link: "https://wild-dream-9169.on.fleek.co/",
//                 github: "https://github.com/LEO-TEAM-CHAINLINK-HACKATHON/NFTLOTTERY1",
//             },
//             {
//                 imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fhands.jpg?alt=media&token=43dbebfe-5b91-42e2-bacd-85987a5fe76b",
//                 title: "Unico Hogar",
//                 description:
//                     "My first freelance assignment was for a Barcelona-based Real Estate Concierge service. I used the following technology stack: HTML, CSS, Bootstrap, Framer-Motion, SCSS, and Next JS. The website was deployed on Vercel",
//                 link: "https://www.unicohogar.com/",
//                 github: "https://github.com/Leonardll/unicoHogar",
//             },
//             {
//                 imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fcity-scoot-banner.jpg?alt=media&token=7e3bab11-c46f-4815-8be9-fa57abbf94bf",
//                 title: "City Scoot",
//                 description:
//                     "City Scoot is my first web development project that I am proud of. It was my first public website and also it was my final assignment for my Computer Science Foundation Degree. The technology stack that I used includes HTML, CSS, Bootstrap, SCSS, Javascript, and Firebase.",
//                 link: "https://cityscoot-d6c37.web.app/",
//                 github: "https://github.com/Leonardll/City-Scoot",
//             },
//         ])
//         const data = await collection.find({}).limit(20).toArray()
//         console.log(data)
//         return res.status(200).json(data)
//     } catch (e) {
//         res.status(500).json({ message: e.message })
//     }
// }
