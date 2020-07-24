import { renderHook } from "@testing-library/react-hooks";
import axios from '../axios';
import MockAdapter from "axios-mock-adapter"
import useAxios from './useAxios';

const mock = new MockAdapter(axios);
const url = '/test'
const mockResponse = [
    { id: 1, flower: 'flower1' },
    { id: 2, flower: 'flower2' },
    { id: 3, flower: 'flower3' },
]
mock.onGet(url).reply(200, mockResponse);

describe('Test block useAxios.js', () => {
  test('should get 3 flowers', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAxios(url));

    expect(result.current.data).toBe(null);

    await waitForNextUpdate();

    expect(result.current.data.length).toBe(3);
  });
});