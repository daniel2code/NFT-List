import React from "react";

import "./faq.css";
import Accordion from "./accordion/index";

// const accordionDetails = [
//   {
//     id: 1,
//     question: "What is an NFT?",
//     answer:
//       "An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or data. In our case the the NFTs are stored on the NEAR blockchain.",
//   },

//   {
//     id: 2,
//     question: "Why NEAR Protocol?",
//     answer:
//       "NEAR Protocol is the most advanced Proof-of-stake layer 1 blockchain on the market with immense potential of scalability. It's fast, easy to use and is 100X lower transaction fees for users. NEAR is carbon neutral and we most certainly believe that the future is NEAR.",
//   },

//   {
//     id: 3,
//     question: "Where can I buy a Near Doge NFT?",
//     answer:
//       "The Near Doge NFT can be purchased on secondary marketplaces such as (PARAS, Few & Far, Higgs field etc)",
//   },

//   {
//     id: 4,
//     question: "What are we building?",
//     answer:
//       "We plan to develop an array of tools that provide more users an opportunity to seamlessly experience the NEAR ecosystem. We also intend to launch a simple P2E game, educational content and much more under the complete governance of our DAO.",
//   },

//   {
//     id: 5,
//     question: "What is $WOOF? (subject to change)",
//     answer:
//       "$WOOF is a utility token that can be claimed by holding a Near Doge NFT, participating in community tasks and within our upcoming P2E game. More will be revealed about $BORK soon.",
//   },

//   {
//     id: 6,
//     question: "Why build a MEME Economy?",
//     answer:
//       "A meme economy unlike gated communities allows easier entry for users onto the ecosystem facilitating further adoption. We intend to work closely with communities from other networks to bring users who may be interested in exploring cross chain opportunities onto NEAR.",
//   },

//   {
//     id: 7,
//     question: "Where can i contact the team?",
//     answer:
//       "Join our discord or feel free to woof us a DM on twitter, we are looking forward to hearing from you NEARverse.u",
//   },
// ];

const FAQ = () => {
  return (
    <div className="faqContainer">
      
        <h2 className="faq-title">FAQ.</h2>

        <div className="accordionContainer">
          {[...Array(8)].map((item) => {
            return (
              <div className="faq-item">
                <Accordion
                  // answer={item.answer}
                  answer="An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or data. In our case the the NFTs are stored on the NEAR blockchain."
                  // question={item.question}
                  question="What is an NFT?"
                  // key={item.id}
                />
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default FAQ;
