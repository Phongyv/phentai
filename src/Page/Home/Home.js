import { useState } from "react";
import "../../css/Home.css"
import { Link } from "react-router-dom";

function Home() {

  const [bool,setBool] = useState(true)
    return (
        <>
      <div className="home">
      <span id="home-menu" onClick={()=>{
        document.getElementById('sidebar-item1').style.backgroundColor='#808080'
        setBool(!bool)
        if(!bool){
        document.getElementById('sidebar').style.left="0px"}
        else{
          document.getElementById('sidebar').style.left="-250px"
        }}
        }>☰</span>
      <Link className="home-logo">
        <span className="home-logo_name">PHentai</span>
        <img className="home-logo_img" src="https://firebasestorage.googleapis.com/v0/b/anime-bc89f.appspot.com/o/logo.png?alt=media&token=43e2fbf7-908a-49a2-b317-74fec9fb7461" alt=""></img>
      </Link>
      </div>
      <div className="sidebar" id="sidebar" >
      <Link className="sidebar-item" id="sidebar-item1" onClick={()=>{
        document.getElementById('sidebar-item1').style.backgroundColor='#808080'
        document.getElementById('sidebar-item2').style.backgroundColor=''
        document.getElementById('sidebar-item3').style.backgroundColor=''
        document.getElementById('sidebar-item4').style.backgroundColor=''
      }}>
      <img className="sidebar-item_logo" src="https://cdn-icons-png.flaticon.com/128/16019/16019931.png" alt=""></img>
      <span className="sidebar-item_name">Trang chủ</span>
      </Link>
      <Link className="sidebar-item" id="sidebar-item2" onClick={()=>{
        document.getElementById('sidebar-item1').style.backgroundColor=''
        document.getElementById('sidebar-item2').style.backgroundColor='#808080'
        document.getElementById('sidebar-item3').style.backgroundColor=''
        document.getElementById('sidebar-item4').style.backgroundColor=''
      }}>
      <img className="sidebar-item_logo" src="https://cdn-icons-png.flaticon.com/128/526/526510.png" alt=""></img>
      <span className="sidebar-item_name">Xem</span>
      </Link>
      <Link className="sidebar-item" id="sidebar-item3" onClick={()=>{
        document.getElementById('sidebar-item1').style.backgroundColor=''
        document.getElementById('sidebar-item2').style.backgroundColor=''
        document.getElementById('sidebar-item3').style.backgroundColor='#808080'
        document.getElementById('sidebar-item4').style.backgroundColor=''
      }}>
      <img className="sidebar-item_logo" src="https://cdn-icons-png.flaticon.com/128/4295/4295438.png" alt=""></img>
      <span className="sidebar-item_name">Game</span>
      </Link>
      <Link className="sidebar-item" id="sidebar-item4" onClick={()=>{
        document.getElementById('sidebar-item1').style.backgroundColor=''
        document.getElementById('sidebar-item2').style.backgroundColor=''
        document.getElementById('sidebar-item3').style.backgroundColor=''
        document.getElementById('sidebar-item4').style.backgroundColor='#808080'
      }}>
      <img className="sidebar-item_logo" src="https://cdn-icons-png.flaticon.com/128/17020/17020547.png" alt=""></img>
      <span className="sidebar-item_name">Chat</span>
      </Link>
      </div>
        </>
    );
  }
  
  export default Home;
  