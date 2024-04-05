import "./menu.css"
export default function Menu() {
  return (
    <div className="menu-one  bg-gray-950 text-white p-2 ">

      
        <div className="header-start">
          <p>Logo</p>
        </div>
        <div className="header-end">
          <button>Home</button>
          <button>Shop</button> 
          <button >Contect-us</button>
          <button>Cart</button>
          <button className="bg-white decoration-black text-black font-medium px-5  text-center text-justifyrounded-full">Login</button>

        </div>


      
    </div>
  );
}