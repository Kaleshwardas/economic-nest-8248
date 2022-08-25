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
        <div>
            <div>
        
            </div>
            <div>

            </div>
        </div>
        </>
        

      
    )
}