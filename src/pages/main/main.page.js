import React, {
  lazy,
  Suspense,
  useEffect,
  useState
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Tab, TabPanel } from '../../ui/tab';
import Spinner from '../../shared/spinner/spinner';

const DummyChart = lazy(() => import('../../components/tabs/dummy-chart'))
const DummyList = lazy(() => import('../../components/tabs/dummy-list'))
const DummyTable = lazy(() => import('../../components/tabs/dummy-table'))

const componentsMap = {
  "dummyTable": DummyChart,
  "dummyList": DummyTable,
  "dummyChart": DummyList,
}

const MainPage = ({
  tabsData = []
}) => {
  const navigate = useNavigate();
  let { tabId } = useParams();

  const [currentTabId, setCurrentTabId] = useState();

  useEffect(() => {
    if (tabsData.length === 0) return;

    if (tabId) {
      setCurrentTabId(tabId);
      return;
    }

    const [firstTab] = tabsData;
    setCurrentTabId(firstTab?.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabsData])

  const renderTabPanel = () => {
    if (!currentTabId) return <></>;
    const Component = componentsMap[currentTabId];

    if (!Component) return <></>;

    return (
      <Suspense
        fallback={<Spinner />}
      >
        <Component />
      </Suspense>
    );
  };

  const onTabClick = (id) => {
    setCurrentTabId(id);
    navigate(`/${id}`)
  }

  return (
    <section>
      <div>
        <TabPanel>
          {tabsData?.map((tab, index) => {
            return (
              <Tab
                key={index}
                id={index + 1}
                isSelected={tab.id === currentTabId}
                isDisabled={tab.isDisabled}
                onClick={() => onTabClick(tab.id)}
              >
                {tab.id}
              </Tab>
            );
          })}
        </TabPanel>
        <div>{renderTabPanel()}</div>
      </div>
    </section>
  )
}

export default MainPage;