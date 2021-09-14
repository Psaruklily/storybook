import { reduce } from 'lodash-es';

const bemHelper =  (baseClass, modifiers) => {
  if (!modifiers) return baseClass;

  return reduce(modifiers, (result, isActive, modifier) => {
    let tmp = result;

    if (!result.length) {
      tmp = baseClass;
    }

    if (isActive) {
      tmp += ` ${baseClass}--${modifier}`;
    }

    return tmp;
  }, '');
};

export default bemHelper;

