import logo from "./logo.svg";
import "./App.css";

function App() {
  let products = [
    {
      id: 1,
      title: "Tops",
      description: "good ladies tops with the their exciting prices",
      price: 550,
      image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"
    },
    {
      id: 2,
      title: "Kurta",
      description: "good ladies tops with the their exciting prices",
      price: 1550,
      image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Kurta.gif"
    },
    {
      id: 3,
      title: "Women Fashion's",
      description: "good ladies tops with the their exciting prices",
      price: 2550,
      image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Fusion%20(1).gif"
    },
    {
      id: 4,
      title: "Hand bags",
      description: "good ladies tops with the their exciting prices",
      price: 2000,
      image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_HandBags.gif"
    },
    {
      id: 5,
      title: "Men's T-shirts",
      description: "Men's T-shirts ",
      price: 2000,
      image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/7.Mens-T-Shirts.gif"
    },
    {
      id: 6,
      title: "Dresses",
      description: "Great ladies dresses for any event to look Gorgeous",
      price: 5000,
      image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Dresses.gif"
    },
    {
      id: 7,
      title: "Sport Shoes",
      description: "Grab the shoes to take comfort in sports",
      price: 3000,
      image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Sports_Shoes.gif"
    },
    {
      id: 8,
      title: "Trousers",
      description: "Great seal on men's Trousers",
      price: 2000,
      image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Trousers.gif"
    },
  ]
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img src="https://d30fs77zq6vq2v.cloudfront.net/img/clicky_logo-97724356932.png" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  MEN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  WOMEN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  KID
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

<div className="container mt-5">
<div className="row  ">


{
  products.map(product=>(

<div className="col-lg-3 col-md-4 p-4">
      <div class="card" >     
  <img src={product.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.description}</p>
    <p class="card-text">{product.price}</p>
  </div>
</div>
</div>


  ))
}




</div>
</div>
    </>
  );
}

export default App;
