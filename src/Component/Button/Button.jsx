import styled from "styled-components";

const MoreBtn = styled.button`
     width: 100%;
    height: 40px;
   border: none;
   border-radius: 25px;
   color: white;
   background-color: #C5D86D;
`;



function Button({ moreImg }) {
    return (
        <>
            <div>
                <MoreBtn type="button" onClick={moreImg}>More</MoreBtn>
            </div>
        </>
    );
};

export default Button;