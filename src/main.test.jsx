// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { createRootMock } = vi.hoisted(() => ({ createRootMock: vi.fn(() => ({ render: vi.fn() })) }));
vi.mock('react-dom/client', () => ({
  createRoot: createRootMock,
}));

describe('main entry', () => {
  beforeEach(() => {
    createRootMock.mockClear();
  });

  it('mounts the app to the root element', async () => {
    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);

    await import('./main.jsx');

    expect(createRootMock).toHaveBeenCalledWith(container);
    document.body.removeChild(container);
  });
});
