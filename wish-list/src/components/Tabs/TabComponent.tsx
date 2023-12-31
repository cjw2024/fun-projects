import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTab";
import ThirdTab from "./AllTabs/ThirdTab";
import './TabComponent.css';

const TabComponent = () => {
    return (
        <Tabs className="Tabs">
            <h1>Caden's Wishlist</h1>
            <TabList>
                <Tab>Birthday</Tab>
                <Tab>Christmas</Tab>
                <Tab>Graduation</Tab>
            </TabList>
            <TabPanel>
                <FirstTab />
            </TabPanel>
            <TabPanel>
                <SecondTab />
            </TabPanel>
            <TabPanel>
                <ThirdTab />
            </TabPanel>
            <p id="footer">created by Caden Wright 2023 &copy;</p>
        </Tabs>
    );
};

export default TabComponent;