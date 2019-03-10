export const promisesOfLoadBodyScripts = {};

const createPromiseOfLoadScript = src => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.addEventListener("load", () => {
      resolve();
    });
    script.addEventListener("error", error => {
      reject(error);
    });
    document.body.appendChild(script);
  });
};

const insertBodyScript = src => {
  if (!promisesOfLoadBodyScripts.hasOwnProperty(src)) {
    promisesOfLoadBodyScripts[src] = createPromiseOfLoadScript(src);
  }
  return promisesOfLoadBodyScripts[src];
};

const insertBodyStyle = url => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
};

export const configReactProject = (config = {}) => {
  config.scripts && config.scripts.map(script => insertBodyScript(script));
  config.styles && config.styles.map(style => insertBodyStyle(style));
};
