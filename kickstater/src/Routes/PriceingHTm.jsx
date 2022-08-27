import pricestyling from "../Style/Priceing.module.css"

export function PriceingHoga(){
  

    
    return(
        <>
        <div id={pricestyling.box}>
         <div>
            <p>Bring a creative project to life.</p>
         </div>
          <p>ON KICKSTARTER:</p>
          <div id={pricestyling.box2}>
            <div className={pricestyling.little}>
                <h1>225,519</h1>
                <p>projects funded</p>
            </div>
            <div className={pricestyling.little}>
                <h1>$6,214,065,028</h1>
                <p>towards creative work</p>
            </div>
            <div className={pricestyling.little}>
                <h1>69,393,280</h1>
                <p>pledges</p>
            </div>
          </div>
        </div>
        <div id={pricestyling.itemData}>
            <div className={pricestyling.item}>
               <p>FEATURED PROJECT</p>
              <img src="https://ksr-ugc.imgix.net/assets/038/018/456/e7e16dd9a5d1af0bdb66af40a2bae3b0_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1658331657&auto=format&frame=1&q=92&s=16911aa164c3fc9725e756887b305d97" alt="" />
              <p className={pricestyling.title}>Ball of the Wild</p>
              <p style={{fontSize:"21px",marginTop:"-15px"}}>Attend a masquerade ball as an animal playing another animal in this drag-inspired RPG</p>
              <p>By Nat Mesnard</p>
            </div>
            <div  className={pricestyling.items}>

            </div>
        </div>
        </>
        

      
    )
}