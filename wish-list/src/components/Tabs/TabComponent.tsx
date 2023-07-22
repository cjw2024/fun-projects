import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTab";
import ThirdTab from "./AllTabs/ThirdTab";
import './TabComponent.css';

const TabComponent = () => {
    return (
        <Tabs className="Tabs">
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
        </Tabs>
    );
};

export default TabComponent;