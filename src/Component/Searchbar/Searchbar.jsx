import styled from "styled-components";

const FilterHeader = styled.header`
    width: 100%;
    height: 50px;
    background-color: #C5D86D;

    form{
        width: 270px;
        margin-left: auto;
        margin-right: auto;
        input {
            padding: 8px;
            border: none;
            border-radius: 15px;
        }

        input:hover {
            color: #AED30B;
        }
        
        button {
            margin-top: 10px;
            margin-right: 15px;
            padding: 8px;
            background-color: #F7F7F2;
            border: none;
            border-radius: 15px;
        }
        button:hover {
            background-color: #AED30B;
            color: white;
        }
    }
`

function Searchbar({ filter }) {
    return (
        <>
            <FilterHeader className="searchbar">
                <form className="form" onSubmit={filter}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        name="wordFilter"
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </FilterHeader>
        </>
    );
};

export default Searchbar;