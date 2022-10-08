import React, { Component } from "react";
//from child change state parent of component
class SolveQuestion extends Component{
    constructor(props){
        super(props);

        let ages = [], names = [];

        props.array.map((item) => {
            ages.push(item.age);
            names.push(item.name);
        });

        this.state = {
            array : props.array,
            ages: [...new Set(ages)],
            names: [...new Set(names)],
        }

    }
    delete = () =>{
        const ages = this.state.ages;
        ages.pop();
        this.setState({
            ...this.state, ages
        })
        const names = this.state.names;
        names.pop();
        this.setState({
            ...this.state, names
        })
    }
    render(){
        return (
            <>
                <div style={{width: "50%", float:"left", textAlign:"center"}}>
                    <h1>Names </h1> 
                    <ul>  
                        { 
                            this.state.names.map((item, index)=>{
                                return <li key={index}>{item}</li>
                            })
                        } 
                    </ul>
                </div>
                <div style={{width: "50%", float:"right",  textAlign:"center"}}>
                    <h1>Ages</h1>
                    <ul>  
                        { 
                            this.state.ages.map((item, index)=>{
                                return <li key={index}>{item}</li>
                            })
                        } 
                    </ul>
                </div>
                <button onClick={this.delete}> delete</button>
                
            </>
        )
    }
}
export default SolveQuestion;