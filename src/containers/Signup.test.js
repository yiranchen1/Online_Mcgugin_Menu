import * as React from 'react';
import Signup from  './Signup';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    shallow(<Signup />);
});


it('should change state after clicking submit', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.state().isLoading).toEqual(false);

    const firstButton = wrapper.find('LoaderButton').at(0);
    firstButton.simulate('click');
    expect(wrapper.state().isLoading).toEqual(true);
    expect(wrapper.state().email).toBeDefined();
    expect(wrapper.state().password).toBeDefined();
    expect(wrapper.state().confirmPassword).toBeDefined();
    expect(wrapper.state().confirmPassword).toBeDefined();
    !expect(wrapper.state().newUser).toBeNull();
});