import styled from "styled-components";

const BoxModal = styled.div`
overflow: hidden;
opacity: 999;
z-index: 999;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
background-color: rgb(31, 3, 34, 0.5);
`;

const ModalImg = styled.div`
    gap: 10px;
    margin-top: 20px;
    background-color: white;
display: flex;
flex-wrap: wrap;
max-width: 900px;
margin-left: auto;
margin-right: auto;
border-radius: 25px;
border: 2px solid #1F0322;
`;

const ImgModal = styled.img`
    width: 900px;
    height: 500px;
    border-radius: 25px;
`

function Modal({imge, hide}) {
    return (
        <>
            <BoxModal className="overlay" >
                <ModalImg className="modal">
                    {imge.map(img => {
                        return (
                            <>
                            <ImgModal src={img.largeImageURL} alt={img.tags} onClick={hide}/>
                            </>
                        );
                    })}
                    
                </ModalImg>
            </BoxModal>
        </>
    );
};

export default Modal;