import React from 'react';
import { mount } from 'enzyme';
import App from './App'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router'

describe('App', () => {
    describe('when is Authenticated', () => {
    it('should render menu button', () => {
        const wrapper = mount(
            <App isAutenticated={false}>
        <div>ahoy!</div>
    </App>
);
    expect(wrapper.html()).toEqual('<div>ahoy!</div>');
    wrapper.unmount();
});
});
});

const logout = require(App)
test(`async logout passed'`, async () => {
    const str = await logout()
    expect(str).toBe('TEST')
})

describe('Test the main page', () => {
    it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});
});

test('Link to login', () => {
    const component = renderer.create(
        <StaticRouter>
        <Link to="/login" />
    </StaticRouter>
);

let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});

test('Link to signup', () => {
    const component = renderer.create(
        <StaticRouter>
        <Link to="/signup" />
    </StaticRouter>
);

let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});