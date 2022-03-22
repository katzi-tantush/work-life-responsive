import { FC, useState } from "react";
import { IMiniContent } from "../../interfaces/IMiniCOntent";
import { Tab } from "./Tab";

interface Props {
    tabsMiniContent: IMiniContent[]
}

export const TabArea: FC<Props> = ({ tabsMiniContent }) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const selectTabHandeler = (tabIndex: number) => {
        setSelectedTabIndex(tabIndex);
    }

    const selectedMiniContentText = tabsMiniContent[selectedTabIndex].text;

    return (
        <div>
            <div className="tabs">
                {tabsMiniContent.map((miniContent, i) =>
                    <div
                        onClick={() => selectTabHandeler(i)}
                        className={`tab-title ${selectedTabIndex == i ? 'selected-tab-title' : i}`}>
                        <Tab key={i} tabText={miniContent.title} />
                    </div>
                )}
            </div>
            <div className="tab-content-wrapper">
                <div className="tab-content-paragraph">
                    { selectedMiniContentText }
                </div>
            </div>
        </div>
    )
}