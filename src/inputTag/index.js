import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class InputTag extends Component {

  static defaultProps = {
    className: '',
    placeholder: '输入后回车',
    onChange: () => { },
    colors: 'primary',
    value: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      selectedTags: props.value,
    };

    this.handleDeleteSelectTag = this.handleDeleteSelectTag.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);

  }

  handleValueChange(values) {
    const value = values.target.value;
    this.setState({
      value,
    })
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      const { selectedTags, value } = this.state;
      const currentTarget = value.trim();
      if (selectedTags.includes(currentTarget) || currentTarget === '') {
        this.setState({
          value: '',
        })
        return;
      }
      selectedTags.push(currentTarget);
      this.setState({
        selectedTags,
        value: '',
      }, () => {
        this.props.onChange(selectedTags);
      })
    }
  }

  handleDeleteSelectTag(currentTarget) {
    const { selectedTags } = this.state;
    const currentTargetIndex = selectedTags.findIndex((selectTag) => (selectTag === currentTarget));
    selectedTags.splice(currentTargetIndex, 1);
    this.setState({
      selectedTags,
    }, () => {
      this.props.onChange(selectedTags);
    })
  }

  render() {
    const { selectedTags, value } = this.state;
    const { colors, className, placeholder, id } = this.props;
    return (
      <div className={`tagContainer ${className}`}>
        {selectedTags.length > 0
          && selectedTags.map((selectedTag) =>
            (<span
              onClick={() => { this.handleDeleteSelectTag(selectedTag) }}
              className={`selectTagItem u-button-${colors}`}
              key={selectedTag}
            >
              {selectedTag}
              <span className="tagCloseIcon" />
            </span>))
        }
        <input
          id={id}
          type="text"
          value={value}
          maxLength="100"
          className="tagInput"
          onChange={this.handleValueChange}
          onKeyDown={this.handleKeyDown}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

InputTag.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  colors: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
}

export default InputTag;
