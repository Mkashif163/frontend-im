import { NextPage } from "next";
import Layout1 from "views/layouts/layout1";
import LeftSidebarCollection from "views/Collections/LeftSidebar";
import { useRouter } from "next/router";

const LeftSidebar: NextPage = () => {

  const router = useRouter();
  const sub_category = router.query.sub_category;
  const category = router.query.category

  return (
    <Layout1>
      <section className="section-big-pt-space section-big-pb-space ratio_asos bg-light">
        <div className="collection-wrapper">
          <div className="custom-container">
            <LeftSidebarCollection cat={category} sub_cat={sub_category}/>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default LeftSidebar;
