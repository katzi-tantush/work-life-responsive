import { FC } from "react";
import { mockDataStore } from "../mock-data/mockData";
import {Header} from "./Header";
import { MainContent } from "./main-content/MainContent";
import { TabArea } from "./tabs-area/TabArea";


export const Layout: FC = () => {
    const {
        headerContent,
        mainContentBlocks,
        miniContent
    } = mockDataStore;

    return (
        <div className="app-container">
            <div className="centered header">
                <Header headerContent={headerContent} />
            </div>
            <div className="centered">
                <MainContent paragraphs={mainContentBlocks} />
            </div>
            <div>
                <TabArea tabsMiniContent={miniContent} />
            </div>
        </div>
    )
}