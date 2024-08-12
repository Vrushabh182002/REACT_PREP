import React,{useEffect,useState}from 'react'
import './style.css';

export default function App() {
  
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async()=>{
    const res = await fetch("https://dummyjson.com/products?limit=120");
    const data = await res.json();

    if(data && data.products){
      setProducts(data.products);
    }
  }

  const pageHandler = (pageno) =>{
    if(pageno>=1 && pageno<=products.length/12 && pageno!==page){
      setPage(pageno);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
      {
        products.length>0 && <div className="products">{
          products.slice(page*12-12,page*12).map((prod)=>{
            return(
              <span className="products_single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            )
          })
        }</div>
      }
      {
        products.length>0 && <div className="pagination">
          <span 
          className={page>1?"":"pagination_disable"}
          onClick={()=> pageHandler(page-1)}
          >
            ◀️
          </span>
          {
            [...Array(products.length/12)].map((_,i)=>{
              return(
                <span
                  onClick={()=> pageHandler(i+1)}
                  className={page===i+1?"pagination_selected":""}
                >{i+1}</span>
              )
            })
          }
          <span
          className={page<products.length/12?"":"pagination_disable"}
          onClick={()=> pageHandler(page+1)}
          >
            ▶️
          </span>
        </div>
      }
    </div>
  );
};