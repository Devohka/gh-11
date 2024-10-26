import styled from "styled-components";

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    li {
        list-style: none;
        img {
            width: 600px;
            height: 400px;
        }
    }

    li:hover{
        box-shadow: 10px 10px 10px rgb(38, 28, 21, 0.5)
    }
`;

function ImageGallery({item}) {
    return (
        <>
            <List className="gallery">
                {item}
            </List>

            
        </>
    );
};

export default ImageGallery;