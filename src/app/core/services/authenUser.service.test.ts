import { AuthStorageService } from '../services/authStorage.service';
import AuthenUser from './authenUser.service';

describe('Authen User', () => {
  const authenUser = new AuthenUser();
  const mockGetToken = jest.spyOn(AuthStorageService.prototype, 'getToken');
  const mockSetToken = jest.spyOn(AuthStorageService.prototype, 'setToken');
  const mockRemoveToken = jest.spyOn(
    AuthStorageService.prototype,
    'removeToken'
  );

  const token = 'token';

  test('signIn', () => {
    authenUser.signIn(token);
    expect(mockSetToken).toBeCalled();
    expect(mockSetToken).toBeCalledWith('token');
  });
  
  test('signOut', () => {
    authenUser.signOut();
    expect(mockRemoveToken).toBeCalled();
  });

  test('get user info', () => {
    authenUser.getUser();
    expect(mockGetToken).toBeCalled();
  });
});
