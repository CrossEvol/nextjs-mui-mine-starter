export const singleton = () => {
  let instance: any = {}

  function createInstance() {
    if (!instance) {
      instance = {
        name: '小明',
        anomyMethods: function () {},
      }
    }
    return instance
  }

  return {
    getInstance: createInstance,
  }
}
