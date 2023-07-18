import { render } from '@testing-library/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component'; 

describe('LoginComponent', () => {
  it('should display "User Not authenticated" when user is not logged in', async () => {

    const { getByText } = await render(LoginComponent, {
      imports: [FormsModule, ReactiveFormsModule],
    });

    expect(getByText('User Not authenticated')).toBeTruthy();
  });

  it('should display "Authenticated User" when user is logged in', async () => {
    const { getByText } = await render(LoginComponent, {
      imports: [FormsModule, ReactiveFormsModule],
      componentProperties: { userLoginOn: true },
    });

    expect(getByText('Authenticated User')).toBeTruthy();
  });

  it('should display error message for required email field', async () => {
   
    const { getByLabelText, getByText } = await render(LoginComponent, {
      imports: [FormsModule, ReactiveFormsModule],
    });

    const emailInput = getByLabelText('Email'); 
    expect(emailInput).toBeTruthy(); 
    emailInput.blur();
    expect(getByText('Email is required.')).toBeTruthy();
  });

});