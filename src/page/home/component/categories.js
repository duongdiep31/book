
import React from 'react'


const Categories = (props) => {
          const data = props.cate.categories
          let Result
           if (data) {
              Result  =  data.map((item,index)=>{
              return (  
              <React.Fragment  key={index} >
                            <div  className="col-md-3 mb-4 mb-md-0" >
                            <a style={{
                                height:'400px'
                              }} className="category-item" href={`/category/${item.id}`}>
                                <img style ={{
                                  height:'100%',
                                  width:'100%'
                                }} className="img-fluid" src={item.image} alt='true' />
                                <strong className="category-item-title">{item.name}</strong>
                            </a>
                          </div>
                          </React.Fragment>
                        )
                }
)
                   
                
                    
        }

      
  return (
    <section className="pt-5">
      <header className="text-center">
        <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
        <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
      </header>
      <div className="row">
       {Result}
      </div>
    </section>
  )
}
export default Categories