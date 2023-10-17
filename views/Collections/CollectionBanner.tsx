import { NextPage } from "next";
import { Media } from "reactstrap";
import Link from "next/link";

type CollectionBannerProps = {
  cat: any;
  sub_cat: any;
};

const imageStyles: React.CSSProperties = {
  objectFit: "cover",
  cursor: "pointer",
};

function transformImageUrl(apiImageUrl) {
  if (!apiImageUrl) {
    return "";
  }

  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/`;
  const url = `${baseUrl}${apiImageUrl.replace(/ /g, "%20")}`;
  return url;
}
const CollectionBanner: NextPage<CollectionBannerProps> = ({
  cat,
  sub_cat,
}) => {
  return (
    <div className="top-banner-wrapper">
      <a href="#">
        <Media src={transformImageUrl(cat.img)} className="img-fluid" alt="" />
      </a>
      <div className="top-banner-content small-section">
        <h1>{sub_cat ? sub_cat : cat.name}</h1>

        {cat.sub_categories ? (
          <div className="top-banner-content small-section">
            {cat.sub_categories.length > 8 ? (
              <div
                id="carouselExample"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {cat.sub_categories.map((subCategory, i) => (
                    <div
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      key={i}
                    >
                      {cat.sub_categories
                        .slice(i * 8, (i + 1) * 8)
                        .map((sub, j) => (
                          <Link
                            href={`/collections/leftsidebar?sub_category=${sub.id}`}
                            key={j}
                          >
                            <div
                              className="d-flex flex-column align-items-center justify-content-center"
                              style={{ float: "left", width: "12.5%" }}
                            >
                              <img
                                src={transformImageUrl(sub.img)}
                                alt={sub.name}
                                className="img-fluid mb-2 rounded-circle shadow"
                                style={imageStyles}
                                width="100"
                                height="100"
                              />
                              <p className="name text-center">
                                {sub.name.substring(0, 12)}{" "}
                                {sub.name.length > 12 && "..."}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExample"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExample"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            ) : (
              <div className="d-flex">
                {cat.sub_categories.map((sub, j) => (
                  <Link
                    href={`/collections/leftsidebar?sub_category=${sub.id}`}
                    key={j}
                  >
                    <div
                      className="d-flex flex-column align-items-center justify-content-center"
                      style={{ float: "left", width: "12.5%" }}
                    >
                      <img
                        src={transformImageUrl(sub.img)}
                        alt={sub.name}
                        className="img-fluid mb-2 rounded-circle shadow"
                        style={imageStyles}
                        width="100"
                        height="100"
                      />
                      <p className="name text-center">
                        {sub.name.substring(0, 12)}{" "}
                        {sub.name.length > 12 && "..."}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">No Sub categories available</div>
        )}
      </div>
    </div>
  );
};
export default CollectionBanner;
