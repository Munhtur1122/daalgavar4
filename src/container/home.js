import React, {useState} from "react"
import "./home.css"

const Home = () =>{
    const [newItem,setNewItem] = useState('');
    const [newItem2,setNewItem2] = useState('')
    const [newItem3,setNewItem3] = useState('')
    const [item,setItem] = useState([])
    const [file,setFile] = useState('')

  const fileUpload = (niga) => {
        setFile(URL.createObjectURL(niga.target.files[0]))
  }
  const addItem = () =>{
    const itemuud = {
      id: Math.floor(Math.random() * 1000),
      img:file,
      value: newItem,
     
    }
    const itemuud2 = {
      id: Math.floor(Math.random() * 1000),
      p: Text,
      value: newItem2,
    }
  
    const itemuud3 = {
      id: Math.floor(Math.random() * 1000),
      p: Text,
      value: newItem3,
     
    }

    
    setItem(oldlist => [...oldlist, itemuud, itemuud2, itemuud3])
}  

  
  const amaRaaDelete = (id) =>{    
    const arr = item.filter(amaraa => amaraa.id !== id )
    setItem(arr)
  };
return (
    <div className='dripp'>
         <div className='input-button'>
            <input className='bolog' type="file"  onChange={fileUpload} />
            <>
            <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Utga oruulna uu"/>
            <input type="text" value={newItem2} onChange={e => setNewItem2(e.target.value)} placeholder="Utga oruulna uu"/>
            <input type="text" value={newItem3} onChange={e => setNewItem3(e.target.value)} placeholder="Utga oruulna uu"/>
            </>
            <button onClick = {()=>addItem()}>Add item</button>
          </div>
            <div className='drippy'>
              {item.map((items) =>{
                    return(
                      <div className='style-from'> 
                            <div className='pext'>
                            <img className='ghj' src={items.img} alt=''/>
                                <h2>{items.value}</h2>
                                <p>{items.value} </p>
                                <p>{items.value} </p>

                               
                            </div> 
                             <div className='skip-title'>                      
                                <button onClick={() => amaRaaDelete(items.id)}>DELETE</button>  
                             </div>             
                      </div>
                    )
                })}
            </div>      
        </div>
    );
            };

export default Home