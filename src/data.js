import Data from '.data.html';
function App(){
    return(
        <div>
            {
                Data.map((v)=>{
                    {v.name}
                })
            }
        </div>
    )
}