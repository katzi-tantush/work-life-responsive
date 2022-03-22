import { FC } from "react";

interface Props {
    paragraphText: string;
}

export const ParagraphBlock: FC<Props> = ({ paragraphText }) => {
    return (
        <p className="main-content-paragraph">
            {paragraphText}
        </p>
    )
}