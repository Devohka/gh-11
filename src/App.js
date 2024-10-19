import React, { Component } from "react";
import './App.css';



// let URL = `https://pixabay.com/api/?q=${filterWord}&page=1&key=43132236-79366def8c3717e7f2673ddae&image_type=photo&orientation=horizontal&per_page=12`;


localStorage.setItem("more", JSON.stringify(12));

class App extends Component {


  state = {
    images: [],
    filter: JSON.parse(localStorage.getItem("filter")),
    show: false,
    more: JSON.parse(localStorage.getItem("more")),
    // url: `https:pixabay.com/api/?q=${filterWord}&page=1&key=43132236-79366def8c3717e7f2673ddae&image_type=photo&orientation=horizontal&per_page=12`,
  }



  componentDidMount() {

    fetch(`https://pixabay.com/api/?q=${this.state.filter}&page=1&key=43132236-79366def8c3717e7f2673ddae&image_type=photo&orientation=horizontal&per_page=${this.state.more}`)
      .then(data =>
        data.json()

      ).then(
        data =>
          // console.log(data)
          this.setState(

            { images: data.hits }
          )
      ).catch(error =>
        console.log(error)
      );

  };


  moreImg = () => {
     this.setState({
      more: localStorage.getItem("more") + 6,
     }, () => {
      localStorage.setItem("more", JSON.stringify(this.state.more));
      console.log(this.state.more);
     });
  };

  // const mapItem = (e) => {
  //   e.map(img => {
  //     return (
  //       <>
  //         <li className="gallery-item">
  //           <img src="" alt={img.webformatUR} />
  //         </li>
  //       </>
  //     );
  //   })
  // }

  filterUrl = (e) => {
    // e.preventDefault();
    this.setState({
      filter: e.target.elements.wordFilter.value,
    }, () => {
      localStorage.setItem("filter", JSON.stringify(this.state.filter));
      console.log(this.state.filter);
    });
  }


  // componentDidUpdate() {
    // filterWord = this.state.filter;

    //  setInterval(() => {
    //   fetch(`https://pixabay.com/api/?q=${filterWord}&page=1&key=43132236-79366def8c3717e7f2673ddae&image_type=photo&orientation=horizontal&per_page=12`)
    //       .then(data =>
    //         data.json()

    //       ).then(
    //         data =>
    //           // console.log(data)
    //           this.setState(

    //             { images: data.hits }

    //           )
    //       ).catch(error =>
    //         console.log(error)
    //       );
    // }, 1500);
    //  setTimeout(()=> {
    //   clearInterval(filterImg)
    //  }, 1100)
  // };


  render() {
    console.log(this.state.images);
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.filterUrl}>
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
        </header>



        <ul className="gallery">
          {this.state.images.map(image => {
            return (
              <>
                <li className="gallery-item" key={image.id}>
                  <img src={image.webformatURL} alt={image.tags} />
                </li>
              </>
            );
          })}
        </ul>


<div>
  <button type="button" onClick={this.moreImg}>More</button>
</div>

      </>
    );
  }

}

export default App;
