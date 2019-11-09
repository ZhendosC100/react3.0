import React, {Component} from 'react';

import { Button } from 'reactstrap';
import './post-add-form.css';

export default class PostAddForm extends Component{

    state = {
        text: ""
    }

    onValueChange = ({target: {value}}) => {  //т.к event объект со свойствами (в нашем случае target и он имеет одно из свойств - value)
       this.setState({                         // поэтому деструктиризируем (извлекаем) его. было text: e.target.value
           text: value
       })
    }

    onSubmit = (e) => {
        const {onAdd} = this.props;
        const {text} = this.state;

        e.preventDefault();
        onAdd(text);
        this.setState({
            text: ""
        });
    }


    render(){
        return(
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="What are you thinking about?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
    
                <Button 
                    outline color="secondary"
                >
                    Add
                </Button>
                
            </form>
        )
    }
}


