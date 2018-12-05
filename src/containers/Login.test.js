import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router'

test('Link to home page', () => {
    const component = renderer.create(
        <StaticRouter>
            <Link to="/" />
        </StaticRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('validate form', () => {
    this.state.email = "sddddd";
    this.state.password = "";
    expect(validateForm()).toBeFalsy();
})

test('async submit test', async () => {
    expect.assertions(1);
    try {
        await Auth.signIn(this.state.email, this.state.password);
    } catch (e) {
        alert(e.message);
    }
});



