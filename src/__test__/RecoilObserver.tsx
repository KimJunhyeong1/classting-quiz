import { useEffect } from 'react';
import { atom, RecoilState, useRecoilValue } from 'recoil';

export const RecoilObserver = ({
  node,
  onChange,
}: {
  node: RecoilState<any>;
  onChange: jest.Mock;
}) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};
