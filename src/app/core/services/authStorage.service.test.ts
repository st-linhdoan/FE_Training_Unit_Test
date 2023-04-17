import { AuthStorageService } from '../services/authStorage.service';
  
describe('test auth service', () => {
  const authStorageService = new AuthStorageService();
  const mockGetLocal = jest.spyOn(Storage.prototype, 'getItem');
  const mockSetLocal = jest.spyOn(Storage.prototype, 'setItem');
  const mockRemoveLocal = jest.spyOn(Storage.prototype, 'removeItem');

  it('getToken is called', () => {
    authStorageService.getToken();
    expect(mockGetLocal).toBeCalled();
    expect(mockGetLocal).toBeCalledWith('token');
  });

  it('setToken is called', () => {
    const token = 'abc';
    authStorageService.setToken(token);
    expect(mockSetLocal).toBeCalled();
    expect(mockSetLocal).toBeCalledWith('token', 'abc');
  });

  it('removeToken is called', () => {
    authStorageService.removeToken();
    expect(mockRemoveLocal).toBeCalled();
  });
});
