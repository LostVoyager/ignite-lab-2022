import {Meta, StoryObj} from '@storybook/react'
import {within, userEvent, waitFor} from '@storybook/testing-library'
import {expect} from '@storybook/jest'
import {LoginScreen} from './LoginScreen'
import {rest} from 'msw';

export default {
  title: 'Pages/LoginScreen',
  component: LoginScreen,
  args: {
  },
  argTypes: {
    
  },
  parameters:{
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx)=>
        {
          return res(ctx.json({
            message: 'Login OK'
          }))
        })
      ],
    },
  },
} as Meta

export const Default: StoryObj = {
};

export const LoggedIn: StoryObj = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    userEvent.type(canvas.getByTestId('email'), 'email@address.com');
    userEvent.type(canvas.getByTestId('password'), 'password');
    userEvent.click(canvas.getByTestId('submitButton'));

    await waitFor(()=>{
      expect(canvas.getByText('User Logged In')).toBeInTheDocument();
    })
  }
};