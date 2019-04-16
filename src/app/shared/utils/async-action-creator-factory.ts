export const asyncActionCreatorFactory = <I, S, F>(type) => {
  const types: {
    readonly INIT: string,
    readonly SUCCESS: string,
    readonly FAILURE: string
  } = {
    INIT: `${type}_INIT`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`,
  };

  const actionCreator = <T>(type) => {
    return (payload?: T) => ({ type, payload });
  };

  return {
    types,
    init: actionCreator<I>(types.INIT),
    success: actionCreator<S>(types.SUCCESS),
    failure: actionCreator<F>(types.FAILURE)
  };
};
