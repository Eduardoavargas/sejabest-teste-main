import { ReactNode, useState } from "react";
import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <li>
      <nav>
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <FaCaretSquareDown /> : <FaCaretSquareUp />}
        </button>
        <span>{question}</span>
      </nav>

      <section hidden={isHidden}>
        {answer}
      </section>
    </li>
  )
}