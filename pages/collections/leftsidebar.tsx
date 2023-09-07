import { NextPage } from "next";
import Layout1 from "views/layouts/layout1";
import LeftSidebarCollection from "views/Collections/LeftSidebar";

const LeftSidebar: NextPage = () => {
  return (
    <Layout1>
      <section className="section-big-pt-space section-big-pb-space ratio_asos bg-light">
        <div className="collection-wrapper">
          <div className="custom-container">
            <LeftSidebarCollection />
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default LeftSidebar;
