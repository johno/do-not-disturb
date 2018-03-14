import test from 'ava';
import m from '.';

test(t => {
  if (process.env.CI) {
    t.pass();
    return;
  }

  t.notThrows(m.on(new Error('test')));
  t.notThrows(m.off(new Error('test')));
});
