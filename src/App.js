import React, { Component } from "react";
import './App.css';
import Modal from "./Component/Modal/Modal";
import Searchbar from "./Component/Searchbar/Searchbar";
import ImageGallery from "./Component/ImageGallery/ImageGallery";
import ImageGalleryItem from "./Component/ImageGalleryItem/ImageGalleryItem";
import Button from "./Component/Button/Button";
// let URL = `https://pixabay.com/api/?q=${filterWord}&page=1&key=43132236-79366def8c3717e7f2673ddae&image_type=photo&orientation=horizontal&per_page=12`;


localStorage.setItem("more", JSON.stringify(12));

class App extends Component {


  state = {
    images: [],
    imgBig: null,
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



  show = () => {

    this.setState(
      () => {
        return {

          show: !this.state.show,
        };
      },
      () => {
        console.log("Все працює (show)");
      }
    );
  };



  open = (e) => {
    this.show();

    const idToDelete = parseInt(e.target.closest("li")["id"]);
    const newFruits = this.state.images.filter(item => {

      console.log(item);

      return item.id === idToDelete;
    });
    console.log(newFruits);
    this.setState({ imgBig: newFruits });
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
        <Searchbar filter={this.filterUrl} />



        <ImageGallery item={
          this.state.images.map(image => {
            return (
              <>
                <ImageGalleryItem src={image.webformatURL} alt={image.tags} open={this.open} id={image.id}/>
              </>
            );
          })
        }>

        </ImageGallery>


       
          <Button  onClick={this.moreImg}></Button>
        


        {this.state.show ?
          <Modal imge={this.state.imgBig} hide={this.show}></Modal>
          : console.log("Hide")
        }
      </>
    );
  }

}

export default App;
