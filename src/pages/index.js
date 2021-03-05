const files = require.context('.', true, /\.jsx$/)
const pages = []
files.keys().forEach((key)=> {
  let i = key.replace(/(\.\/|\.jsx)/g, '');
  if (i !== 'index') {
    let comp = files(key).default;
    let path = `/${i}`;
    pages.push({
      path,
      comp
    });

  }
})
export default pages