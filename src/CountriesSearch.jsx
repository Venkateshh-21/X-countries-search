import {useState,useEffect} from 'react'

const CountriesSearch = () => {
  const [countries,setCountries]=useState([])
  const [searchedKey,setSearchedKey]=useState("")
  const [filtered,setFiltered]=useState([])
  useEffect( ()=>{
  
      async function fetchData() {
          
      try {
      const response= await fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
      const data= await response.json(response)
      // console.log(data)
      return setCountries(data)
      } catch (error) {
          console.error("Error fetching data:")
      }
  }
  fetchData()
  },[])
  const trackSearch=(e)=>{
    setSearchedKey(e.target.value)
    setFiltered(countries.filter((a)=>a.common.toLowerCase().includes(searchedKey)))
  }
    return (
        <div>
            <div style={{backgroundColor:"gray",display:'flex',justifyContent:"center"}}>
            <input type="text" placeholder='Search For Countries' onChange={trackSearch} style={{
                margin:"5px",
                height:"40px",
                width:"90em",
                
            }}/>
            </div>
      <div style={{
         
          padding:"10px",
          display:"flex",
          flexWrap:"wrap",
          gap:"20px"
      }}>
        
          { searchedKey? filtered.map((a)=>{
            return <div style={{
                  height:"150px",
                  width:"150px",
                  border:"1px solid grey",
                  borderRadius:"5%",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  padding:"10px",
                  textAlign:"center",
              }}>
                  <img src={a.png} alt={"flag of "+a.common} style={{
                      width:"100px",
                      height:"90px"
                  }}/>
                  <h4>{a.common}</h4>
              </div>
          }):countries.map((a)=>{
              return <div style={{
                  height:"150px",
                  width:"150px",
                  border:"1px solid grey",
                  borderRadius:"5%",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  padding:"10px",
                  textAlign:"center",
              }}>
                  <img src={a.png} alt={"flag of "+a.common} style={{
                      width:"100px",
                      height:"90px"
                  }}/>
                  <h4>{a.common}</h4>
              </div>
          })}
      </div>
      </div>
    )
}

export default CountriesSearch