import React, { Fragment, Component } from 'react';
import { Form, Row } from 'react-bootstrap';
import DateTimePickerField from 'react-datetime-picker';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

export class DateTimePicker extends Component {
  render() {
    const { label, input, className, id, maxDate, minDate, disabled } = this.props;
    const { error, invalid } = this.props.meta;

    switch (input.type) {
      case 'time':
        return (
          <Fragment>
            <Row><Form.Label>{label}</Form.Label></Row>
            <Row>
              <TimePicker
                name={input.name}
                onChange={input.onChange}
                value={input.value}
                disabled={disabled || false}
                locale='pt-BR'
                className={className}
                id={id}
              />
              <p className='text-danger'>
                {invalid && error}
              </p>
            </Row>
          </Fragment>
        );
      case 'date':
        return (
          <Fragment>
            <Row><Form.Label>{label}</Form.Label></Row>
            <Row>
              <DatePicker
                name={input.name}
                onChange={input.onChange}
                value={input.value}
                disabled={disabled || false}
                locale='pt-BR'
                className={className}
                minDate={minDate}
                maxDate={maxDate}
                id={id}
              />
              <p className='text-danger'>
                {invalid && error}
              </p>
            </Row>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <Row><Form.Label>{label}</Form.Label></Row>
            <Row>
              <DateTimePickerField
                name={input.name}
                onChange={input.onChange}
                value={input.value}
                disabled={disabled || false}
                locale='pt-BR'
                className={className}
                minDate={minDate}
                maxDate={maxDate}
                id={id}
              />
              <p className='text-danger'>
                {invalid && error}
              </p>
            </Row>
          </Fragment>
        )
    }
  }
}
