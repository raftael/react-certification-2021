import { renderHook } from '@testing-library/react-hooks';
import useFetch from './useFetch';

const videos = [
  {
    id: '123',
    snippet: { title: 'title', description: 'desc' },
  },
  {
    id: '456',
    snippet: { title: 'title2', description: 'desc2' },
  },
];

describe('useFetch', () => {
  test('should return data after fetch', async () => {
    // mock service
    const service = jest.fn(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(videos);
        }, 50);
      });
    });

    // execute
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(service, '', { current: true }, [])
    );
    await waitForNextUpdate();

    // asert
    expect(result.current).toStrictEqual({
      loading: false,
      data: videos,
      error: null,
    });
  });
});
