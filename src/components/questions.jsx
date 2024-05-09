// QuestionComponent.js
import React, { useState } from 'react';
import "./questions.css";

const FaqItem = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className={`faq-item ${isAnswerVisible ? 'active' : ''}`} onClick={toggleAnswerVisibility}>
      <h3>
        {isAnswerVisible ? "-" : "+"} {question}
      </h3>
      <p className={`answer ${isAnswerVisible ? 'active' : ''}`}>{answer}</p>
    </div>
  );
};

const QuestionComponent = () => {
  const faqData = [
    {
      question: "What is smallcase?",
      answer: "smallcases are modern investment products that help you build a low-cost, long-term & diversified portfolio easily. Created by professionals, each smallcase is a ready-made basket of stocks/ETFs that reflects a theme, strategy or objective."
    },
    {
      question: "Who manages smallcases?",
      answer: "smallcases are created & managed by SEBI registered professionals who eat, sleep & breathe the stock market. The constituents in every smallcase pass stringent proprietary filters so that you don’t have to worry about making individual choices."
    },
    {
      question: "How to invest in smallcases?",
      answer: "A trading & demat account with any of our broker partners is all you need. Once you have chosen a smallcase, subscribe to the smallcase (only for fee-based smallcases), click the Invest now button & proceed."
    },
    {
      question: "Who owns the stocks/ETFs?",
      answer: "The stocks/ETFs are owned by investors directly in their demat account."
    },
    {
      question: "What are the charges for investing in smallcases?",
      answer: "In addition, your broker platform applies transaction charges when you transact. Visit the help page on your broker platform for more information."
    },
    {
      question: "What is rebalancing?",
      answer: "Rebalancing is the process of reviewing the stocks/ETFs of a smallcase to ensure that it continues to reflect the underlying original idea. It takes into account fundamental factors, company updates, etc. to objectively narrow down on the right stocks/ETFs."
    },
    {
      question: "How are smallcases taxed?",
      answer: "For smallcases of stocks, the taxes are the same as equities - Long-Term Capital Gains (> 1 year of holding) are 10% of the total gains (if gains for the year exceed ₹1 lakh) and Short-Term Capital Gains (< 1 year of holding) are 15% of the total gains."
    },
    {
      question: "Can I buy smallcase as a SIP?",
      answer: "Yes, you can buy and start a SIP in a smallcase in 1 click. You'll see an option to start SIP while buying the smallcase."
    },
    {
      question: "Do you get dividends from smallcases?",
      answer: "Dividends for any of the constituent stocks in the smallcase will be credited directly to your bank account."
    },
    {
      question: "How to track the performance of a smallcase?",
      answer: "Under Holdings tab of your Equity portfolio, Group by: All, smallcase will give you performance details of your invested smallcases such as current returns, realised returns, dividend returns etc. With smallcases, you don’t have to track the performance of your stocks individually."
    }
  ];

  return (
    <div className="faq-container">
      <div className="questions">
        <div className="right">
          <h1>Frequently asked</h1>
          <h1 className="ques">questions</h1>
        </div>
        <div className="q">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;