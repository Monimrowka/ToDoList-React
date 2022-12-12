import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../App.css";
import App from "../App";

function Navbar({navItem1, navItem2, navItem3, navItem4, navItem5, navItem6}) {
 
    return (
            <nav className='nav'>
              <Tabs>
                <TabList>
                  <Tab>{navItem1}</Tab>
                  <Tab>{navItem2}</Tab>
                  <Tab>{navItem3}</Tab>
                  <Tab>{navItem4}</Tab>
                  <Tab>{navItem5}</Tab>
                  <Tab>{navItem6}</Tab>
                </TabList>

                <TabPanel>
                   <>
                   <><App day="day1"/> </>
                   </>
                </TabPanel>

                <TabPanel>
                <><App day="day2"/> </>
                </TabPanel>

                <TabPanel>
                   <>
                   <><App day="day3"/> </>
                   </>
                </TabPanel>

                <TabPanel>
                <><App day="day4"/> </>
                </TabPanel>

                <TabPanel>
                   <>
                   <><App day="day5"/> </>
                   </>
                </TabPanel>

                <TabPanel>
                <><App day="day6"/> </>
                </TabPanel>

              </Tabs>
            </nav>

    );
  }
  
  export default Navbar;