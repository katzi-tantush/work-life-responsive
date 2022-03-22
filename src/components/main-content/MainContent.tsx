import { FC } from "react";
import { ParagraphBlock } from "./ParagraphBlock";

interface Props {
    paragraphs: string[];
}

export const MainContent: FC<Props> = ({ paragraphs }) => {
    return (
        <div>
            {paragraphs.map((p, i) =>
                <div>
                    <ParagraphBlock key={ i } paragraphText={ p }/>
                </div>
            )}
        </div>
    )
}