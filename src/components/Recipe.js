import React from "react"
import "./Recipe.css"

export default function Recipes(props){
    let style = {
        width:"18rem"
    }

  return(

        <div className="card" style={style}>
            <img src={props.img} className="card-img-top" alt="icon" />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">calories : <span className="text-primary">{Math.floor(props.calories)}</span></p>
            <p className="card-text">Meal Type : <span className="text-primary">{props.mealType}</span></p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  )
}
