import { useState } from "react";
import profilepic1 from "../assets/profilepic1.webp";
import profilepic2 from "../assets/profilepic2.jpg";
import profilepic3 from "../assets/profilepic3.jpg";
import profilepic4 from "../assets/profilepic4.webp";
import profilepic5 from "../assets/profilepic5.jpg";
import quote from "../assets/quote.png";

const Reviews = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      image: profilepic1,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt.  ",
    },
    {
      id: 2,
      image: profilepic2,
      active: "true",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis dolor corrupti saepe ex ducimus voluptatum, accusamus, quia perferendis possimus sapiente reprehenderit iure beatae vel mollitia, reiciendis aspernatur commodi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit sequi quis, culpa modi voluptatibus minima iure perspiciatis qui in ullam, aliquam expedita libero earum aut vero adipisci, ex excepturi vel? ",
    },
    {
      id: 3,
      image: profilepic3,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum nesciunt ad explicabo harum numquam laboriosam accusantium, obcaecati repudiandae necessitatibus tempora quaerat ratione nihil esse quia perspiciatis. Deleniti, fugit iusto. ",
    },
    {
      id: 4,
      image: profilepic4,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt.  ",
    },
    {
      id: 5,
      image: profilepic5,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, sunt vero assumenda facilis similique neque dolores odio commodi distinctio accusamus, ad placeat iure veniam autem suscipit reiciendis, sed quasi. Dolorem animi molestias alias labore dignissimos deleniti recusandae porro suscipit eaque, architecto accusamus impedit fugit, nobis perferendis ullam quaerat itaque, possimus eligendi quidem? Adipisci commodi autem ducimus iste a molestiae odit. ",
    },
    {
      id: 6,
      image: profilepic1,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt.  ",
    },
    {
      id: 7,
      image: profilepic2,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium omnis, ipsam facere perspiciatis soluta non quas dolores, totam esse, facilis ducimus? Reiciendis, quae maxime? Fuga quisquam iusto nostrum magni error aut nobis distinctio molestias cupiditate? Modi, quasi minus aut omnis voluptas voluptates perferendis voluptatum eius in esse dolorem et quo, ducimus mollitia illo illum! Doloremque quo voluptatem culpa blanditiis, quasi odit ab repudiandae libero maxime eos ex, modi natus alias!",
    },
    {
      id: 8,
      image: profilepic3,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iste. ",
    },
    {
      id: 9,
      image: profilepic4,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt.  ",
    },
    {
      id: 10,
      image: profilepic5,
      active: "false",
      discription:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illum tempore quis aliquid dolor cum harum ipsum sapiente expedita est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio aspernatur amet laborum quia tenetur eius corporis fugiat consequatur deserunt.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, esse. Cum eveniet natus rem itaque inventore similique enim facere quos in iste amet, excepturi saepe repellendus alias eos beatae. Deleniti, voluptate? Cum earum dolore, culpa in quas optio magnam! ",
    },
  ]);

  const setActiveProfile = (e, id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === id
          ? { ...profile, active: "true" }
          : { ...profile, active: "false" }
      )
    );
  };
  return (
    <div id="Reviews" className="w-full px-5 lg:px-20 py-20 lg:py-36 bg-[#121212]">
      <div className="w-full  flex lg:flex-row flex-col justify-between pl-10 ">
        <div className=" mt-10 w-full lg:w-[20%] lg:pl-8 h-full flex flex-col  gap-3">
          <div className="w-full  h-fit hidden lg:flex relative ">
            <div className="w-14 lg:w-20 h-14 lg:h-20 bg-blue-500 rounded-full overflow-hidden"></div>
            <div className="w-14 lg:w-20 h-14 lg:h-20 bg-blue-400 rounded-full overflow-hidden absolute top-0 left-10 lg:left-14"></div>
            <div className="w-14 lg:w-20 h-14 lg:h-20 bg-blue-300 rounded-full overflow-hidden absolute top-0 left-20 lg:left-32"></div>
          </div>
          <h2 className=" text-5xl font-semibold text-[#027DEC] ">Reviews</h2>
        </div>
        <div className="w-full lg:w-[60%] h-full px-2 text-white">
          <p className="text-base lg:text-2xl font-normal mt-7 lg:ml-16 leading-loose">
            <span className="text-5xl lg:text-7xl font-semibold">320+</span>{" "}
            Join us on this journey of reflection and anticipation as we mark a
            decade of wonderlust , and here's to the countless adventures yet to
            unfold!
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      <div className="w-full mt-20 px-10 flex justify-between flex-wrap ">
        {profiles.map((profile) => (
          <div
            onClick={(e) => {
              setActiveProfile(e, profile.id);
            }}
            key={profile.id}
            className={`${
              profile.id % 2 == 0 ? " lg:top-20" : ""
            } w-20 h-20 cursor-pointer rounded-full overflow-hidden relative`}
          >
            <img
              src={profile.image}
              alt=""
              className={`w-full h-full object-cover`}
            />
            <div
              className={`w-full h-full absolute top-0 left-0 ${
                profile.active == "true" ? "" : " bg-gray-900 opacity-70"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* ----------------------------------------------------- */}
      <div className="w-full px-10">
        {profiles
          .filter((profile) => profile.active === "true") // Filter for active profiles
          .map(
            (
              profile // Map over the active profiles to render
            ) => (
              <div
                key={profile.id}
                className="w-full mt-20 lg:mt-40 flex flex-col lg:flex-row justify-around items-center gap-4 lg:gap-0 "
              >
                <img
                  src={profile.image}
                  alt={`Profile ${profile.id}`}
                  className="w-40 h-40 rounded-full object-cover"
                />
                <p className="text-white w-full lg:w-[40%] text-lg font-semibold mr-8 relative ml-8">
                  {" "}
                  <span className="absolute -bottom-2 -right-8 lg:-right-20">
                    <img src={quote} alt="" className="w-10 h-10" />
                  </span>{" "}
                  <span className="absolute -top-2 -left-10 lg:-left-24 rotate-180">
                    <img src={quote} alt="" className="w-10 h-10" />
                  </span>{" "}
                  {profile.discription}
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Reviews;
