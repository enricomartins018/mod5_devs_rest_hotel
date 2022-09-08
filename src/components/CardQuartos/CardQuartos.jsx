// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple,
// } from "mdb-react-ui-kit";
// import deluxe from "../../assets/image/aptoDeluxe.jpg";
// import prestige from "../../assets/image/prt-listing.png";
// import deluxeDouble from "../../assets/image/aptoDeluxeDouble.jpg";
// import junior from "../../assets/image/junior-suite.jpg";
// import suiteJunior from "../../assets/image/deluxe-junior-suite-4.jpg";
// import juniorTerrace from "../../assets/image/junior-suite-terrace.jpg";
// import suitePrestige from "../../assets/image/prestige-suite-7.jpg";
// import suitePanamby from "../../assets/image/suite-panamby.jpeg";
// import grandSuite from "../../assets/image/granSuitesp.jpg";
// import S from "./cardQuartos.module.css";

// export default function cardQuartos() {
//   return (
//     <div className={S.containerQuartos}>
//       <div className={S.cardsQuartos}>
//         <MDBCard>
//           <MDBRipple
//             rippleColor="light"
//             rippleTag="div"
//             className="bg-image hover-overlay"
//           >
//             <MDBCardImage src={deluxe} fluid alt="..." />
//             <a>
//               <div
//                 className="mask"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               ></div>
//             </a>
//           </MDBRipple>
//           <MDBCardBody className={S.cardBody}>
//             <MDBCardTitle>Apartamento Deluxe</MDBCardTitle>
//             <MDBCardText>
//               Os Apartamentos Deluxe são elegantemente decorados com peças e
//               materiais contemporâneos inspirados na natureza.
//             </MDBCardText>
//             <MDBBtn href="#">RESERVE</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </div>
//       <div className={S.cardsQuartos}>
//         <MDBCard>
//           <MDBRipple
//             rippleColor="light"
//             rippleTag="div"
//             className="bg-image hover-overlay"
//           >
//             <MDBCardImage src={prestige} fluid alt="..." />
//             <a>
//               <div
//                 className="mask"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               ></div>
//             </a>
//           </MDBRipple>
//           <MDBCardBody className={S.cardBody}>
//             <MDBCardTitle>Apartamento Prestige Terrace</MDBCardTitle>
//             <MDBCardText>
//               Os Apartamentos Prestige Terrace possuem elegante decoração
//               contemporânea.
//             </MDBCardText>
//             <MDBBtn href="#">RESERVE</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </div>
//       <div className={S.cardsQuartos}>
//         <MDBCard>
//           <MDBRipple
//             rippleColor="light"
//             rippleTag="div"
//             className="bg-image hover-overlay"
//           >
//             <MDBCardImage src={deluxeDouble} fluid alt="..." />
//             <a>
//               <div
//                 className="mask"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               ></div>
//             </a>
//           </MDBRipple>
//           <MDBCardBody className={S.cardBody}>
//             <MDBCardTitle>Apartamento Deluxe Double</MDBCardTitle>
//             <MDBCardText>
//               O Apartamento Deluxe Double Double possui decoração contemporânea
//               elegante e suave.
//             </MDBCardText>
//             <MDBBtn href="#">RESERVE</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </div>
//       <div className={S.cardsQuartos}>
//         <MDBCard>
//           <MDBRipple
//             rippleColor="light"
//             rippleTag="div"
//             className="bg-image hover-overlay"
//           >
//             <MDBCardImage src={junior} fluid alt="..." />
//             <a>
//               <div
//                 className="mask"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               ></div>
//             </a>
//           </MDBRipple>
//           <MDBCardBody className={S.cardBody}>
//             <MDBCardTitle>Suíte Júnior</MDBCardTitle>
//             <MDBCardText>
//               As Suítes Júnior são espaçosas e aconchegantes com elegante
//               decoração contemporânea.
//             </MDBCardText>
//             <MDBBtn href="#">RESERVE</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </div>
//       <div className={S.cardsQuartos}>
//         <MDBCard>
//           <MDBRipple
//             rippleColor="light"
//             rippleTag="div"
//             className="bg-image hover-overlay"
//           >
//             <MDBCardImage src={suiteJunior} fluid alt="..." />
//             <a>
//               <div
//                 className="mask"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               ></div>
//             </a>
//           </MDBRipple>
//           <MDBCardBody className={S.cardBody}>
//             <MDBCardTitle>Suíte Júnior Deluxe</MDBCardTitle>
//             <MDBCardText>
//               As Suítes Júnior Deluxe oferecem o charme de um apartamento
//               privativo, com área de estar e quarto principal integrados.
//             </MDBCardText>
//             <MDBBtn href="#">RESERVE</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </div>
//       <div className={S.cardsQuartos}>
//         <MDBCard className={S.cardsQuartos}>
//           <MDBRipple
//             rippleColor="light"
//             rippleTag="div"
//             className="bg-image hover-overlay"
//           >
//             <MDBCardImage src={juniorTerrace} fluid alt="..." />
//             <a>
//               <div
//                 className="mask"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               ></div>
//             </a>
//           </MDBRipple>
//           <MDBCardBody className={S.cardBody}>
//             <MDBCardTitle>Suíte Júnior Deluxe Terrace</MDBCardTitle>
//             <MDBCardText>
//               A Suíte Júnior Deluxe Terrace oferece o charme de um apartamento
//               particular com decoração aconchegante e em grande estilo.
//             </MDBCardText>
//             <MDBBtn href="#">RESERVE</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </div>
//       <MDBCard>
//         <MDBRipple
//           rippleColor="light"
//           rippleTag="div"
//           className="bg-image hover-overlay"
//         >
//           <MDBCardImage src={suitePrestige} fluid alt="..." />
//           <a>
//             <div
//               className="mask"
//               style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//             ></div>
//           </a>
//         </MDBRipple>
//         <MDBCardBody className={S.cardBody}>
//           <MDBCardTitle>Suíte Prestige</MDBCardTitle>
//           <MDBCardText>
//             A Suíte Prestige é banhada por luz natural, possui um espaçoso
//             walk-in closet e vista para a piscina externa em 109 m² de
//             elegância.
//           </MDBCardText>
//           <MDBBtn href="#">RESERVE</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//       <MDBCard>
//         <MDBRipple
//           rippleColor="light"
//           rippleTag="div"
//           className="bg-image hover-overlay"
//         >
//           <MDBCardImage src={suitePanamby} fluid alt="..." />
//           <a>
//             <div
//               className="mask"
//               style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//             ></div>
//           </a>
//         </MDBRipple>
//         <MDBCardBody className={S.cardBody}>
//           <MDBCardTitle>Suíte Panamby</MDBCardTitle>
//           <MDBCardText>
//             Esta magnífica suíte é a segunda maior do Palácio Tangará oferecendo
//             214 m² de luxo e sofisticação em acomodação e 30 m² de terraço.
//           </MDBCardText>
//           <MDBBtn href="#">RESERVE</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//       <MDBCard>
//         <MDBRipple
//           rippleColor="light"
//           rippleTag="div"
//           className="bg-image hover-overlay"
//         >
//           <MDBCardImage src={grandSuite} fluid alt="..." />
//           <a>
//             <div
//               className="mask"
//               style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//             ></div>
//           </a>
//         </MDBRipple>
//         <MDBCardBody className={S.cardBody}>
//           <MDBCardTitle>Grand Suíte Rio de Janeiro</MDBCardTitle>
//           <MDBCardText>
//             A confortável e suntuosa Grande Suíte Rio de Janeiro representa o
//             que há de mais luxuoso oferecido pelo Dev`s Rest Hotel.
//           </MDBCardText>
//           <MDBBtn href="#">RESERVE</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//     </div>
//   );
// }
