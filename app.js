// TODO
var GroceryList = (props) => (
  <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}


/*var GroceryListItems = (props) => {
  var onListItemClick = (event) => {
    console.log('i been clicked');
  }
  
  return <ul>
    <li onClick={onListItemClick}>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
};*/

ReactDOM.render(<GroceryList items={['ham', 'eggs', 'cheese', 'yolo']}/>, document.getElementById('app'));