import { Component } from 'react'
import { Button } from 'react-bootstrap'

interface ClassComponentProps {
    sottotitolo: string
    value?: number
}
interface ClassComponentState {
    name: string
}

class ClassComponent extends Component<
ClassComponentProps,
ClassComponentState
> {
    state= {
        name: "Mario",
    }
  render() {
   return( 
    <div>
       <h2>ClassComponent TS</h2>
       <h4>{this.props.sottotitolo}</h4>
       <p>Il Contatore vale: {this.props.value || 0}</p>
       <p>il tuo nome è {this.state.name.toUpperCase()}</p>
       <Button variant="success"onClick={() =>
        this.setState({
            name: this.state.name === "Luigi" ? "Mario" : "Luigi",
        })
       }>
        Cambia Nome
       </Button>
    </div>
   )
}
   }
   
export default ClassComponent
        