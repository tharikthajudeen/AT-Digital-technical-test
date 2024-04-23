import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function FAQs() {
    // State to manage FAQ items and their visibility
    const [faqItems, setFaqItems] = useState([
        { question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.', showAnswer: false },
        { question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?', answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.', showAnswer: false },
        { question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?', answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.', showAnswer: false },
        // Add more FAQ items as needed
    ]);

    // Function to toggle visibility of FAQ answers
    const toggleShowAnswer = (index) => {
        const updatedFaqItems = faqItems.map((item, i) => ({
            ...item,
            showAnswer: i === index ? !item.showAnswer : false
        }));
        setFaqItems(updatedFaqItems);
    };

    return (
        <div className="flex flex-col justify-center items-center py-[28px] px-[20px] sm:px-[42px] md:px-[152px] lg:px[297px]">
            {/* Title */}
            <div className="mb-[28px]">
                <h1 className="font-poppins text-customPurple font-semibold text-[27px] leading-[33px] tracking-[0.4px] text-center">Frequently asked questions</h1>
            </div>

            {/* FAQ Items */}
            {faqItems.map((item, index) => (
                <div key={index} className="flex flex-col justify-between bg-customBackground rounded-[7px] w-full p-[24px] mb-[13px]">
                    {/* Question and Toggle Button */}
                    <div className='flex justify-between '>
                        <h1 className={`font-inter font-medium text-left text-[20px] sm:text-[22px] leading-[28px] ${item.showAnswer ? 'text-customPurple' : ''}`}>{item.question}</h1>
                        {/* Toggle button for showing/hiding answer */}
                        <div className=''>
                          <FontAwesomeIcon icon={item.showAnswer ? faMinus : faPlus} onClick={() => toggleShowAnswer(index)} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    {/* Answer (if shown) */}
                    {item.showAnswer && (
                        <p className="text-customGray font-inter text-left text-[16px] sm:text-[18px] leading-[20px] mt-[13px] w-full">{item.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
