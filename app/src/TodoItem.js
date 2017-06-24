import React, { Component } from 'react';
import { Text } from 'react-primitives';
import styled from 'styled-components';
import DoneIcon from './components/Icons/DoneIcon';

const StyledView = styled.div`
    padding: 8px;
    margin-bottom: 5px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;

    &:hover {
      cursor: pointer;
      opacity: .9;
      transform: scale(1.01);
      transition: .2;
    }
`;

const styles = {
  itemText: {
    fontSize: 14,
    lineHeight: 14,
    marginRight: 80,
    marginLeft: 8,
    display: 'inline-block',
  },
  itemUnchecked: {
    backgroundImage: 'linear-gradient( to right, #FFB6B2, #FFBFA8)',
    boxShadow: '0px 0px 15px -4px #FFBFA8',
    color: 'white',
  },
  itemChecked: {
    backgroundColor: 'white',
    color: '#DBDEE4',
    textDecoration: 'line-through',
    boxShadow: '0px 0px 15px -4px #DBDEE4',
  }
};

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }

  toggle() {
    this.setState({checked: !this.state.checked});
    this.props.toggle(this.props.todoId, !this.state.checked);
  }

  render() {
    const fillColor = this.state.checked ? "#DBDEE4" : "#FFFFFF";
    const itemStyle = this.state.checked ? styles.itemChecked : styles.itemUnchecked;
    return (
      <StyledView
        onClick={() => this.toggle()}
        style={itemStyle}
      >
        <DoneIcon checked={this.state.checked} size={14} fill={fillColor}/>
        <Text style={styles.itemText}>{this.props.text}</Text>
      </StyledView>
    );
  }
}

export default TodoItem;
