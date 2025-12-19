// import styled from "styled-components";
// import { BASE_URL } from "../../App";
// const SearchResult = ({mitul}) => {
//   return (
// <FoodCardContainer>

// <FoodContainer>{
// mitul ?.map(({name , image , text , price}) => (

//   <FoodCard
//   key={name}
//   >
// <div className="food_image">
//   <img src={BASE_URL + image}/>
// </div>

// <div className="text">

// <div><h3>
//   {name}</h3>{text}</div>
//  <div>
//   <button >${price}00</button>
//  </div>
// </div>



//   </FoodCard>
// )

// )
// }
// </FoodContainer>
// </FoodCardContainer>
//   )
// };

// export default SearchResult;


// const FoodCardContainer = styled.div`
// min-height: calc(100vh - 210px);
// background-image: url("/bg.png");

// `;

// const FoodContainer = styled.div`
// display: flex;
// flex-wrap: wrap;
// row-gap: 40px;
// column-gap: 100px;

// justify-content: center;
// align-items: center;
// padding-top: 80px;

// `;

// const FoodCard = styled.div`

// border: 0.66px solid;

// border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
// radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;


// width: 340px;
// height: 167px;
// gap: 10px;

// backdrop-filter: blur(26.798789px);

// background:url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

// background-blend-mode: overlay,normal;
// border-radius: 20px;

// display: flex;


// .text{
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// }
// `




import styled from "styled-components";
import { BASE_URL } from "../../App";

const SearchResult = ({ mitul }) => {
  // safety check
  if (!mitul || mitul.length === 0) {
    return (
      <FoodCardContainer>
        <p style={{ textAlign: "center", color: "white" }}>
          No food found
        </p>
      </FoodCardContainer>
    );
  }

  return (
    <FoodCardContainer>
      <FoodContainer>
        {mitul.map(({ name, image, text, price }, index) => (
          <FoodCard key={`${name}-${index}`}>
            <div className="food_image">
              <img src={BASE_URL + image} alt={name} />
            </div>

            <div className="text">
              <div>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>

              <div>
                <button>${price}</button>
              </div>
            </div>
          </FoodCard>
        ))}
      </FoodContainer>
    </FoodCardContainer>
  );
};

export default SearchResult;

/* ---------------- styled-components ---------------- */

const FoodCardContainer = styled.div`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
`;

const FoodContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 100px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    );

  width: 340px;
  height: 167px;
  gap: 10px;

  backdrop-filter: blur(26.8px);

  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.04) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );

  border-radius: 20px;
  display: flex;
  padding: 12px;

  .food_image img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 12px;
    color: white;

    h3 {
      margin: 0;
    }

    p {
      font-size: 14px;
      opacity: 0.8;
    }

    button {
      background-color: red;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
    }
  }
`;
