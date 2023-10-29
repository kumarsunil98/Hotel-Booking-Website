import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=new delhi,mumbai,jaipur,banglore,udaipur,Ooty"
  );

  return (
    <>
      <div className="featureHeadTitle">
        <h1>Explore India</h1>
        <h2>These popular destinations have a lot to offer</h2>
      </div>
      <div className="featured">
        {loading ? (
          "Loading please wait"
        ) : (
          <>
            <div className="featuredItem">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>New Delhi</h1>
                <h2>{data[0]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>{data[1]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://r-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Jaipur</h1>
                <h2>{data[2]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Banglore</h1>
                <h2>{data[3]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/170x136/684938.jpg?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Udaipur</h1>
                <h2>{data[4]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://r-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Ooty</h1>
                <h2>{data[5]} Properties</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Featured;
