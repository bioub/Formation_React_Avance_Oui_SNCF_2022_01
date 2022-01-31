import styles from './Select.module.scss';
import { Component } from 'react';

interface Props {
  selected: string;
  items: string[];
  onSelected(item: string): void;
}

interface State {
  open: boolean;
  // user?: {
  //   prenom?: string;
  //   nom?: string;
  // }
}

export default class Select extends Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     open: false,
  //   };
  //   this.handleSelectedClick = this.handleSelectedClick.bind(this);
  // }

  state = {
    open: false,
    // user: {
    //   prenom: 'Romain',
    // }
  };

  handleSelectedClick = () => {
    // NE PAS FAIRE
    // this.state.open = true;
    // this.forceUpdate();
    this.setState({
      open: true,
      // user: {
      //   ...this.state.user,
      //   nom: 'Bohdanowicz',
      // }
    });
  };

  handleItemClick = (item: string) => {
    this.props.onSelected(item);
    this.setState({
      open: false,
    })
  }

  handleDocumentClick = (event: MouseEvent) => {
    this.setState({
      open: false,
    });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, {capture: true});
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, {capture: true});
  }

  render() {
    const { selected = '', items = [] } = this.props;
    const { open } = this.state;

    // return React.createElement('div', { className: 'Select' },
    //   React.createElement('div', { className: 'selected'}),
    //   React.createElement('div', { className: 'menu'})
    // )
    return (
      <div className={styles.host}>
        <div className={styles.selected} onClick={this.handleSelectedClick}>
          {selected}
        </div>
        {open && (
          <div className={styles.menu}>
            {items.map((item) => (
              <div className="item" key={item} onClick={() => this.handleItemClick(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
