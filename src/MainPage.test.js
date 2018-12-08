import * as React from 'react';
import MainPage from  './MainPage';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  shallow(<MainPage />);
});

it('does not take any parameters', () => {
  shallow(<MainPage />);
});

it('should render Tuesday by defalut', () => {
  const wrapper = shallow(<MainPage />);
  expect(wrapper.state().day).toEqual("Tue");
});

it('should change state after clicking', () => {
  const wrapper = shallow(<MainPage />);
  expect(wrapper.state().day).toEqual("Tue");

  const firstButton = wrapper.find('button').at(0);
  firstButton.simulate('click');
  expect(wrapper.state().day).toEqual("Mon");

  const secondButton = wrapper.find('button').at(1);
  secondButton.simulate('click');
  expect(wrapper.state().day).toEqual("Tue");

  const thirdButton = wrapper.find('button').at(2);
  thirdButton.simulate('click');
  expect(wrapper.state().day).toEqual("Wed");

  const fourthButton = wrapper.find('button').at(3);
  fourthButton.simulate('click');
  expect(wrapper.state().day).toEqual("Thu");

  const fifthButton = wrapper.find('button').at(4);
  fifthButton.simulate('click');
  expect(wrapper.state().day).toEqual("Fri");

});